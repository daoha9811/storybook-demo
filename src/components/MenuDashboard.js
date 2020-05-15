import React, {Component} from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
const { SubMenu } = Menu;


export default class MenuDashboard extends Component {
    render() {
        const convertMenu = this.props.Menu.map((menu, index) => {
            const convertSubmenu = menu.menuItem.map((sub, i) => {
                return (
                    <Menu.Item key={i}>
                        {sub.name}
                    </Menu.Item>
                )
            })
            return (
                <SubMenu
                    key={index}
                    title={
                        <span>
                          { menu.icon }
                          <span> {menu.name}</span>
                        </span>
                    }
                >
                    {convertSubmenu}
                </SubMenu>
            )
        })
        return (
            <div>
                <Menu 
                    style={{ width: 256 }}
                    mode="inline"
                >
                    {convertMenu}
                </Menu>
            </div>
        )
    }
}

MenuDashboard.propTypes = {
    Menu: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.element,
        menuItem: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired
        }))
    }))
}