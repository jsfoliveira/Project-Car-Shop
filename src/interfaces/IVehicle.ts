import { z } from 'zod';

const vehicleZodSchema = z.object({
  // Marca e/ou modelo do veículo. Deve ser uma string com, pelo menos, 3 caracteres
  model: z.string().min(3),
  // Ano de fabricação do veículo. Deve ser um valor inteiro positivo maior ou igual a 1900, porém menor ou igual a 2022
  year: z.number().positive().gte(1900).lte(2022),
  // Cor principal do veículo. Deve ser uma string com, pelo menos, 3 caracteres
  color: z.string().min(3),
  // Status que define se um veículo pode ou não ser comprado. Deve receber valores booleanos e deve ser opcional
  status: z.boolean().optional(),
  // Valor de compra do veículo. Deve receber apenas números inteiros
  buyValue: z.number(),
});

export type IVehicle = z.infer<typeof vehicleZodSchema>;

export { vehicleZodSchema };