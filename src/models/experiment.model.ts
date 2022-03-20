import mongoose from "mongoose";
import { customAlphabet} from "nanoid";
import { FormDocument } from "./form.model";

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);


enum questionType {
    Single,
    Multi,
    Optional,
}

interface questions{
    question: string, 
    options?: Array<string>
}
export interface ExperimentInfo {
    name: string,
    isActive: boolean,
    questions: Array<questions>
}



export interface ExperimentDocument extends ExperimentInfo, mongoose.Document {
    createdAt: Date,
    updatedAt: Date,
}

const experimentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        isActive: { type: Boolean, required: true},
        questions : { type: Array, default : [{
            questionId: { 
                type: String,
                required: true,
                unique: true,
                default: () => `experiment_${nanoid()}`
            },
            question: {type: "string", required: true},
            type: {type: questionType, required: true},
            options: { type: Array}
        }]}
    },
    {
        timestamps: true,
    }
)

const ExperimentModel = mongoose.model<ExperimentDocument>('Experiment', experimentSchema);

export default ExperimentModel;