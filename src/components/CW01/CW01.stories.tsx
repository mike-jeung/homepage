import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CW01 from "./CW01";

const meta: Meta<typeof CW01> = {
    title: "Content Widget/CW01",
    component: CW01,
    parameters: {
        docs: {
            description: {
                component: 'This is a description of the CW01 component.',
            },
        },
    },
}

type Story = StoryObj<typeof CW01>;

export const Primary: Story = {
    args: {
        /* the props for the primary state of your component */
    },
    decorators: [
        /* decorators for the primary story */
    ],
    parameters: {
        docs: {
            description: {
                component: 'This is a description of the CW01 component primary state.',
            },
        },
    }
};

export default meta;