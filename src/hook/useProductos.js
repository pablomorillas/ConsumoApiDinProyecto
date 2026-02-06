import { useRef, useEffect, useState } from "react";
import { getProducts } from "../services/Service";

export const useProductos = () => {
  const fetched = useRef(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        setData(res);
      } catch {
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { data, loading, error };
};