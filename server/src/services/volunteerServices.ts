import { HydratedDocument, FilterQuery, UpdateQuery, QueryOptions } from "mongoose";
import { Task, Volunteer, taskList, volunteerTask } from "../model/volunteerModel";

export const findAllTask=(query:FilterQuery<Task>, option:QueryOptions={lean:true})=>{
    return taskList.find(query, {}, option).select({_id: 0, __v: 0});
}

export const createVolunteerTask=(input:HydratedDocument<Volunteer>)=>{
    return volunteerTask.create(input);
}