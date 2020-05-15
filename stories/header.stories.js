import React from 'react';
import Header from '../src/components/Header';

import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
addDecorator(withInfo); 


export default { title: 'Header', decorators: [withInfo], };

export const header = () => <Header />


