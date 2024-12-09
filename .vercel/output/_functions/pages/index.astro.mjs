/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderScript, e as renderHead, f as renderSlot, m as maybeRenderHead, g as addAttribute, h as renderComponent } from '../chunks/astro/server_BEKT1gxf.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://mrharvyson.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css">${renderScript($$result, "/Users/josecarlosmorenomartin/Documents/ASTRO/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}<title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/josecarlosmorenomartin/Documents/ASTRO/src/layouts/Layout.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="barra flex justify-between items-center px-4 lg:px-[5%] pt-7 pb-5 backdrop-filter backdrop-blur-md scrollnav--oscuro" data-astro-cid-dmqpwcec> <!-- Logo --> <p class="barra__logo font-bold text-2xl flex w-[100px]" data-astro-cid-dmqpwcec>
Portfolio<span class="text-azul font-bold text-2xl" data-astro-cid-dmqpwcec>.</span> </p> <!-- Menu --> <nav data-astro-cid-dmqpwcec> <ul class="barra__links flex gap-14 [&>li>a]:text-base [&>li>a]:cursor-pointer" data-astro-cid-dmqpwcec> <li data-astro-cid-dmqpwcec> <a href="#idhome" class="barra__link barra__link--active" data-ref="1" data-astro-cid-dmqpwcec>Home</a> </li> <li data-astro-cid-dmqpwcec> <a href="#idexperiencia" class="barra__link" data-ref="2" data-astro-cid-dmqpwcec>Education & Experience</a> </li> <li data-astro-cid-dmqpwcec> <a href="#idskills" class="barra__link" data-ref="3" data-astro-cid-dmqpwcec>Skills</a> </li> <li data-astro-cid-dmqpwcec> <a class="barra__link cursor" data-ref="4" data-astro-cid-dmqpwcec>Proyects</a> </li> </ul> </nav> <!-- Redes sociales --> <nav class="flex justify-end barra__links w-[100px]" data-astro-cid-dmqpwcec> <a href="" class="barra__link pr-5" data-astro-cid-dmqpwcec> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" data-astro-cid-dmqpwcec> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-astro-cid-dmqpwcec></path> </svg> </a> <a href="https://www.linkedin.com/in/jose-carlos-moreno-martin-00201362/" target="_blank" class="barra__link" data-astro-cid-dmqpwcec> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" data-astro-cid-dmqpwcec> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" data-astro-cid-dmqpwcec></path> </svg> </a> </nav> </header>  ${renderScript($$result, "/Users/josecarlosmorenomartin/Documents/ASTRO/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josecarlosmorenomartin/Documents/ASTRO/src/components/Nav.astro", void 0);

const $$Intro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="idhome"> <div class="flex justify-center gap-[5%] items-center h-screen"> <div class="flex flex-col justify-center [&>p]:flex [&>p]:justify-end relative"> <p class="sm:text-[1rem] md:text-[2rem] lg:text-[6rem] font-bold">
José Moreno
</p> <p class="sm:text-[0.5rem] md:text-[1rem] lg:text-[2.75rem] text-azul font-medium">
Software Developer
</p> </div> <div class="w-1/2 flex justify-center max-w-[500px]"> <img class="scale-x-[-1] bg-transparent relative z-2" src="images/fotoD.png" alt="foto"> </div> </div> </section> ${renderScript($$result, "/Users/josecarlosmorenomartin/Documents/ASTRO/src/components/Intro.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josecarlosmorenomartin/Documents/ASTRO/src/components/Intro.astro", void 0);

const $$Astro = createAstro("https://mrharvyson.github.io");
const $$CardExperienceSimple = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardExperienceSimple;
  const { imgBlanco, imgColor, titulo, descripcion, ano, empresa } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card flex justify-center items-center w-full gap-20"> <img class="blanco w-[150px] h-[150px]"${addAttribute(imgBlanco, "src")}> <img class="color w-[150px] h-[150px] hidden"${addAttribute(imgColor, "src")}> <div class="flex flex-col w-[600px]"> <p class="text-rojo pb-5 font-medium text-4xl"> ${empresa}<span class="font-light text-base">${ano}</span> </p> <p class="text-xl font-bold pb-2">${titulo}</p> <p class="text-white/[30%] text-base">${descripcion}</p> </div> </div>`;
}, "/Users/josecarlosmorenomartin/Documents/ASTRO/src/components/Card_experience_simple.astro", void 0);

const experiencia = [
	{
		imgBlanco: "images/viewnextBlanco.png",
		imgColor: "images/viewnextColor.png",
		empresa: "VIEWNEXT",
		ano: " | Noviembre 2023 - Actualmente",
		titulo: "Software Developer Microservice Java",
		descripcion: "Desarrollo de microservicios para GISS (Gerencia de Informática de la Seguridad Social). Desarrollo, creación e investigación de microservicios en Spring Boot. Creación de contenedores Docker para garantizar la homogeneidad de las herramientas utilizadas por el equipo."
	},
	{
		imgBlanco: "images/vedrunaBlanco.png",
		imgColor: "images/vedrunaColor.png",
		empresa: "VEDRUNA",
		ano: " | Septiembre 2023 - Actualmente",
		titulo: "Profesor de Desarrollo de Aplicaciones Multiplataforma y Web",
		descripcion: "Profesor de Ciclo Formativo de Grado Superior (CFGS) en Desarrollo de Aplicaciones Web y Desarrollo de Aplicaciones Multiplataforma (Programación, Base de datos, Programación multimedia y dispositivos móviles, Diseño de interfaces web, Lenguaje de Marcas"
	},
	{
		imgBlanco: "images/deloitte_blanco.png",
		imgColor: "images/deloitte_blanco.png",
		empresa: "DELOITTE",
		ano: " | Marzo 2023 - Junio 2023",
		titulo: "Frontend Developer",
		descripcion: "Desarrollo de aplicación móvil con Flutter."
	},
	{
		imgBlanco: "images/vedrunaBlanco.png",
		imgColor: "images/vedrunaColor.png",
		empresa: "VEDRUNA",
		ano: " | 2021 - 2023",
		titulo: "Educación: Grado Superior de Desarrollo de Aplicaciones Multiplataforma",
		descripcion: "Formación profesional en Desarrollo de Aplicaciones Multiplataforma."
	},
	{
		imgBlanco: "images/penduloBlanco.png",
		imgColor: "images/penduloBlanco.png",
		empresa: "PENDULO STUDIO",
		ano: " | 2017 - 2018",
		titulo: "Computer Graphics Generalist",
		descripcion: "Modelado de props para el video juego BlackSad"
	},
	{
		imgBlanco: "images/boneBlanco.png",
		imgColor: "images/viewnextColor.png",
		empresa: "BONE STUDIO",
		ano: " | 2016 - 2018",
		titulo: "Computer Graphics Generalist",
		descripcion: "Bone Studio"
	},
	{
		imgBlanco: "images/logoWhitelineBlanco.png",
		imgColor: "images/viewnextColor.png",
		empresa: "WHITELINE STUDIO",
		ano: " | 2014 - 2016",
		titulo: "Computer Graphics Generalist",
		descripcion: "Whiteline Studio"
	}
];

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-24" id="idexperiencia"></div> <section class="pb-[200px] pt-10"> <a class="flex justify-center font-bold text-6xl">
Education & <span class="font-bold text-6xl text-azul">&nbsp Experience</span></a> <div class="cards flex flex-col pt-[175px] gap-[125px]"> ${experiencia.map((exp) => {
    return renderTemplate`${renderComponent($$result, "CardExperience", $$CardExperienceSimple, { "imgBlanco": exp.imgBlanco, "imgColor": exp.imgColor, "empresa": exp.empresa, "ano": exp.ano, "titulo": exp.titulo, "descripcion": exp.descripcion })}`;
  })} </div> </section> ${renderScript($$result, "/Users/josecarlosmorenomartin/Documents/ASTRO/src/components/Experience.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/josecarlosmorenomartin/Documents/ASTRO/src/components/Experience.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-24" id="idskills"></div> <section class="pt-10"> <p class="flex justify-center font-bold text-6xl">
My <span class="font-bold text-6xl text-azul">_Skills</span> </p> <div class="h-[1000px]"></div> </section>`;
}, "/Users/josecarlosmorenomartin/Documents/ASTRO/src/components/Skills.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Jos\xE9 Carlos Moreno Mart\xEDn" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed z-40 top-0 w-full"> ${renderComponent($$result2, "Nav", $$Nav, {})} </div> ${renderComponent($$result2, "Intro", $$Intro, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ` })}`;
}, "/Users/josecarlosmorenomartin/Documents/ASTRO/src/pages/index.astro", void 0);

const $$file = "/Users/josecarlosmorenomartin/Documents/ASTRO/src/pages/index.astro";
const $$url = "/Astro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
