import React from 'react';
import MenuDashboard from '../src/components/MenuDashboard';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
addDecorator(withInfo); 


export default { title: 'Dashboard', decorators: [withInfo], };
const MenuData = [
    { 
      name:"Navigation one", 
      icon: <MailOutlined/>, 
      menuItem: [{ name:"opions 1" }, { name:"opions 2" }] 
    },
    { 
      name:"Navigation two", 
      icon: <AppstoreOutlined/>,
      menuItem: [{ name:"opions 1" }, { name:"opions 2" }]  
    },
    { 
      name:"Navigation three", 
      icon: <SettingOutlined/>,
      menuItem: [{ name:"opions 1" }, { name:"opions 2" }]  
    } 
  ]

export const Menu = () => <MenuDashboard Menu={MenuData} />


