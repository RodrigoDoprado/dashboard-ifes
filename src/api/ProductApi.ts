import axios, { AxiosPromise } from "axios";
import { Product } from "../interface/InterfaceProduct";


const ProductApi = axios.create({
    baseURL: process.env.REACT_APP_HOST+"/HZ Hamburguer",
  })

  export const getProductByName = async (): AxiosPromise<Product[]> => {
    const res = await ProductApi.get('/products');
    return res;
  }

  export const getProduct = async (id: any) => {
    const res = await ProductApi.get(`/${id}`);
    return res;
  };
  
  export const createProduct = async (data: Product): AxiosPromise<any> => {
        const response = await ProductApi.post("/",data);
        return response;
  };
  
  export const deleteProduct = async(id: any) => {
    await ProductApi.delete(`/${id}`);
  };
  
  export const updateProduct = async(data: Product): AxiosPromise<any> => {
    const response = await ProductApi.put(`/${data.id}`, data);
    return response;
  };