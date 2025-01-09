import {useEffect, useState} from 'react';
import TodoComponent from "../todo-component/TodoComponent.tsx";
import {getTodos} from "../../services/api.service.ts";

import {ITodo} from "../../models/ITodo.ts";

const TodosComponent = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        getTodos()
            .then(response => {
                setTodos(response);

            });
        return () => {
            console.log('done');
        }
    }, []);
    return (
        <div>
            {
                todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)
            }
        </div>
    );
};

export default TodosComponent;