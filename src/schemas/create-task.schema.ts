import { z } from 'zod';


export const CreateTaskSchema = z.object({
    title: z.string().min(1, "El titulo es obligatorio"),
    description: z.string().default(""),
    priority: z.enum(["low", "medium", "high"]).default("medium")
})