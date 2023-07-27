import { Router } from 'express'
import { createScheduleController, listSchedulesController } from '../controllers/schedules.controllers'
import {  verifyAdminPermissionMiddleware, verifyDataIsValidMiddleware, 
          verifyTokenIsValidMiddleware } from '../middlewares'
import { createScheduleSchema } from '../schemas/schedules.schemas'

const schedulesRouter = Router()

schedulesRouter.post('', verifyTokenIsValidMiddleware,verifyDataIsValidMiddleware(createScheduleSchema) , createScheduleController)
schedulesRouter.get('/realEstate/:id',verifyTokenIsValidMiddleware, verifyAdminPermissionMiddleware,listSchedulesController)


export default schedulesRouter