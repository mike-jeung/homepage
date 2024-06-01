import React, { FC } from "react";
import { Meta, StoryFn, StoryObj } from '@storybook/react';

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
const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout | null;
    return function executedFunction(...args: any[]) {
        const later = () => {
            clearTimeout(timeout!);
            func(...args);
        };
        clearTimeout(timeout!);
        timeout = setTimeout(later, wait);
    };
};

export {
    createStory,
    debounce
}