import {CompanyAddress} from "./CompanyAddress.ts";

export interface Company {
    department: string;
    name: string;
    title: string;
    address: CompanyAddress;
}