
import {IUser} from "../../models/IUser.ts";

type UserComponentProps ={
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {
    return (

        <div className='flex flex-wrap space-x-4'>
            <div className='flex flex-col items-center bg-gray-100 p-4 rounded shadow size-60'>
                <img src={user.image} alt={user.firstName} className='w-16 h-16 rounded-full mb-2'/>
                <span className="text-sm font-bold font-medium text-gray-800">ID: {user.id}</span>
                <span className="text-sm font-bold text-gray-600">Name: {user.firstName}</span>
                <span className="text-sm font-bold text-gray-600">LastName: {user.lastName}</span>
                <span className="text-sm font-bold text-gray-600">Gender: {user.gender}</span>
                <span className="text-sm font-bold text-gray-600">Birthday: {user.birthDate}</span>
            </div>

        </div>
    );
};

export default UserComponent;