import { HydratedDocument, FilterQuery, UpdateQuery, QueryOptions } from "mongoose";
import { Task, Volunteer, taskList, volunteerTask } from "../model/volunteerModel";

// All Task //
export const findAllTask=(query:FilterQuery<Task>, option:QueryOptions={lean:true})=>{
    return taskList.find(query, {}, option).select({_id: 0, __v: 0});
}

//Show Single Task by Email
export const findTaskByEmail=(query:FilterQuery<Volunteer>,option:QueryOptions={lean:true})=>{
    return volunteerTask.find(query, {}, option).select({__v: 0, createdAt: 0, updatedAt: 0});
}

// Post a Task for Volunteer// 
export const createVolunteerTask=(input:HydratedDocument<Volunteer>)=>{
    return volunteerTask.create(input);
}

// Delete Task by ID //
export const deleteVolunteerTask=(query:FilterQuery<Volunteer>)=>{
    return volunteerTask.deleteOne(query);
}