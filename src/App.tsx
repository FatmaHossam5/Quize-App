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
import Rigester from './Components/Rigester/Rigester'
import RequsetResetPass from './Components/RequsetResetPass/RequsetResetPass'
import RestPassword from './Components/RestPassword/RestPassword'
import ChangePassword from './Components/ChangePassword/ChangePassword'
import VerfiyUser from './Components/VerfiyUser/VerfiyUser'
import AddModal from './Shared/AddModal/AddModal'
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
        { path : "1", element: <AddModal/> },

      ]
    },
    {
      path : "/",
      element : <AuthLayout/>,
      errorElement : <NotFound/>,
      children : [
        { index: true, element: <Login/> },
        { path : "login", element: <Login/> },
        { path : "rigester", element: <Rigester/> },
        { path : "requsetRestPass", element: <RequsetResetPass/> },
        { path : "restPassword", element: <RestPassword/> }, 
        { path : "changePassword", element: <ChangePassword/> },
        { path : "verify", element: <VerfiyUser/> },
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
