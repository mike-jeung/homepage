import React, { FC } from "react";
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { SETTINGS } from "../constants";
interface StoryParams {
    description: string;
}
interface TimelineCallback {
    position?:string;
    params?:any[];
    callbackType?:string;
    callback:() => void;
}
const getBreakpoint = ():string => {
    let bp = "";
    const el = document.querySelector(".app") as HTMLDivElement;
    if (el) {
        const w = el.offsetWidth;
        if ( w > SETTINGS.breakpoints.tablet ) {
            bp = "desktop";
        } else {
            bp = "mobile";
        }
    }
    return bp;
};
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
const applyTimelineCallbacks = (timeline:gsap.core.Timeline,timelineCallbacks:TimelineCallback[] = []) => {
    if (timelineCallbacks) {
        for (let i = 0; i < timelineCallbacks.length; i++) {
            const pos = timelineCallbacks[i].position,
                params = timelineCallbacks[i].params,
                cb = timelineCallbacks[i].callback,
                callbackType = timelineCallbacks[i].callbackType;

            if (callbackType) {
                // event callback
                timeline.eventCallback(callbackType as gsap.CallbackType,cb,params);
            } else if (pos) {
                timeline.call(cb,params,pos);
            } else {
                timeline.call(cb,params);
            }          
        }
    }
};

export {
    applyTimelineCallbacks,
    createStory,
    debounce,
    getBreakpoint,
    TimelineCallback
}