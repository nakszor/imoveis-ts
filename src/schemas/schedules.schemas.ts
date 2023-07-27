import { z } from 'zod'
import { realEstateSchema } from './realEstate.schemas'
import { returnUserSchema } from './user.schemas'

export const createScheduleSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number()
})

export const returnScheduleSchema = z.object({
    id: z.number(),
    date: z.date().or(z.string()),
    realEstate: realEstateSchema,
    user: returnUserSchema,
})