import React from "react";
import {
    TeamOutlined,
    InfoCircleOutlined,
    LaptopOutlined,
    SnippetsOutlined,
    SettingOutlined
} from '@ant-design/icons';
import img from '../images/doar-dinamo-bucuresti.jpg';
import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { useAppContext } from "../../context";


export default function MenuPage() {

    const { user, manuOptions, logged } = useAppContext();

    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}
        > 
            <img src={img} alt='' style={{
                height: 80,
                width: 165,
                margin: 16,
            }} />
            <div className='nameUser'
                style={{
                    height: 32,
                    margin: 16,
                }}
            >
                {
                    logged ?
                        <h1 className='nameText'>{user.name}</h1>
                        :
                        <h1 className='nameText'>Nu esti conectat</h1>
                }</div>
            <Menu
                theme="dark"
                mode="inline"
                onClick={(info) => { manuOptions(info.key) }}
                items={[
                    {
                        key: '1',
                        icon: <TeamOutlined />,
                        label: logged ? 'Schimba cont' : 'Conecteza-te',
                    },
                    {
                        key: '2',
                        icon: <SnippetsOutlined />,
                        label: 'Schimba eveniment',
                    },
                    {
                        key: '3',
                        icon: <InfoCircleOutlined />,
                        label: 'Informații',
                    },
                    {
                        key: '4',
                        icon: <LaptopOutlined />,
                        label: 'Contact',
                    },

                    logged ? {
                        key: '5',
                        icon: <SettingOutlined />,
                        label: 'Gestionare evenimente',
                    } : null,
                ]} />
        </Sider>
    )
};