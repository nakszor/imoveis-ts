import { Router } from 'express'
import { createUserController, deleteUserController, listUsersController, updateUserController } from '../controllers/user.controllers'
import { verifyDataIsValidMiddleware, 
         verifyEmailIsValidMiddleware,
         verifyAdminPermissionMiddleware,
         verifyTokenIsValidMiddleware,
         verifyUserExistsMiddleware } from '../middlewares'
import { userSchema, userUpdateSchema } from '../schemas/user.schemas'

const userRouter = Router()

userRouter.post('', verifyDataIsValidMiddleware(userSchema), verifyEmailIsValidMiddleware, createUserController)
userRouter.get('', verifyTokenIsValidMiddleware, verifyAdminPermissionMiddleware, listUsersController)
userRouter.patch('/:id', verifyDataIsValidMiddleware(userUpdateSchema), verifyUserExistsMiddleware, verifyTokenIsValidMiddleware, verifyAdminPermissionMiddleware, updateUserController)
userRouter.delete('/:id', verifyUserExistsMiddleware, verifyTokenIsValidMiddleware, verifyAdminPermissionMiddleware, deleteUserController)

export default userRouter
