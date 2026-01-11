import React from 'react';
import Edifice from '../components/Edifice';
import Card from '../components/Card';
import '../assets/index.css';

export default {
    title: 'Components/Edifice',
    component: Edifice,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '300px', margin: '20px' }}>
                {/* Edifice is typically inside a Card container */}
                <Card>
                    <Story />
                </Card>
            </div>
        ),
    ],
};

const Template = (args) => <Edifice {...args} />;

// Story 1: Default usage
export const Default = Template.bind({});
Default.args = {
    nombre: 'Residencial Ejemplo',
    foto: 'https://via.placeholder.com/400x300',
    precio: 250000,
    descripcion: 'Un apartamento acogedor con excelentes vistas.',
    categoria: 'residencial',
};

// Story 2: Expensive Office
export const LuxuryOffice = Template.bind({});
LuxuryOffice.args = {
    nombre: 'Torre Corporativa',
    foto: 'https://via.placeholder.com/400x300',
    precio: 5000000,
    descripcion: 'Oficinas de alto standing en el centro financiero.',
    categoria: 'oficinas',
};

// Story 3: Industrial
export const Warehouse = Template.bind({});
Warehouse.args = {
    nombre: 'Almacén Logístico',
    foto: 'https://via.placeholder.com/400x300',
    precio: 850000,
    descripcion: 'Gran capacidad de almacenamiento y muelles de carga.',
    categoria: 'industrial',
};
