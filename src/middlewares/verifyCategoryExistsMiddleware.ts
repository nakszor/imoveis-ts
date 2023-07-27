import { Request, Response, NextFunction} from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Category } from '../entities'
import  AppError  from '../errors/appError'

const verifyCategoryExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const categoryAlreadyExists = await categoryRepository.findOne({
        where: {
            name: req.body.name
        }
    })

    if(categoryAlreadyExists){

        throw new AppError('Category already exists', 409)
    }

    return next()

}

export default verifyCategoryExistsMiddleware