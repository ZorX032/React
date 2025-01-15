import {useEffect, useState} from "react";
import {getCars} from "../../services/api.service.ts";
import {ICar} from "../../models/ICar.ts";


export const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        getCars().then((cars) => {
            setCars(cars);
        })
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Cars List</h1>
            <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
                {cars.map((car) => (
                    <div key={car.id} className="bg-gray-200 p-4 rounded-lg shadow-lg">
                        <h4 className="text-lg font-semibold">ID: {car.id}</h4>
                        <h5 className="text-sm">Model: {car.brand}</h5>
                        <h5 className="text-sm">Year: {car.year}</h5>
                        <h5 className="text-sm">Price: {car.price}$</h5>
                    </div>
                ))}
            </div>
        </div>
    );

};