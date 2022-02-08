import React from 'react';
import {shallow} from "enzyme";

import Button from './Button';

describe('MyComponent', () => {
    it('should render component', () => {
        const component = shallow(<Button label="Test"/>);
        expect(component).toMatchSnapshot();
    });
});