import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Category } from '../../entities/categories.entities'
import { ICategory } from '../../interfaces/categories.interfaces'

const createCategoryService = async (categoryData: ICategory): Promise<Category> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const category = categoryRepository.create(categoryData)
    await categoryRepository.save(category)

   
    return category

}

export default createCategoryService
