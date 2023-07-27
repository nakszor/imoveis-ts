import { Request, Response } from 'express'
import { ICategory } from '../interfaces/categories.interfaces'
import createCategoryService from '../services/categories/createCategory.service'
import listCategoriesService from '../services/categories/listCategory.service'
import listCategoriesRealEstateService from '../services/categories/listCategoryRealEstate.service'

export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
    
    const categoryData: ICategory = req.body
    
    const category = await createCategoryService(categoryData)

    return res.status(201).json(category)
}



export const listCategoriesController = async (req: Request, res:Response): Promise<Response> =>{

   const categories = await listCategoriesService()

   return res.status(200).json(categories)

}

export const listCategoriesRealEstateController = async (req: Request, res:Response): Promise<Response> =>{

    const categoryId = Number(req.params.id)
    
    const categoriesRealEstates = await listCategoriesRealEstateService(categoryId)
 
    return res.status(200).json(categoriesRealEstates)
 
 }