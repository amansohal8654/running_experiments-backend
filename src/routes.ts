import {Express, Response, Request} from 'express';
import { createFormHandler } from './controller/form.controller';
import validateResources from './middleware/validateResources';
import { createFormSchema } from './schema/form.schema';
import {getExperimentHandler, createExperimentHandler, getQuestionsHandler, disableExperimentHandler} from './controller/experiment.controller';
import { createExperimentSchema, readQuestionsSchema} from './schema/experiment.schema';

const routes = (app: Express) => {
    app.get("/healthCheck", (req: Request, res: Response) => res.sendStatus(200))

    app.post("/api/formResponses", validateResources(createFormSchema), createFormHandler);

    app.get("/api/getExperiments", getExperimentHandler);

    app.get("/api/getQuestions/:experimentId", [validateResources(readQuestionsSchema)], getQuestionsHandler);

    app.post("/api/createExperiment",validateResources(createExperimentSchema) , createExperimentHandler);

    app.put("/api/disableExperiment/:experimentId", [validateResources(readQuestionsSchema)], disableExperimentHandler);
}

export default routes;