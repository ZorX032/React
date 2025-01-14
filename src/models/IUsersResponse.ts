import {IBaseResponse} from "./IBaseResponse.ts";
import {IUser} from "./IUser.ts";

export interface IUsersResponse extends IBaseResponse {
    users: IUser[];
}