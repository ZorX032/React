export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    image: string;
    age: number;
    gender: string;
    address: {
        city: string;
        street: string;
        number: number;
    };
}