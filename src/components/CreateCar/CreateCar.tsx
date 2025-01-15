import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.service.ts";

import {carValidator} from "../../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";

export const CreateCar = ()=>{
    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({mode:'all', resolver:joiResolver(carValidator)});

    const createHandler = (data:ICar)=> {
        addCar(data);
    }

    return(
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit(createHandler)} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Create a Car</h2>

                <div className="mb-4">
                    <label className="block text-gray-700">Brand</label>
                    <input type='text' {...register('brand')}
                           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <div className="text-red-500 text-sm mt-1">{errors.brand?.message}</div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input type='number' {...register('price')}
                           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <div className="text-red-500 text-sm mt-1">{errors.price?.message}</div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Year</label>
                    <input type='number' {...register('year')}
                           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <div className="text-red-500 text-sm mt-1">{errors.year?.message}</div>
                </div>

                <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">Save car
                </button>
            </form>
        </div>
    )
}