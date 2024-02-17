import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { fetchDataForSlice } from "./ApiUtls/ApiUtls";
import "./App.css";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import Groups from "./Components/Groups/Groups";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Questions from "./Components/Questions/Questions";
import Quizzes from "./Components/Quizzes/Quizzes";
import SpacificQuiz from "./Components/Quizzes/SpacificQuiz/SpacificQuiz";
import Rigester from "./Components/Register/Register";
import RequsetResetPass from "./Components/RequsetResetPass/RequsetResetPass";
import RestPassword from "./Components/RestPassword/RestPassword";
import Results from "./Components/Results/Results";
import Students from "./Components/Students/Students";
import ViewResult from "./Components/ViewResult/ViewResult";
import { setUpcomingQuizzes } from "./Redux/Slices/UpcomingQuizzessSlice/UpcomingQuizzessSlice";
import AuthLayout from "./Shared/AuthLayout/AuthLayout";
import MasterLayout from "./Shared/MasterLayout/MasterLayout";
import NotFound from "./Shared/NotFound/NotFound";
import ProtectedRoute from "./Shared/ProtectedRoute/ProtectedRoute";
import { setCompletedQuizzes } from "./Redux/Slices/CompletedQuizzes/CompletedQuizzes";
import { setGroup } from "./Redux/Slices/GroupSlice/GroupSlice";
import Quiz from "./Components/StudentComponents/Quiz/Quiz";
import StudentsQuestion from "./Components/StudentComponents/Student'sQuestion/StudentsQuestion";


function App() {
  
  let { userData } = useSelector((state: any) => state.userData);
  const dispatch =useDispatch();
  const fetchUpcomingQuizzes=(response:any)=>{dispatch(setUpcomingQuizzes(response))}
  const fetchCompletedQuizzes=(response:any)=>{dispatch(setCompletedQuizzes(response))}
  const fetchGroups=(response:any)=>{
   dispatch(setGroup(response))}

  useEffect(() => {
    fetchDataForSlice("quiz/incomming",fetchUpcomingQuizzes);
    fetchDataForSlice('quiz/completed',fetchCompletedQuizzes);
    fetchDataForSlice('group',fetchGroups);
  }, [dispatch]);


  const routes = createBrowserRouter([
    {
      path: "dashboard",
      element: (
        <ProtectedRoute userData={userData}>
          <MasterLayout />
        </ProtectedRoute>
      ),
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "groups", element: <Groups /> },
        { path: "student", element: <Students /> },
        { path: "quizzes", element: <Quizzes /> },
        { path: ":quizId", element: <SpacificQuiz /> },
        { path: "results", element: <Results /> },
        { path: "questions", element: <Questions /> },
        { path: "results/:viewResults", element: <ViewResult /> },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Rigester /> },
        { path: "request-reset-password", element: <RequsetResetPass /> },
        { path: "reset-password", element: <RestPassword /> },
        { path: "change-password", element: <ChangePassword /> },
        

        
      ],
    },
    {
      path: "student",
      element: <MasterLayout />,
             errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "quizzes", element: <Quiz /> },
        { path: "questions", element: <StudentsQuestion /> },

      
      ],
    },
  ]);

  return (
    <>
      <ToastContainer
        theme="colored"
        autoClose={2000}
        position="top-right"
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
