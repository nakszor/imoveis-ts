import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { ICategory } from "../../interfaces/categories.interfaces"

const listCategoriesService = async (): Promise<ICategory[]> => {

    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const findCategories: Array<Category> = await categoriesRepository.find()

    const categories = findCategories

    return categories

}

export default listCategoriesService
