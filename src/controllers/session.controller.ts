import { Request, Response } from 'express'
import { ILogin } from '../interfaces/session.interfaces'
import createSessionService from '../services/session/createSession.service'

export const createSessionController = async (req: Request, res:Response) =>{
   
    const loginData: ILogin = req.body

    const token = await createSessionService(loginData)

    return res.json({
        token: token
    })
}