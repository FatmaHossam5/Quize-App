import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Slices/AuthSlice/AuthSlice";
import quizzesReducer from "./Slices/UpcomingQuizzessSlice/UpcomingQuizzessSlice";
import completedQuizzesReducer from "./Slices/CompletedQuizzes/CompletedQuizzes";
import groupReducer from "./Slices/GroupSlice/GroupSlice";

const store = configureStore({
  reducer: {
    userData: authReducer,
    upcomingQuizzes:quizzesReducer,
    CompletedQuizzes:completedQuizzesReducer,
    groups:groupReducer,
  },

});

export default store;