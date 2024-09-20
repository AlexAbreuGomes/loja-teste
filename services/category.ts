import { data } from "../data";

export const getCategoriesById = (id: number) => {
    return data.categories.find(item => item.id === id);
}

export const getAllCategories = () => {
    return data.categories;
}