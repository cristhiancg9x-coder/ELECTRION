import { defineCollection, z } from 'astro:content';

const servicios = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string().describe("Nombre del servicio"),
    description: z.string().describe("Descripción detallada del servicio"),
    price: z.string().optional().describe("Precio referencial o texto 'A cotizar'"),
    image: image().optional().describe("Imagen principal del servicio"),
    imageFit: z.enum(['cover', 'contain']).optional().default('cover').describe("Ajuste de la imagen en tarjetas (cover/contain)"),
  }),
});

export const collections = {
  servicios,
};
