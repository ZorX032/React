import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IRecipe } from "../types/recipe";
import {getRecipeById, getRecipes} from "../api/recipes";


interface RecipesState {
    recipes: IRecipe[];
    selectedRecipe: IRecipe | null;
    loading: boolean;
    error: string | null;
}

const initialState: RecipesState = {
    recipes: [],
    selectedRecipe: null,
    loading: false,
    error: null,
};

// ✅ Правильный AsyncThunk (указывает правильный тип `Recipe[]`)
export const fetchRecipes = createAsyncThunk<IRecipe[], number>(
    "recipes/fetchRecipes",
    async (page) => {
        const limit = 10;
        const skip = (page - 1) * limit;
        const response = await getRecipes(limit, skip); // Должен возвращать `Recipe[]`
        return response; // ✅ Возвращаем массив `Recipe[]`
    }
);

export const fetchRecipeById = createAsyncThunk("users/fetchUserById",
    async (id:number) => {
        return await getRecipeById(id);
    });

const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        clearSelectedRecipe: (state) => {
            state.selectedRecipe = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.loading = false;
                state.recipes = action.payload; // ✅ Теперь `action.payload` имеет правильный тип `Recipe[]`
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Ошибка загрузки рецептов";
            });
    },
});

export const { clearSelectedRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
