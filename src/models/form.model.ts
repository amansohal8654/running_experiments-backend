import mongoose from "mongoose";
interface questionAnswer {
    question: string;
    answer: string;
}
export interface formInput {
    name: string;
    email: string;
    phone: number;
    questionAnswer: Array<questionAnswer>;
}

export interface FormDocument extends formInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const formSchema = new mongoose.Schema({
    email: {type: "string", required: true,},
    name: {type: "string", required: true},
    phone: {type: "string", required: true},
    questionAnswer: {type: "array","default" : [{
        question : {type: "string", required: true},
        answer : {type: "string", required: true}
    }], required: true}
    },
    {
        timestamps: true,
    }
);

const formModel = mongoose.model<FormDocument>("FormResponse", formSchema);

export default formModel;