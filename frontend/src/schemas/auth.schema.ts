import { z } from "zod"

export const loginSchema = z.object({
    email: z
    .string()
    .min(1, "E-mail é obrigatório")
    .email("Formato de e-mail inválido"),

    password: z
    .string()
    .min(8, "Senha é obrigatória")
})

export const registerSchema = z.object({
    name: z
    .string()
    .min(2, "Nome deve ter ao menos 2 caracteres"),

    email: z
    .string()
    .email("E-mail inválido"),

    password: z
    .string()
    .min(8, "Senha deve ter ao menos 8 caracteres")
    .regex(/[A-Z]/, "A senha deve conter ao menos 1 letra maiúscula")
    .regex(/[0-9]/, "A senha deve conter ao menos 1 número"),

    confirmPassword: z
    .string(),

    terms: z
    .boolean()
    .refine((value) => value === true, 
    { message: "Você precisa aceitar os termos"}),
    
})
.refine ((d) => d.password === d.confirmPassword,
    { message: "As senhas não coincidem", path: ['confirmPassword']}
)