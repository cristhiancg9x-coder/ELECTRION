/**
 * @file zonas.js
 * @description Datos estáticos de zonas de cobertura para generar Landing Pages locales.
 * Se utiliza en `src/pages/electricista-en/[lugar].astro` para crear rutas dinámicas.
 */
// src/data/zonas.js
export const zonas = [
  {
    slug: "moquegua-cercado",
    nombre: "Moquegua",
    titulo: "Electricista en Moquegua",
    desc: "Atención inmediata en el centro y zonas residenciales de Mariscal Nieto. Llegamos en 30 minutos.",
  },
  {
    slug: "samegua",
    nombre: "Samegua",
    titulo: "Electricista en Samegua",
    desc: "Servicio exclusivo para residencias y negocios en Samegua. Expertos en acabados y seguridad.",
  },
  {
    slug: "torata",
    nombre: "Torata",
    titulo: "Electricista en Torata",
    desc: "Mantenimiento eléctrico respetando la estética de tu hogar y negocios agroindustriales.",
  },
  {
    slug: "san-antonio",
    nombre: "San Antonio",
    titulo: "Electricista en San Antonio",
    desc: "Atención a domicilios y comercios. Emitimos factura y certificado INDECI.",
  },
  {
    slug: "ilo",
    nombre: "Ilo",
    titulo: "Electricista en Ilo",
    desc: "Servicio técnico garantizado cerca al puerto y zonas urbanas e industriales.",
  },
  {
    slug: "pacocha",
    nombre: "Pacocha",
    titulo: "Electricista en Pacocha",
    desc: "Instalaciones seguras para zonas residenciales y centros de esparcimiento en Ciudad Nueva.",
  }
];