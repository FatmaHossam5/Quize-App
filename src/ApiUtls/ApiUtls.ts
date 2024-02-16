import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

interface getDataParameter{
    path: string,
    headers:object,
    setState?: React.Dispatch<React.SetStateAction<any>>;
}
export const baseUrl='https://upskilling-egypt.com:3005/api';


export const getData = ({path,headers,setState}:getDataParameter):object|void => {
    axios
      .get(`${baseUrl}/${path}`, headers)
      .then((response) => {
        console.log(response.data);
        
        setState?setState(response.data):""
      })
      .catch((error) => {
        console.log(error);
        
        toast.error(error.response.data.message || "Invalid Data");
      });
  };