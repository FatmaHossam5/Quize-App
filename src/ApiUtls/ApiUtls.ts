import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Cookies } from "typescript-cookie";

interface getDataParameter {
  path: string;
  headers: object;
  setState?: React.Dispatch<React.SetStateAction<any>>;
}
export const baseUrl = "https://upskilling-egypt.com:3005/api";

export const getData = ({
  path,
  headers,
  setState,
}: getDataParameter): void => {
  axios
    .get(`${baseUrl}/${path}`, headers)
    .then((response) => {
      setState ? setState(response.data) : console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      toast.error(error.response.data.message || "Invalid Data");
    });
};

export const fetchDataForSlice = (path: string, fn: any): void => {
  axios
    .get(`${baseUrl}/${path}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(String(Cookies.get("userData"))).accessToken
        }`,
      },
    })
    .then((response) => {
      console.log(response.data);
      
      fn(response.data);
      // console.log(response.data);
    
    })
    .catch((error) => {
      toast.error(error.response.data.message || "Invalid Data");
    });
};
