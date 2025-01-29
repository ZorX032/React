import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "../store/recipesSlice";
import { RootState } from "../store/store";

const RecipeDetails = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const { selectedRecipe, loading } = useSelector((state: RootState) => state.recipes);

    useEffect(() => {
        if (id) {
            dispatch(fetchRecipeById(Number(id)));
        }
    }, [dispatch, id]);

    if (loading || !selectedRecipe) return <p>Loading...</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold">{selectedRecipe.name}</h1>
            <p>{selectedRecipe.description}</p>
            <p className="font-bold">Ingredients:</p>
            <ul>
                {selectedRecipe.ingredients.map((ing, index) => (
                    <li key={index}>{ing}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeDetails;
