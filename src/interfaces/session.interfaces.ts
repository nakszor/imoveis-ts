import { z } from 'zod'
import { createLoginSchema } from '../schemas/session.schemas'

export type ILogin = z.infer<typeof createLoginSchema>

