import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserLoginContext } from '../../context/userLoginContext';

const styleForm= 'mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500';

interface TaskInterface {
    id: string;
    name: string;
    img: string;
}


const Volunteer = () => {
    type TaskParamsId={id:string};
    const {id}= useParams<TaskParamsId>();
    const {userLogin}= useContext(UserLoginContext);

    const [taskList, setTaskList]= useState()
      //Show All Product From Database
      useEffect(()=>{
        if (id){ 
        fetch('http://localhost:3333/')
        .then(data => data.json())
        .then(result => {
            const task= result?.find((foundTask:TaskInterface)=> parseInt(foundTask.id)===parseInt(id))
            setTaskList(task);
        })
        .catch(err => console.log(err))
    }
    },[id]);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data:object) => {
        const volunteerTaskForUser= {userDetails:data, taskName:taskList?.name, userName:userLogin.name, email:userLogin.email, date:new Date().toDateString("dd/MM/yyyy")}
        fetch('http://localhost:3333/volunteer', {
            method: "POST",
            body: JSON.stringify(volunteerTaskForUser),
            headers: {'Content-Type': 'application/json'}
          })
        alert('Your Order Confirmed.... We will Contact with You')
      }
    console.log(errors);

    return (
        <div className='flex justify-center'>
         <form className='mt-10' onSubmit={handleSubmit(onSubmit)}>
         <p className='text-center mb-5 text-blue-700 text-2xl font-semibold'>Register as a Volunteer</p>
            <label className='ml-2 text-red-500 font-semibold' htmlFor="">Full Name:</label><br/>
            <input className={styleForm} type="text" placeholder="Full Name" {...register("Full Name", {required: true, maxLength: 80})} /><br/>
            <label className='ml-2 text-red-500 font-semibold' htmlFor="">Email:</label><br/>
            <input readOnly defaultValue={userLogin.email} className={styleForm} type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /><br/>
            <label className='ml-2 text-red-500 font-semibold' htmlFor="">Description:</label><br/>
            <input className={styleForm} type="text" placeholder="Description" {...register("Description", {required: true, maxLength: 100})} /><br/>
            <label className='ml-2 text-red-500 font-semibold' htmlFor="">Volunteering Task:</label><br/>
            <input readOnly defaultValue={taskList?.name} className={styleForm} type="text" placeholder="Volunteering Task" {...register("Volunteering Task", {required: true, maxLength: 100})} /><br/>
            <label className='ml-2 text-red-500 font-semibold' htmlFor="">Date:</label><br/>
            <input className={styleForm} type="date" placeholder="Date" {...register("Date", {required: true})} /><br/>
            <label className='ml-2 text-red-500 font-semibold' htmlFor="">Mobile:</label><br/>
            <input className={styleForm} type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} /><br/>
            <label className='ml-2 text-red-500 font-semibold' htmlFor="">Gender:</label><br/>
            <select className='border border-gray-400 w-24 rounded-full ml-2' {...register("Title", { required: true })}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
            </select>
            <br/>
            <input className='my-5 ml-24 bg-blue-700 text-white hover:text-blue-800 border border-blue-700 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' type="submit" />
        </form>
    </div>  
    );
};

export default Volunteer;