import { Request, Response, NextFunction } from 'express'
import AppError from '../errors/appError'
import { AppDataSource } from '../data-source'
import { User } from '../entities'

import { Repository } from 'typeorm'

const verifyAdminPermissionMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    
    if(req.method === 'PATCH'){
         
        if(req.user.id !== Number(req.params.id) && !req.user.admin){
            
            throw new AppError('Insufficient permission', 403)
        }

        return next()
    }

    if(!req.user.admin){

        throw new AppError('Insufficient permission', 403)
    }
    
    return next()
   
}
export default verifyAdminPermissionMiddleware;