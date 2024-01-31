import mongoose,{connect} from "mongoose";
import log from "../logger/logger";

export const connects=()=>{
    return connect("mongodb+srv://tasnimrumman:rumman000@cluster-rumman0.pqu8dwy.mongodb.net/volunteer?retryWrites=true&w=majority")
    .then(()=>{
        log.info("Database Connected")
    })
    .catch((err)=>{
        log.error("DB Error", err)})
}