import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(5, { message: 'Nome deve ser maior que cinco caractéres' }),
  email: z.string().email({ message: 'Formato de email inválido' }).min(1, {
    message: 'Email é obrigatório',
  }),
  phone: z
    .string()
    .min(1, {
      message: 'Telefone é obrigatório',
    })
    .refine((data) => /^\(\d{2}\) \d{5}-\d{4}$/.test(data), {
      message: 'O telefone deve estar no formato (00) 00000-0000',
    }),
});
