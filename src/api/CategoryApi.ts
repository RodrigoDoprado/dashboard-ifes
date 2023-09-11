import axios, { AxiosPromise } from "axios";
import { CategoryInterface } from "../interface/CategoryInterface";


const categoryApi = axios.create({
    baseURL: process.env.REACT_APP_HOST,
  })

  export const getCategoryByName = async (): AxiosPromise<CategoryInterface[]> => {
    const res = await categoryApi.get('/category');
    return res;
  }

 