import { z } from 'zod'

export const createCategorySchema = z.object({
    name: z.string().max(45)
})

export const categorySchema = z.object({
    id: z.number(),
    name: z.string()
})



