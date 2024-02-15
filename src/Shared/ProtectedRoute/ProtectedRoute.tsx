import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { UserData } from "../../Redux/Slices/AuthSlice/Interfaces";

interface Prop{
    children:ReactNode;
    userData:UserData
  }

export default function ProtectedRoute({userData,children}:Prop) {
    
    if (!userData?.accessToken ) {
        return <Navigate to="/login"/>
    }else{
        return children
    }
}
