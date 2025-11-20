import React, { useEffect } from 'react';

export default function NavInteractive({ selector = '.nav-link' }) {
  useEffect(() => {
    // Select links within provided selector scope
    const links = Array.from(document.querySelectorAll(selector));
    if (!links.length) return;

    // Build list of target elements from each link's href (supports any element with an id)
    const targets = links
      .map((link) => {
        const href = link.getAttribute('href') || '';
        if (!href.startsWith('#')) return null;
        const id = href.slice(1);
        return document.getElementById(id);
      })
      .filter(Boolean);

    if (!targets.length) return;

    const setActive = (id) => {
      links.forEach((link) => {
        link.classList.remove('text-primary');
        link.classList.add('text-gray-300');
        const href = link.getAttribute('href');
        if (href && href === `#${id}`) {
          link.classList.add('text-primary');
          link.classList.remove('text-gray-300');
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };

    // IntersectionObserver used as auxiliary mechanism (kept as fallback)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActive(visible[0].target.id);
        }
      },
      { root: null, rootMargin: '0px', threshold: [0, 0.25, 0.5] }
    );

    targets.forEach((t) => observer.observe(t));

    // Scroll-based detector: mark section active when its top crosses a viewport offset
    let rafId = null;
    const offsetY = Math.round(window.innerHeight * 0.15); // 15% from top

    const updateActiveByScroll = () => {
      const positions = targets.map((el) => ({ el, top: el.getBoundingClientRect().top }));

      // prefer the last element whose top is <= offsetY (closest one above the line)
      const candidates = positions.filter((p) => p.top <= offsetY);
      if (candidates.length) {
        const chosen = candidates.reduce((a, b) => (a.top > b.top ? a : b));
        setActive(chosen.el.id);
        rafId = null;
        return;
      }

      // if none above offset, pick the nearest one below
      const below = positions.filter((p) => p.top > offsetY).sort((a, b) => a.top - b.top);
      if (below.length) setActive(below[0].el.id);
      rafId = null;
    };

    const onScroll = () => {
      if (rafId != null) return;
      rafId = requestAnimationFrame(updateActiveByScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // initial check
    updateActiveByScroll();

    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a.nav-link');
      if (!a) return;
      // ensure the clicked link belongs to this selector scope
      if (!document.querySelector(selector)?.contains(a)) return;
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        try {
          history.replaceState(null, '', `#${id}`);
        } catch (err) {}
        setActive(id);
      }
    };

    document.addEventListener('click', onClick);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', onClick);
    };
  }, [selector]);

  return null;
}
