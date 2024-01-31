import {Schema, model} from "mongoose";

interface Task{
    name: string,
    img: string,
    id: string
}

interface Volunteer{
    userDetails: object,
    taskName: string,
    userName: string,
    email: string,
    date: Date
}

// Default Task//
const taskSchema= new Schema<Task>(
    {
        name: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        id:{
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

// Post Volunteer //
const volunteerSchema= new Schema<Volunteer>(
    {
        userDetails: {
            type: Object,
            required: true
        },
        taskName: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
            
        }
    },
    {timestamps: true}
)


export const taskList= model<Task>("Task", taskSchema);
export const volunteerTask= model<Volunteer>("Volunteer", volunteerSchema);
