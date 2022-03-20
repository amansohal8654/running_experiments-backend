import FormModel, { formInput } from "../models/form.model"

export async function createForm(input: formInput){
    try{
        const form = await FormModel.create(input);
        console.log(form);
        return form;
    } catch(err: any){
        throw new Error(err);
    }
}

