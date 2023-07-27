import { Router } from 'express'
import  userRouter  from './users.routes'
import sessionRouter from './session.routes'
import categoriesRouter from './categories.routes'
import realEstateRouter from './realState.routes'
import schedulesRouter from './schedules.routes'

const router = Router()

router.use('/users', userRouter)
router.use('/login', sessionRouter)
router.use('/categories', categoriesRouter)
router.use('/realEstate', realEstateRouter)
router.use('/schedules', schedulesRouter)

export default router