import { useState } from 'react';
import { jsPDF } from 'jspdf';

// Carga dinámica de html2pdf (usa CDN) y devuelve la función html2pdf disponible en window
function loadHtml2Pdf() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return reject(new Error('No browser'));
    if (window.html2pdf) return resolve(window.html2pdf);
    const existing = document.querySelector('script[data-html2pdf]');
    if (existing) {
      existing.addEventListener('load', () => resolve(window.html2pdf));
      existing.addEventListener('error', () => reject(new Error('Failed to load html2pdf')));
      return;
    }
    const s = document.createElement('script');
    s.src = 'https://unpkg.com/html2pdf.js@0.9.3/dist/html2pdf.bundle.min.js';
    s.setAttribute('data-html2pdf', '');
    s.onload = () => resolve(window.html2pdf);
    s.onerror = () => reject(new Error('Failed to load html2pdf'));
    document.head.appendChild(s);
  });
}

export default function DownloadCVButton() {
  const [loading, setLoading] = useState(false);

  async function fetchJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Fetch failed: ' + url);
    return res.json();
  }

  async function handleDownload() {
    setLoading(true);
    try {
      // Primero intentamos generar con html2pdf para conservar estilos web
      try {
        console.log('[DownloadCVButton] intentando html2pdf...');
        const html2pdf = await loadHtml2Pdf();

        // Seleccionar secciones del CV (si existen)
        const ids = ['idhome', 'idexperiencia', 'idEducacion', 'idproyectos'];
        const wrapper = document.createElement('div');
        wrapper.style.width = '210mm';
        wrapper.style.boxSizing = 'border-box';
        wrapper.style.background = getComputedStyle(document.body).backgroundColor || '#ffffff';
        wrapper.style.padding = '10mm';

        let found = false;
        ids.forEach((id) => {
          const el = document.getElementById(id);
          if (el) {
            found = true;
            const clone = el.cloneNode(true);
            clone.querySelectorAll && clone.querySelectorAll('.fixed').forEach(n => n.remove());
            wrapper.appendChild(clone);
          }
        });
        if (!found) wrapper.appendChild((document.querySelector('main') || document.body).cloneNode(true));

        wrapper.style.position = 'absolute';
        wrapper.style.left = '-10000px';
        document.body.appendChild(wrapper);

        const opt = {
          margin: 10,
          filename: 'cv-jose-carlos-moreno-styled.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, allowTaint: false },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // dar un pequeño retardo para que fuentes/imagenes se resuelvan
        await new Promise((r) => setTimeout(r, 400));
        await html2pdf().set(opt).from(wrapper).save();
        document.body.removeChild(wrapper);
        setLoading(false);
        return;
      } catch (errHtml) {
        console.warn('[DownloadCVButton] html2pdf falló, usando fallback jsPDF:', errHtml);
        // si falla html2pdf, continuamos con el fallback jsPDF a continuación
      }

      // Fallback: generación basada en jsPDF (texto)
      const [experiencia, educacion] = await Promise.all([
        fetchJson('/mocks/experiencia.json'),
        fetchJson('/mocks/educacion.json'),
      ]);

      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      const margin = 40;
      let y = margin;

      // Header
      doc.setFontSize(22);
      doc.setFont('helvetica', 'bold');
      doc.text('José Carlos Moreno Martín', margin, y);
      y += 26;
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text('Software Developer', margin, y);
      y += 18;
      doc.text('Email: josecmoreno3d@gmail.com    Tel: +34 618 804 308', margin, y);
      y += 24;

      // Experience
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Experiencia', margin, y);
      y += 18;

      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');

      experiencia.forEach((item) => {
        if (y > 750) { doc.addPage(); y = margin; }
        doc.setFont('helvetica', 'bold');
        doc.text(`${item.empresa}${item.ano}`, margin, y);
        y += 14;
        doc.setFont('helvetica', 'normal');
        doc.text(item.titulo, margin, y);
        y += 12;

        if (item.proyectos) {
          item.proyectos.forEach((p) => {
            if (y > 750) { doc.addPage(); y = margin; }
            doc.setFont('helvetica', 'bold');
            doc.text(`- ${p.titulo}`, margin + 10, y);
            y += 12;
            doc.setFont('helvetica', 'normal');
            // wrap description
            const split = doc.splitTextToSize(p.descripcion, 500);
            doc.text(split, margin + 20, y);
            y += split.length * 12 + 6;
            if (p.tareas) {
              p.tareas.forEach((t) => {
                const tSplit = doc.splitTextToSize('• ' + t, 480);
                doc.text(tSplit, margin + 30, y);
                y += tSplit.length * 12;
              });
            }
            y += 6;
          });
        }
        y += 6;
      });

      if (y > 700) { doc.addPage(); y = margin; }
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Educación', margin, y);
      y += 18;
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');

      educacion.forEach((ed) => {
        if (y > 750) { doc.addPage(); y = margin; }
        doc.setFont('helvetica', 'bold');
        doc.text(`${ed.empresa}${ed.ano}`, margin, y);
        y += 14;
        doc.setFont('helvetica', 'normal');
        doc.text(ed.titulo, margin, y);
        y += 12;
      });

      doc.save('cv-jose-carlos-moreno.pdf');
    } catch (err) {
      console.error('Error generando PDF', err);
      alert('Error generando PDF: ' + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDownload}
      className="inline-block px-5 py-3 bg-primary text-white rounded-lg shadow hover:opacity-90"
      disabled={loading}
    >
      {loading ? 'Generando...' : 'Descargar CV (PDF)'}
    </button>
  );
}
