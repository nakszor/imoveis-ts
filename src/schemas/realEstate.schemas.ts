import { z } from 'zod'
import { categorySchema } from './categories.schemas';
import { AddressSchema, createAddressSchema } from './address.schemas';

 const realEstateSchema = z.object({
  id: z.number().positive().int(),
  sold: z.boolean().optional().default(false),
  value: z.number().or(z.string()),
  size: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: AddressSchema,
  category: categorySchema,
});

const createRealEstateSchema = z.object({
  value: z.number().or(z.string()),
  size: z.number().positive(),
  address: createAddressSchema,
  categoryId: z.number(),
});
  
 const returnMultipleRealEstateSchema = realEstateSchema.partial().array();

 export { realEstateSchema, createRealEstateSchema, returnMultipleRealEstateSchema}