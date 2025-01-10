import {Address} from "./IAddress.ts"
import {Company} from "./ICompany.ts";

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}


