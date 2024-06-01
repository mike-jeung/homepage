import React, { FC } from "react";
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import CB01, { CB01Props } from "./CB01";
import { CB01v0, CB01v0Props, CB01v1, CB01v1Props, CB01v2, CB01v2Props } from "./CB01var";
import "./CB01.scss";
import { createStory } from "../../helpers";
const meta: Meta<typeof CB01> = {
    title: "Content Blocks/CB01",
    component: CB01,
    argTypes: {
        v: { table: { disable: true}},
        children: { table: { disable: true}}
    }
}

export const Var0 = createStory<CB01v0Props>(CB01v0, {
    title: "Title",
    caption: "CAPTION",
    description: "Lorem ipsum dolor sit",
},{
    description: "Headline title block."
});
export const Var1 = createStory<CB01v1Props>(CB01v1, {
    title: "Title",
},{
    description: "Sub heading block."
});
export const Var2 = createStory<CB01v2Props>(CB01v2, {
    title: "Title",
    caption: "Caption"
},{
    description: "Title block for small cards."
});

export default meta;