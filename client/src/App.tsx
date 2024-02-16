import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import { Route, Routes } from 'react-router-dom'
import { UserLoginContextProvider } from './context/userLoginContext'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import About from './Components/About/About'
import VolunteerForm from './Components/Volunteer/VolunteerForm'
import UserTask from './Components/UserTask/UserTask'



function App() {

  return (

    <UserLoginContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/volunteer/:id' element={<PrivateRoute><VolunteerForm/></PrivateRoute>}/>
        <Route path='/userTask' element={<UserTask/>}/>
        <Route path='*' element={<h1 className='text-red-700 text-9xl my-60 text-center'>ERROR 404: NOT FOUND</h1>}/>
      </Routes>
      </UserLoginContextProvider>
  )
}

export default App
