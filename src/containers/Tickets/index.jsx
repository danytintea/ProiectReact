import { Layout, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import MenuPage from "../../components/MenuPage";
import Step from "../../components/Step";
import { useAppContext } from "../../context";
import Seats from "../../components/Seats";
import FooterPage from "../../components/FooterPage";

export default function Tickets(){

    const {sector}=useAppContext();
   

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return  (
    <Layout hasSider>
    <MenuPage />
    <Layout
        className="site-layout"
        style={{
            marginLeft: 200,
        }}
    >
        <Header style={{ padding: 0, background: colorBgContainer, height: 50 }} >
            <Step />
        </Header>
        <Content
            style={{
                margin: '24px 16px 0',
                overflow: 'initial',
            }}
        >
            <div
                style={{
                    padding: 24,
                    textAlign: 'center',
                    background: colorBgContainer,
                }}
            >
                <Seats sector={sector}/>

            </div>
        </Content>
        <FooterPage />
    </Layout>
</Layout >
    )
}