import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import S01, { S01Props } from "./S01";

const meta: Meta<typeof S01> = {
    title: "Structural/S01",
    component: S01,
    parameters: {
        docs: {
            description: {
                component: 'This is a generic spacer component that provides vertical padding between components.',
            },
        },
    },
}

type Story = StoryObj<typeof S01>;

export const V0: Story = {
    args: {
        size: "sm"
    }
}

export default meta;