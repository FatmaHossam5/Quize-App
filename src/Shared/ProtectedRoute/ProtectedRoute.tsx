import { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Cookies } from "typescript-cookie";
import { UserData } from "../../Redux/Slices/AuthSlice/Interfaces";

interface Prop{
    children:ReactNode;
    userData:UserData
  }

export default function ProtectedRoute({userData,children}:Prop) {

    useEffect(() => {
        console.log(userData);
        
    }, [])
    
    if (!Cookies.get("userData") && !userData?.accessToken ) {
        return <Navigate to="/"/>
    }else{
        return children
    }
}
