import { Request, Response } from 'express'
import { IAddress } from '../interfaces/address.interfaces'
import { IRealEstate } from '../interfaces/realEstate.interfaces'
import { createRealEstateService } from '../services/realEstate/createRealState.service'
import listRealEstateService from '../services/realEstate/listRealEstate.service'

export const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    
    const newRealEstate = await createRealEstateService(req.body)

    return res.status(201).json(newRealEstate)
}

export const listRealEstateController = async (req: Request, res:Response): Promise<Response> =>{

    const realEstates = await listRealEstateService()
 
    return res.status(200).json(realEstates)
 
}