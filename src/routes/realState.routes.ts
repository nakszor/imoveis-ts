import { Router } from 'express'
import { createRealEstateController, listRealEstateController } from '../controllers/realEstate.controllers'
import { verifyAddressIsValidMiddleware, verifyAdminPermissionMiddleware, verifyDataIsValidMiddleware, verifyTokenIsValidMiddleware } from '../middlewares'
import { createRealEstateSchema } from '../schemas/realEstate.schemas'

const realEstateRouter = Router()

realEstateRouter.post('',
verifyTokenIsValidMiddleware, 
verifyAdminPermissionMiddleware , 
verifyDataIsValidMiddleware(createRealEstateSchema),
verifyAddressIsValidMiddleware, 
createRealEstateController)

realEstateRouter.get('', listRealEstateController)

export default realEstateRouter