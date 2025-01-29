import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchUserById } from "../store/usersSlice";
import { fetchRecipes } from "../store/recipesSlice";
import { RootState } from "../store/store";

const UserDetails = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const { selectedUser, loading } = useSelector((state: RootState) => state.users);
    const { recipes } = useSelector((state: RootState) => state.recipes);

    useEffect(() => {
        if (id) {
            dispatch(fetchUserById(Number(id)));
            dispatch(fetchRecipes(1)); // Загружаем рецепты (в реальном API нужно фильтровать по userId)
        }
    }, [dispatch, id]);

    if (loading || !selectedUser) return <p>Loading...</p>;

    return (
        <div className="max-w-2xl mx-auto p-4 border rounded bg-white">
            <img src={selectedUser.image} alt={selectedUser.firstName} className="w-24 h-24 rounded-full mx-auto" />
            <h1 className="text-2xl font-bold text-center">
                {selectedUser.firstName} {selectedUser.lastName}
            </h1>
            <p className="text-center text-gray-600">{selectedUser.email}</p>
            <p className="text-center text-gray-600">{selectedUser.phone}</p>
            <p className="text-center text-gray-600">Age: {selectedUser.age}</p>
            <p className="text-center text-gray-600">Gender: {selectedUser.gender}</p>
            <p className="text-center text-gray-600">
                Address: {selectedUser.address.city}, {selectedUser.address.state} {selectedUser.address.country}
            </p>

            <h2 className="text-xl font-bold mt-6">Recipes by {selectedUser.firstName}</h2>
            <ul>
                {recipes
                    .filter((recipe) => recipe.authorId === selectedUser.id) // Фильтруем рецепты по userId
                    .map((recipe) => (
                        <li key={recipe.id}>
                            <Link to={`/recipes/${recipe.id}`} className="text-blue-500">
                                {recipe.name}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default UserDetails;
