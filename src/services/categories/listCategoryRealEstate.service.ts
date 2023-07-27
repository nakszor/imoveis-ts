import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category, RealEstate } from "../../entities"
import AppError from "../../errors/appError"
import { ICategory } from "../../interfaces/categories.interfaces"

export const listCategoriesRealEstateService = async (categoryId: number) => {
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
  
    const categoryExists = await categoryRepository.findOne({
        where: {
            id: categoryId
        }
    })
    
    if (!categoryExists) {
        throw new AppError('Category not found', 404);
      }

      const realEstates = await realEstateRepository.find({
        where: {
          category: categoryExists
        }
      });
    
  
    const realEstatesData = realEstates.map((realEstate) => ({
      id: realEstate.id,
      size: realEstate.size,
      value: realEstate.value,
      sold: realEstate.sold,
      createdAt: realEstate.createdAt,
      updatedAt: realEstate.updatedAt
    }));
  
    const response = {
      id: categoryExists.id,
      name: categoryExists.name,
      realEstate: realEstatesData
    }
  
    return response;
  }

  
export default listCategoriesRealEstateService