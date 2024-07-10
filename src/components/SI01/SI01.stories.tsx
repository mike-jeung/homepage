import React, { FC } from "react";
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import SI01, { SI01Props } from "./SI01";
import SI01v0 from "./SI01v0";
import SI01v1 from "./SI01v1";
import SI01v2 from "./SI01v2";
import SI01v3 from "./SI01v3";
import SI01v4 from "./SI01v4";
import SI01v5 from "./SI01v5";

import "./style/SI01.scss";
import "./style/SI01v0.scss";
import "./style/SI01v1.scss";
import "./style/SI01v2.scss";
import "./style/SI01v3.scss";
import "./style/SI01v4.scss";
import "./style/SI01v5.scss";

import { createStory } from "../../helpers";
const meta: Meta<typeof SI01> = {
    title: "Icons/SI01",
    component: SI01,
    argTypes: {
        v: { table: { disable: true}},
        timelineArgs:{},
        timelineCallbacks:{},
    }
}

// export const Var0 = createStory(SI01v0, {
    
// },{
//     description: "Chatbot"
// });
// export const Var1 = createStory(SI01v1, {
    
// },{
//     description: "Front End"
// });
// export const Var2 = createStory(SI01v2, {
    
// },{
//     description: "Back End"
// });
// export const Var3 = createStory(SI01v3, {
    
// },{
//     description: "Back End"
// });
// export const Var4 = createStory(SI01v4, {
    
// },{
//     description: "Chart"
// });


export default meta;