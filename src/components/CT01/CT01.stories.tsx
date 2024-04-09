import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import CT01, { CT01Props } from "./CT01";

const meta: Meta<typeof CT01> = {
    title: "Content Tile/CT01",
    component: CT01
}

type Story = StoryObj<typeof CT01>;

export const V0: Story = {
    args: {
        row: "row0",
        col: "col0",
        styles:{},
        duration:2,
        pulseDuration:1,
        rotation: {
            duration:2.5,
            degree:11
        }
    }
}

export default meta;