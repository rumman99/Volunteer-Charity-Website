import Tasks from "../Tasks/Tasks";
import background from "../../assets/background.jpg"
import { useEffect, useState } from "react";

interface Volunteer{
    name: string,
    img: string,
    id: string
}


const Home = () => {
    const [taskList, setTaskList]= useState<Volunteer[]>()

    //Show All Product From Database
    useEffect(()=>{
        fetch('http://localhost:3333/')
        .then(data => data.json())
        .then(result => setTaskList(result))
        .catch(err => console.log(err))
    },[]);

    return (
        <div className="text-center">
              <div style={{height: '500px', backgroundImage: `url(${background})`}} className='bg-cover bg-bottom'> 
            <input type="text" placeholder="Search..." className="mt-10 input input-bordered input-warning w-full max-w-xs" />
            <button className="btn btn-active btn-primary">Search</button>
            <h4 className="text-green-700 text-xl mt-5">Changing The Lives Of</h4>
            <h2 className="text-red-700 text-4xl">Children For Good</h2>
            <div className="md:text-center text-center mt-4">
            <p className="text-black"><span className="text-red-700 text-xl">Volunteering</span> is a way of helping others. It is giving a person 's <br/> time and ability to help someone who may be in need of help. <br/> Not only does volunteering help others, but what they may not <br/> know is that it can be helpful to themselves.</p>
            </div>
        </div>

        <div className="btn no-animation flex justify-center items-center mt-2 text-2xl font-bold hover:cursor-default">Select as a Volunteer</div>
        <div className="grid grid-cols-4">
        {taskList?.map(task=> <Tasks task={task}></Tasks>)}
        </div>
        </div>
        
    );
};

export default Home;