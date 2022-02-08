import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Button from './Button';

import IButton from "./Button.type";

export default {
    component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args: IButton) =>
        <Button {...args} />;

export const Main  = Template.bind({});

Main.args = {
    label: 'Button'
};
