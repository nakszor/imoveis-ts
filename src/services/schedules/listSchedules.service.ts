import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule } from "../../entities"
import AppError from "../../errors/appError"

const listSchedulesService = async (realEstateId: number) => {

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstate: RealEstate | null = await realEstateRepository.findOne({
        where: { id: realEstateId },
      });
    
      if (!realEstate) {
        throw new AppError("RealEstate not found", 404);
      }
    
      const schedulesRealEstate = await realEstateRepository
        .createQueryBuilder("real_estate")
        .select([
          "real_estate",
          "address",
          "category",
          "schedule_realEstates",
          "user.name",
          "user.email",
          "user.admin"
        ])
        .innerJoin("real_estate.address", "address")
        .innerJoin("real_estate.category", "category")
        .innerJoin("real_estate.schedules", "schedule_realEstates")
        .innerJoin("schedule_realEstates.user", "user")
        .where("real_estate.id = :id", { id: realEstateId })
        .getOne();
    
      return schedulesRealEstate!;
}

export default listSchedulesService