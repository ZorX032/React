import './App.css'
import PaginationComponent from "./components/pagination/PaginationComponent.tsx";
import {UsersComponent} from "./components/users/UsersComponent.tsx";



const App = () => {


    return (
        <div>
            <UsersComponent/>
            <div className="flex justify-center mt-4">
                <PaginationComponent/>
            </div>
        </div>
    );
}

export default App
