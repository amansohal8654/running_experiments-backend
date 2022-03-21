# Build a REST API with Node.js, Mongoose & TypeScript
Entry point of this app is app.ts file, and main method is routes requiring express server as a argument.This method is responsible for envoking every endpoint

# Quick Start
* yarn dev

# All routes listed out in routes.ts file
```
app.get("/healthCheck", (req: Request, res: Response) => res.sendStatus(200))
```
* this route is just for checking health of the server
```
app.post("/api/formResponses", validateResources(createFormSchema), createFormHandler);
```
* this route is for submitting form response. required data object as a input
```
 app.get("/api/getExperiments", getExperimentHandler);
```
* This route is for getting experiments
```
 app.get("/api/getQuestions/:experimentId", [validateResources(readQuestionsSchema)], getQuestionsHandler);
```
* This route is for getting questions of experiment, so it's required experimentId as params
```
app.post("/api/createExperiment",validateResources(createExperimentSchema) , createExperimentHandler);
```
* This route is for creating new experiment, So it's take experiment data as a object:-
* Data Structure
```
body: {
        name: string;
        isActive: boolean;
        questions: {
            options?: string[] | undefined;
            type: "Single" | "Multi" | "Optional";
            question: string;
        }[];
    };
 ```
```
{
    "name": "another Experiment",
    "isActive": true,
    "questions" : [
                { 
                    "question": "What is User Stories?", 
                    "type": "Single"
                },
                {
                    "question": "What is an Agile iteration?",
                    "type": "Single" 
                }, 
                
             ]
}
```

```
# app.put("/api/disableExperiment/:experimentId", [validateResources(readQuestionsSchema)], disableExperimentHandler);
```

This route is for disable any experiment, so it's need a experiment id as a parameter.

## What you will need to run it locally
* A running instance of MongoDB
* Postman
* An IDE or text editor (VS Code)
* A web browser
* A package manager such as NPM or Yarn
* Node.js installed
## Technologies
* Node.js
* MongoDB with Mongoose
* TypeScript
* Express.js & Express.js middleware
* Zod validation

