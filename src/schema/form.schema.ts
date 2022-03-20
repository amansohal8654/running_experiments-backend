import {object, string, TypeOf, number, array} from "zod";

const questionAnswer = object({
    question: string({
        required_error: "question is required"
    }),
    answer: string({
        required_error: "answer is required"
    })
})

export const createFormSchema = object({
    body: object({
        name: string({
            required_error: "user name is required please fill out the field name"
        }),
        email: string({
            required_error: "email is required please fill out the field email"
        }).email("your email is not valid"),
        phone: number({
            required_error: "number is required"
        }),
        questionAnswer: array(questionAnswer)
    })
})

export type createFormInput = TypeOf<typeof createFormSchema>