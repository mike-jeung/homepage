import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import Home from "./Home";
import "./Home.scss";
const meta: Meta<typeof Home> = {
    title: "Pages/Home",
    component: Home,
    parameters: {
        docs: {
            description: {
                component: "This is the home page template."
            }
        }
    }
}
export default meta;

type Story = StoryObj<typeof Home>;

export const dark: Story = {
    args: {
        
    }
}
