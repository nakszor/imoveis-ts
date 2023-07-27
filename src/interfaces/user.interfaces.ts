import { z } from 'zod/lib'
import { DeepPartial } from 'typeorm'
import {userCreatedSchema, userSchema, userLoginSchema,userWithoutPasswordSchema, returnMultipleUserSchema, returnUserSchema} from '../schemas/user.schemas'

export type IUser = z.infer<typeof userSchema>
export type IUserLogin = z.infer<typeof userLoginSchema>
export type IUserUpdate = DeepPartial<IUser>
export type IUserResponse = z.infer<typeof userWithoutPasswordSchema>
export type IUserReturn = z.infer<typeof returnUserSchema>
export type IUsersReturn = z.infer<typeof returnMultipleUserSchema>
export type IUserWithPassword = z.infer<typeof userCreatedSchema>
