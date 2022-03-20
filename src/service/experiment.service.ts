import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import ExperimentModel, { ExperimentDocument, ExperimentInfo } from "../models/experiment.model";

export async function createExperiment(input: ExperimentInfo){
    return ExperimentModel.create(input);
}

export async function getAllExperiments(){
    return ExperimentModel.find();
}

export async function getQuestionsById(
    query: FilterQuery<ExperimentDocument>,
    options: QueryOptions = {lean: true})
{
    return ExperimentModel.findOne(query, {}, options)
}

export async function disableExperiment(
    query: FilterQuery<ExperimentDocument>,
    options: QueryOptions = {lean: true})
{
    return ExperimentModel.findOneAndUpdate(query, {isActive : false}, options)
}