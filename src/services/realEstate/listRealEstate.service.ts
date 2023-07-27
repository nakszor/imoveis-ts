import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"
import { IRealEstateArray } from "../../interfaces/realEstate.interfaces"

const listRealEstateService = async (): Promise<IRealEstateArray> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstates: RealEstate[] = await realEstateRepository
    .createQueryBuilder('realEstate')
    .leftJoinAndSelect('realEstate.address', 'address')
    .getMany();

  return realEstates;

}

export default listRealEstateService
