import { createRealEstateSchema, returnMultipleRealEstateSchema, realEstateSchema} from '../schemas/realEstate.schemas'
import { z } from 'zod'
import { RealEstate } from '../entities';

type IRealEstate = z.infer<typeof realEstateSchema>;
type IRealEstateCreate = z.infer<typeof createRealEstateSchema>;
type IRealEstateArray = z.infer<typeof returnMultipleRealEstateSchema>;
type IRealEstateResult = Array<RealEstate>;

export {
    IRealEstate,
    IRealEstateCreate,
    IRealEstateResult,
    IRealEstateArray,
  };
  