import React, { FC } from "react";
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import SI01, { SI01Props } from "./SI01";
import { SI01v0, SI01v1, SI01v2, SI01v3, SI01v4 } from "./SI01var";
import "./SI01.scss";
import { createStory } from "../../helpers";
const meta: Meta<typeof SI01> = {
    title: "Icons/SI01",
    component: SI01,
    argTypes: {
        v: { table: { disable: true}},
        children: { table: { disable: true}}
    }
}

export const Var0 = createStory(SI01v0, {
    
},{
    description: "Chatbot"
});
export const Var1 = createStory(SI01v1, {
    
},{
    description: "Front End"
});
export const Var2 = createStory(SI01v2, {
    
},{
    description: "Back End"
});
export const Var3 = createStory(SI01v3, {
    
},{
    description: "Back End"
});
export const Var4 = createStory(SI01v4, {
    
},{
    description: "Chart"
});


export default meta;