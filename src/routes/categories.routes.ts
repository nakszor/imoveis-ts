import { Router } from 'express'
import { createCategoryController, listCategoriesController, listCategoriesRealEstateController } from '../controllers/categories.controllers'
import { verifyAdminPermissionMiddleware, verifyCategoryExistsMiddleware, verifyDataIsValidMiddleware, verifyTokenIsValidMiddleware } from '../middlewares'
import { categorySchema, createCategorySchema } from '../schemas/categories.schemas'

const categoriesRouter = Router()

categoriesRouter.post('', verifyDataIsValidMiddleware(createCategorySchema), verifyTokenIsValidMiddleware, verifyAdminPermissionMiddleware,verifyCategoryExistsMiddleware, createCategoryController)
categoriesRouter.get('',listCategoriesController)
categoriesRouter.get('/:id/realEstate',listCategoriesRealEstateController)

export default categoriesRouter