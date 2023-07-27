import { z } from 'zod'
import AppError from '../errors/appError'

export const userSchema = z.object({
    name: z.string().max(45),
    email: z.string().max(45).email(),
    password: z.string().max(120),
    admin: z.boolean().default(false)
})
export const userCreatedSchema = userSchema.extend({
    id: z.number(),
    admin: z.boolean(),
    createdAt: z.string(),
    deletedAt: z.string().nullish(),
    updatedAt: z.string().nullish()
})
export const userLoginSchema = z.object({
    email: z.string().max(45).email(),
    password: z.string().max(120)
}) 
export const userUpdateSchema = z.object({
    name: z.string().max(45).optional(),
    email: z.string().max(45).email().optional(),
    password: z.string().max(120).optional(),
  }).refine(obj => {
    if (!('name' in obj) && !('email' in obj) && !('password' in obj)) {
      throw new AppError('At least one of "name", "email", or "password" is required',400);
    }
    return true;
});
export const userWithoutPasswordSchema = userCreatedSchema.omit({password: true})

export const returnUserSchema = userSchema.extend({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
}).omit({password: true})

export const returnMultipleUserSchema = returnUserSchema.array()