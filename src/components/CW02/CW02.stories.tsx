import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CW02 from "./CW02";

const meta: Meta<typeof CW02> = {
    title: "Content Widget/CW02",
    component: CW02,
    parameters: {
        docs: {
            description: {
                component: 'This component is an animated navigation widget, currently in development.',
            },
        },
    },
}

type Story = StoryObj<typeof CW02>;

export const Primary: Story = {
    args: {
        /* the props for the primary state of your component */
    },
    decorators: [
        /* decorators for the primary story */
    ],
    parameters: {
        // docs: {
        //     description: {
        //         component: 'This is a description of the CW01 component primary state.',
        //     },
        // },
    }
};

export default meta;