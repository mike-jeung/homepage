import React, { FC } from "react";
import { StoryFn } from '@storybook/react';
interface StoryParams {
    description: string;
}
const createStory = <T extends unknown>(Component:FC<T>, args: T, params:StoryParams): StoryFn<T> => {
    const Template: StoryFn<T> = (args) => <Component {...args} />;
    const story = Template.bind({});
    story.args = args;
    story.parameters = {
        docs: {
            description: {
                story: params["description"],
            }
        }
    }
    return story;
};
export default createStory;