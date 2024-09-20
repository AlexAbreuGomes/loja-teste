import { data } from "../data";

export const getCategories = (id: number) => {
    return data.categories.find(item => item.id === id);
}

export const getAllCategories = () => {
    return data.categories;
}