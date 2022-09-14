import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const CarZodSchema = vehicleZodSchema.extend({
  // Quantidade de portas de um carro. Deve ser um valor inteiro positivo maior ou igual a 2 e menor ou igual a 4
  doorsQty: z.number().positive().gte(2).lte(4),
  // Quantidade de assentos disponíveis no carro. Deve ser maior ou igual a 2 e menor ou igual a 7
  seatsQty: z.number().gte(2).lte(7),
});

export type ICar = z.infer<typeof CarZodSchema>;

export { CarZodSchema };