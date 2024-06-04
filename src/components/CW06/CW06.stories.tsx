import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import CW06 from "./CW06";

const meta: Meta<typeof CW06> = {
    title: "Content Widget/CW06",
    component: CW06,
    parameters: {
        docs: {
            description: {
                component: "This is a featured content widget.",
            },
        },
    },
}

type Story = StoryObj<typeof CW06>;

export const V0: Story = {
    args: {
        
    }
}

export default meta;