
import {IUser} from "./models/IUser.ts";
import {useFetch} from "./hooks/useFetch.tsx";


function App() {
    const users = useFetch<IUser[]>('https://jsonplaceholder.typicode.com/users', []);

    return (
        <>
            {
                users.map((user)=>(
                    <div key={user.id}>
                        {user.id}: {user.name}
                    </div>
                ))
            }

        </>
    );
}

export default App
