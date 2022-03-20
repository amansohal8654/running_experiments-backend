import {Request, Response} from "express";
import {createFormInput} from "../schema/form.schema"
import { createForm } from "../service/form.service";
import logger from "../utils/logger";

export async function createFormHandler(
    req: Request<{}, {}, createFormInput["body"]>, 
    res: Response){
    try{
        const form = await createForm(req.body);
        return res.send(form);;
    }
    catch(err: any){
        logger.error(err);
        return res.status(409).send(err.message);
    }

}