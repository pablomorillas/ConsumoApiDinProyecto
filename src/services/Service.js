import axios from 'axios';
const API_URL = 'http://localhost:5000/productos';

export const createProduct = async (data) => {
  try {
    const res = await axios.post(API_URL, data);
    // Devolvemos los datos creados (puede estar en res.data.data o res.data)
    return res.data.data ?? res.data;
  } catch (error) {
    console.error("Error al crear el producto:", error);
    // Lanzamos un error con mensaje genérico o del servidor
    throw new Error(error.response?.data?.message || "No se pudo crear el producto.");
  }
};

export const getProducts = async () => {
  try {
    const res = await axios.get(API_URL);
    // La API devuelve { message: '...', data: [...] }
    return res.data.data ?? [];
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw new Error(error.response?.data?.message || "No se pudo cargar la lista de productos.");
  }
};


export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);

    // La API devuelve { message: '...', data: [...] }
    if (res.data.data && res.data.data.length > 0) {
      return res.data.data[0];
    }

    return null; // Si no existe el producto
  } catch (error) {
    console.error(`Error al obtener el producto con id ${id}:`, error);
    throw new Error(error.response?.data?.message || "No se pudo obtener el producto.");
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);

    // La API devuelve { message: '...', data: [...] }
    return res.data.data ?? res.data;
  } catch (error) {
    console.error(`Error al eliminar el producto con id ${id}:`, error);
    throw new Error(error.response?.data?.message || "No se pudo eliminar el producto.");
  }
};