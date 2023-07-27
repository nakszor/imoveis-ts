import {  categorySchema } from '../schemas/categories.schemas'
import { z } from 'zod'

export type ICategory = z.infer<typeof categorySchema>



