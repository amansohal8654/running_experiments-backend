import {Request, Response} from "express";
import { createExperimentInput, readQuestionInput } from "../schema/experiment.schema";
import { createExperiment, getAllExperiments, getQuestionsById, disableExperiment} from "../service/experiment.service";
import mongoose from "mongoose";

export async function createExperimentHandler(req: Request<{}, {}, createExperimentInput["body"]>, res: Response){
    const body = req.body;
    const product = await createExperiment({...body});

    return res.send(product);
}

export async function getExperimentHandler(req: Request, res: Response){
    const experiments = await getAllExperiments();

    if(!experiments) return res.sendStatus(404);

    return res.send(experiments);
}

export async function getQuestionsHandler(req: Request<readQuestionInput["params"]>, res: Response){
    const experimentId = req.params.experimentId;
    var cond = mongoose.Types.ObjectId.isValid(experimentId)
    if (cond) {
        const experiment = await getQuestionsById({experimentId});
        if(!experiment) return res.sendStatus(404);
        return res.send(experiment.questions);
        // do the required operation
    } else {
        return res.send('not a valid id');
    }  
}

export async function disableExperimentHandler(req: Request<readQuestionInput["params"]>, res: Response){
    const experimentId = req.params.experimentId;
    var cond = mongoose.Types.ObjectId.isValid(experimentId)
    if (cond) {
        const experiment = await disableExperiment({experimentId});
        if(!experiment) return res.sendStatus(404);
        return res.send(experiment);
        // do the required operation
    } else {
        return res.send('not a valid id');
    }

  
}