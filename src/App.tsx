import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/:id" element={<UserDetails />} />
                    <Route path="/recipes" element={<Recipes />} />
                    <Route path="/recipes/:id" element={<RecipeDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
