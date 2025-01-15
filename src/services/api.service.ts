import axios from 'axios';
import {ICar} from "../models/ICar.ts";

const axiosInstance =  axios.create({
    baseURL:'http://185.69.152.209/carsAPI/v1',
    headers:{}
});

export const getCars = async ():Promise<ICar[]> =>{
   const axiosResponse =  await axiosInstance.get<ICar[]>("/cars");
   const cars = axiosResponse.data;

   return cars;
}

export const addCar = async (car: ICar)=> {
    await axiosInstance.post("cars", car);
}