import { Layout, theme, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import FooterPage from "../../components/FooterPage";
import FormContact from "../../components/FormContact";
import MenuPage from "../../components/MenuPage";

export default function Contact(){
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return(
        <Layout hasSider>
            <MenuPage />
            <Layout
                className="site-layout"
                style={{
                    marginLeft: 200,
                }}
            >
                <Header style={{ padding: 0, background: colorBgContainer, height: 150 }} >
                    <Typography.Title className="headerText">Bilete viruale</Typography.Title>
                    <Typography.Title level={2} className="headerText">Fiecare bilet conteaza!</Typography.Title>
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
                     <FormContact/> 
                    </div>
                </Content>
                <FooterPage />
            </Layout>
        </Layout >
    )
    
}