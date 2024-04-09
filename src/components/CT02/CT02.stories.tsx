import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import CT02 from "./CT02";

const meta: Meta<typeof CT02> = {
    title: "Content Tile/CT02",
    component: CT02,
    parameters: {
        docs: {
            description: {
                component: "This is an animated robot tile.",
            },
        },
    },
}

type Story = StoryObj<typeof CT02>;

export const V0: Story = {
    args: {
        size: "sm"
    }
}

export default meta;