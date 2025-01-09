
import {ITodo} from "../../models/ITodo.ts";
import {FC} from "react";
import './TodoComponent.css'

type UserPropType ={
    item: ITodo;
}
const TodoComponent:FC<UserPropType> = ({item}) => {
    return (

            <div>
                <h3 className={item.completed? 'complete' : 'non-complete'}>{item.title}</h3>
            </div>

    );
};

export default TodoComponent;