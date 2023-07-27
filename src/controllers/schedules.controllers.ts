import { Request, Response } from "express"
import createScheduleService from "../services/schedules/createSchedule.service"
import listSchedulesService from "../services/schedules/listSchedules.service"

export const createScheduleController = async (req: Request, res: Response): Promise<Response> => {
    
    const userId = req.user.id

    const scheduleData = req.body

    const schedule = await createScheduleService(scheduleData, userId)

    return res.status(201).json(schedule)
}

export const listSchedulesController = async (req: Request, res:Response): Promise<Response> =>{

    const realEstateId = Number(req.params.id)
    
    const schedules = await listSchedulesService(realEstateId)
 
    return res.status(200).json(schedules)
 
 }