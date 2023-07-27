import { Router } from 'express'
import { createSessionController } from '../controllers/session.controller'
import { verifyDataIsValidMiddleware } from '../middlewares'
import { createLoginSchema } from '../schemas/session.schemas'

const sessionRouter = Router()

sessionRouter.post('', verifyDataIsValidMiddleware(createLoginSchema), createSessionController)

export default sessionRouter