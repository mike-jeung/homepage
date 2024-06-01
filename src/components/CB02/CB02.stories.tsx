import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import {CB02v1 as CB02v1Component} from "./CB02var";
import "./CB02.scss";




const meta: Meta<typeof CB02v1Component> = {
    title: "Content Blocks/CB02v1",
    component: CB02v1Component
}

type Story = StoryObj<typeof CB02v1Component>;

export const CB02v1: Story = {
    args: {
        title: "Head title"
    },
};

export default meta;