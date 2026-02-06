import { useState } from "react";
import { createProduct } from "../services/Service";

export const useCreateProduct = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addProduct = async (data) => {
        try {
            setLoading(true);
            setError(null);
            await createProduct(data);
            return true;
        } catch {
            setError("Error al guardar el producto");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { addProduct, loading, error };
};