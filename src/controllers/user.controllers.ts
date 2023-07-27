import { Request, Response } from 'express'
import createUserService  from '../services/users/createUser.service'
import deleteUserService from '../services/users/deleteUser.service'
import  listUsersService  from '../services/users/listUsers.service'
import updateUserService from '../services/users/updateUser.service'

export const createUserController = async (req: Request, res:Response) =>{
   
    const {name, email, admin, password} = req.body

    const newUser = {name, email, admin, password}

    const data = await createUserService(newUser)

    return res.status(201).json(data)
}

export const listUsersController = async (req: Request, res:Response) =>{
   
    const users = await listUsersService()

    return res.status(200).json(users)
}

export const updateUserController = async (req: Request, res:Response) =>{
    
    const newUserData = req.body
    
    const userId = Number(req.params.id)
    
    const newUser = await updateUserService(newUserData,userId)
    
    return res.status(200).json(newUser)
}

export const deleteUserController = async (req: Request, res:Response) =>{
    
    const userId = Number(req.params.id)
    
    const newUser = await deleteUserService(userId)
    
    return res.status(204).json()
}