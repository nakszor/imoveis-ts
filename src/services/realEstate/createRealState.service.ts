import { Repository } from 'typeorm'
import AppError from '../../errors/appError'
import { AppDataSource } from '../../data-source'
import { RealEstate, Address, Category } from '../../entities'
import { realEstateSchema } from '../../schemas/realEstate.schemas'
import { IRealEstateCreate, IRealEstate } from '../../interfaces/realEstate.interfaces'

export const createRealEstateService = async (realEstateData: IRealEstateCreate): Promise<IRealEstate> => {
  
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
  const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);
  
  const propertyAddress = realEstateData.address

  const address:Address = addressRepository.create(propertyAddress);
  await addressRepository.save(address);


  const category = await categoryRepository.findOneBy({
    id: realEstateData.categoryId,
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const realEstate: RealEstate = realEstateRepository.create({
    ...realEstateData,
    address: address,
    category: category,
  });

 const newRealEstate = await realEstateRepository.save(realEstate);
  const parsedRealEstate = realEstateSchema.parse(newRealEstate);

  return parsedRealEstate
  
};
