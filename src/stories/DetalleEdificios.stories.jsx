import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import DetalleEdificios from '../components/DetalleEdificios';
import { edificios } from '../data/edifices.js';

export default {
    title: "Pages/DetalleEdificios",
    component: DetalleEdificios,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
Componente que muestra el detalle completo de un edificio,
incluyendo imagen, precio, descripción y un botón para volver.
        `,
            },
        },
    },
    argTypes: {
        nombre: { control: "text" },
        imagen: { control: "text" },
        precio: { control: "number" },
        categoria: {
            control: "select",
            options: ['residencial', 'oficinas', 'comercial', 'industrial', 'mixto']
        },
        descripcion: { control: "text" },
    },
};

// --- Selección de un edificio del array ---
const edificioSeleccionado = edificios.find((e) => e.nombre === "Residencial Alba");

const defaultInfo = {
    nombre: edificioSeleccionado.nombre,
    imagen: edificioSeleccionado.imagen,
    precio: edificioSeleccionado.precio,
    categoria: edificioSeleccionado.categoria,
    descripcion: edificioSeleccionado.descripcion,
};

// Plantilla base
// DetalleEdificios espera un prop 'edificioData' con los datos.
// Transformamos los 'args' planos de Storybook en ese objeto.
const Template = (args) => (
    <MemoryRouter>
        <div style={{ width: '100%', maxWidth: '900px' }}>
            <DetalleEdificios edificioData={{ ...args }} />
        </div>
    </MemoryRouter>
);

/* ----------------------
 * Story principal
 * ----------------------*/
export const EdificioCard = Template.bind({});
EdificioCard.storyName = "Residencial Alba";
EdificioCard.args = { ...defaultInfo };
EdificioCard.parameters = {
    docs: {
        description: {
            story: "Vista de detalle para 'Residencial Alba', obtenida del array de datos.",
        },
    },
};

/* ----------------------
 * Playground
 * ----------------------*/
export const Playground = Template.bind({});
Playground.args = { ...defaultInfo };
Playground.parameters = {
    docs: {
        description: {
            story: "Modifica los valores (precio, nombre, etc.) desde los controles para probar la vista.",
        },
    },
};