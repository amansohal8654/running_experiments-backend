import {z, object, number, string, TypeOf, boolean, array,} from "zod";


const questionAnswer = object({
    question: string({
        required_error: "question is required"
    }),
    type: z.enum(["Single", "Multi", "Optional"]),
    options: string().array().optional(),
})

const payload = {
    body: object({
        name: string({
             required_error: "name is required"
        }),
        isActive: boolean({
            required_error: "isActive is required",
            invalid_type_error: "isActive must be a boolean",
        }),
        questions: array(questionAnswer)
    })
}

const params = {
    params: object({
        experimentId: string({
            required_error: "experimentId is required"
        })
    })
}

export const readQuestionsSchema = object({
    ...params,
})

export const createExperimentSchema = object({
    ...payload,
})


export type createExperimentInput = TypeOf<typeof createExperimentSchema>;
export type readQuestionInput = TypeOf<typeof readQuestionsSchema>;
