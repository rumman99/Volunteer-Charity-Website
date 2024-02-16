import { useContext, useEffect, useState } from "react";
import { UserLoginContext } from "../../context/userLoginContext";
import "./style.css"
import { getAuth } from "firebase/auth";

interface userTaskInterface{
    userDetails: object;
    taskName: string;
    userName:string;
    email:string;
    date: string;
}

const UserTask = () => {
    const {email}= getAuth().currentUser;
    const [userTask, setUserTask]= useState<userTaskInterface[]>()
    useEffect(()=>{
        const fetching=(async()=>{
            const getData= await fetch(`https://volunteer-charity.up.railway.app/userTask?email=${email}`);
            const result= await getData.json();
            console.log(result);
            setUserTask(result);
        })()
    },[])
    return (
        <div>
            {userTask?.map(userTaskDetails => {
                const todayDate= new Date();
                const taskDate = new Date(userTaskDetails.date);
                const formattedDate = taskDate.toLocaleDateString();
                const differenceInMs = taskDate.getTime()-todayDate.getTime();
                // Convert the difference to days
                const daysLeft = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
                let message:string;
                if(differenceInMs>0){
                    message=`${daysLeft} Days Left`
                }
                else{
                    message="Volunteering Time is Over"
                }

                return (
                    <>
                    <div className="shadow-md items-center flex justify-center p-4 rounded-ss-xl" key={userTaskDetails.taskName}>
                        {/* <h1>{userTaskDetails.taskName}</h1>
                        <h1>{formattedDate}</h1>
                        <h1>{message}</h1> */}
                        <div className="">
                            <h2 className="font-bold text-xl text-center">{userTaskDetails.taskName}</h2>
                            <h1  className="text-center">{formattedDate}</h1>
                            <h1  className="text-center">{message}</h1>
                            <div className="text-center pt-2"><button className="btn btn-outline btn-error ">Remove</button></div>
                        </div>
                    </div>
                    </>
                );
            })}
        </div>
    );
};

export default UserTask;