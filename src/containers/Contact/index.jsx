import { Layout, theme, Typography, Modal } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import FooterPage from "../../components/FooterPage";
import FormContact from "../../components/FormContact";
import MenuPage from "../../components/MenuPage";
import { useAppContext } from "../../context";

export default function Contact(){
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const {isModalOpen, cancelModal}=useAppContext();

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

                     <Modal open={isModalOpen} onCancel={cancelModal}
                            footer={[
                                
                            ]}>
                            <div className="formAddBg">
                                <img
                                    width={200}
                                    marginLeft="100"
                                    src="https://cdn-icons-png.flaticon.com/512/2343/2343605.png"
                                />
                                <Typography.Title>Mesajul a fost trimis!</Typography.Title>
                            </div>
                            <Typography.Title level={3}>Vei fi redirectionat spre pagina principala!</Typography.Title>
                        </Modal>
                    </div>
                </Content>
                <FooterPage />
            </Layout>
        </Layout >
    )
    
}