import React from 'react';
import BuildingForm from '../components/ControlledForm';
import '../assets/index.css';

export default {
    title: 'Components/BuildingForm',
    component: BuildingForm,
    tags: ['autodocs'],
};

const Template = (args) => <BuildingForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
