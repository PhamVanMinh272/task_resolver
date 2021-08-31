import React from 'react'
import './index.css'
import {
    DesktopOutlined,
    FileOutlined,
    HomeOutlined
  } from '@ant-design/icons'
import { Link } from "react-router-dom"
import { Layout, Menu } from 'antd'

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false
        }
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        const { Sider } = Layout;
        const { collapsed } = this.state;
        return (
            <Sider 
                theme='light'
                className="side-bar"
                collapsible collapsed={collapsed}
                onCollapse={this.onCollapse}
                collapsedWidth='50'
                width='170'
            >
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Eisenhower Matrix
                    </Menu.Item>
                    <Menu.Item key="3" icon={<FileOutlined />}>
                        Pickle Jar Theory
                    </Menu.Item>
                    <Menu.Item key="4" icon={<FileOutlined />}>
                        <Link to="/todolist">Todo List</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
    
}

export default SideBar;
