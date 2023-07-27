import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Address } from "../entities";
import { Repository } from "typeorm";
import AppError from "../errors/appError";

const verifyAddressIsValidMiddleware = async (req: Request, res: Response,next: NextFunction): Promise<Response | void> => {
    
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);
    const addressData = req.body.address;
    
    const findAddress: Address | null = await addressRepository
    .createQueryBuilder('address')
    .where('address.city = :city', { city: addressData.city })
    .andWhere('address.state = :state', { state: addressData.state })
    .andWhere('address.number = :number', { number: addressData.number })
    .andWhere('address.street = :street', { street: addressData.street })
    .andWhere('address.zipCode = :zipCode', { zipCode: addressData.zipCode })
    .getOne();

    if (findAddress) {
        throw new AppError('Address already exists',409)
    }
    
    return next();
 
};

export default verifyAddressIsValidMiddleware;