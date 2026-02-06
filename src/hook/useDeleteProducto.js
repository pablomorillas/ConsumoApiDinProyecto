import { useState } from "react";
import { deleteProduct } from "../services/Service";

export const useDeleteProduct = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const removeProduct = async (id) => {
        try {
            setLoading(true);
            setError(null);
            await deleteProduct(id);
            return true;
        } catch {
            setError("Error al eliminar el producto");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { removeProduct, loading, error };
};