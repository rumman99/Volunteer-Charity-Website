import express, {Request, Response, ErrorRequestHandler} from "express";
import { volunteerTask, taskList } from "../model/volunteerModel";
import { createVolunteerTask, findAllTask } from "../services/volunteerServices";
import log from "../logger/logger";


// Show All Task //
export const home = async(req:Request, res:Response)=>{
    try{
        const allTask= await findAllTask({});
        res.status(200).send(allTask);
    }
    catch(err){
        log.error(err);
    }
    // try{
    //     const allTask= await taskList.find({}).select({_id: 0, __v: 0})
    //     res.status(200).send(allTask)
    // }
    // catch(err){
    //     res.status(500).json({error: "Something Wrong"})
    // }
}

// Post Volunteer Task with user details//
export const volunteerPost = async(req:Request, res:Response)=>{
    // const newTask= new volunteerTask(req.body)
    // try{
    //     newTask.save();
    //     res.status(200).json({message: "Successfully Store Data"})
    // }
    // catch(err){
    //     res.status(500).json({error: "Something Wrong"})
    // }
    try{
        await createVolunteerTask(req.body);
        log.info('Create Volunteer Task Successfully');
    }
    catch(err){
        log.error(err);
    }
}
