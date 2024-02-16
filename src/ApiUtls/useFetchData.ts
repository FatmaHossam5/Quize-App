import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { baseUrl } from "./ApiUtls";

interface UseFetchData{
  fetchedData:object[];
  getData:(path:string)=>void
}

const useFetchData = ():UseFetchData => {
  const [fetchedData, setFetchedData] = useState([]);
  const { headers } = useSelector((state: any) => state.userData);

  const getData = (path: string) => {
    axios
      .get(`${baseUrl}/${path}`, headers)
      .then((response) => {
        setFetchedData(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message || "Invalid Data");
      });
  };
  return { fetchedData, getData };
};
export default useFetchData;
