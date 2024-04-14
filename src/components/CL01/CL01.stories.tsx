import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import CL01 from "./CL01";

const meta: Meta<typeof CL01> = {
    title: "Content Layout/CL01",
    component: CL01
}

type Story = StoryObj<typeof CL01>;

export const V0: Story = {
    args: {
        test:""
    }
}

export default meta;