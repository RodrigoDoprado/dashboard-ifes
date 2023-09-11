import axios, { AxiosPromise } from "axios";
import { OfficeInterface } from "../interface/OfficeInterface";


const officeApi = axios.create({
    baseURL: process.env.REACT_APP_HOST,
  })

  export const getOfficeByName = async (): AxiosPromise<OfficeInterface[]> => {
    const res = await officeApi.get('/office');
    return res;
  }

 