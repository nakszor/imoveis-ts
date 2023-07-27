import { createAddressSchema, returnAddressSchema} from '../schemas/address.schemas'
import { z } from 'zod'
import { DeepPartial } from 'typeorm'

export type IAddress = z.infer<typeof createAddressSchema>
export type IAddressReturn = DeepPartial<z.infer<typeof returnAddressSchema>>
