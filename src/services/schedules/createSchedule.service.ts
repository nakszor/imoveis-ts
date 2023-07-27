import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { RealEstate, Schedule, User } from '../../entities'
import AppError from '../../errors/appError'


const createScheduleService = async (scheduleData: any, userId: Number) => {

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const { date, hour, realEstateId } = scheduleData;

    const startTime = new Date();
    startTime.setHours(8, 0, 0, 0); 
    
    const endTime = new Date();
    endTime.setHours(18, 0, 0, 0); 
    
    const [scheduleHour, scheduleMinute] = hour.split(':');
    const scheduleTime = new Date();
    scheduleTime.setHours(scheduleHour, scheduleMinute, 0, 0);
    
    if (scheduleTime < startTime || scheduleTime > endTime) {
      throw new AppError('Invalid hour, available times are 8AM to 18PM', 400);
    }
    const weekday = new Date(date).getDay();

    if (weekday === 0 || weekday === 6) {
    throw new AppError('Invalid date, work days are monday to friday', 400);
    }
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstateExists = await realEstateRepository.findOne({
        where: {
            id: realEstateId
        }
    })

    if(!realEstateExists){
        throw new AppError('RealEstate not found', 404)
    }

    const existingUserSchedule = await scheduleRepository
    .createQueryBuilder('schedule')
    .where('schedule.date = :date', { date: date })
    .andWhere('schedule.hour = :hour', { hour: hour })
    .andWhere('schedule.userId = :userId', { userId: userId })
    .andWhere('(schedule.realEstateId = :realEstateId OR schedule.realEstateId != :realEstateId)', { realEstateId: realEstateId })
    .getOne();
  
  if (existingUserSchedule) {
    throw new AppError('User schedule to this real estate at this date and time already exists', 409);
  }
    
    const existingSchedule = await scheduleRepository
    .createQueryBuilder('schedule')
    .where('schedule.date = :date', { date: date })
    .andWhere('schedule.hour = :hour', { hour: hour })
    .andWhere('schedule.realEstate = :realEstateId', { realEstateId: realEstateId })
    .getOne();


  if (existingSchedule) {
    throw new AppError('Schedule to this real estate at this date and time already exists', 409);
  }

  const user: User | null = await userRepository
  .createQueryBuilder('user')
  .where('user.id = :id', { id: userId })
  .getOne();

  const scheduleDataInsert = { 
    ...scheduleData,
    realEstate: realEstateExists,
    user: user
  }

    const schedule = scheduleRepository.create(scheduleDataInsert)
    await scheduleRepository.save(schedule)

  
    return {message: "Schedule created"}

}

export default createScheduleService