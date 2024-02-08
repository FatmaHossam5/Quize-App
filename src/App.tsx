import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import MasterLayout from './Shared/MasterLayout/MasterLayout'
import NotFound from './Shared/NotFound/NotFound'
import Home from './Components/Home/Home'
import Groups from './Components/Groups/Groups'
import Students from './Components/Students/Students'
import Quizzes from './Components/Quizzes/Quizzes'
import Results from './Components/Results/Results'
import AuthLayout from './Shared/AuthLayout/AuthLayout'
import Login from './Components/Login/Login'
import Rigester from './Components/Register/Register'
import RequsetResetPass from './Components/RequsetResetPass/RequsetResetPass'
import RestPassword from './Components/RestPassword/RestPassword'
import ChangePassword from './Components/ChangePassword/ChangePassword'
import VerfiyUser from './Components/VerfiyUser/VerfiyUser'
function App() {

  const routes = createBrowserRouter([
    {
      path : "dashboard",
      element : <MasterLayout/>,
      errorElement : <NotFound/>,
      children : [
        { index: true, element: <Home/> },
        { path : "groups", element: <Groups/> },
        { path : "student", element: <Students/> },
        { path : "quizzes", element: <Quizzes/> },
        { path : "results", element: <Results/> },
      ]
    },
    {
      path : "/",
      element : <AuthLayout/>,
      errorElement : <NotFound/>,
      children : [
        { index: true, element: <Login/> },
        { path : "login", element: <Login/> },
        { path : "register", element: <Rigester/> },
        { path : "request-reset-password", element: <RequsetResetPass/> },
        { path : "reset-password", element: <RestPassword/> }, 
        { path : "change-password", element: <ChangePassword/> },
      ]
    }
  ])
  return (
    <>
      <ToastContainer
        theme='colored'
        autoClose={2000}
        position='top-left'
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
