import { Layout, theme, Modal, Button, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import FooterPage from "../../components/FooterPage";
import FormData from "../../components/FormData";
import MenuPage from "../../components/MenuPage";
import Step from "../../components/Step";
import { useAppContext } from "../../context";

export default function PersonalData() {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const { isModalOpen, cancelModal } = useAppContext();

    return (
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
                        <FormData />

                        <Modal open={isModalOpen} onCancel={cancelModal}
                            footer={[
                                
                            ]}>
                            <div className="formAddBg">
                                <img
                                    width={200}
                                    marginLeft="100"
                                    src="https://uploads.sitepoint.com/wp-content/uploads/2015/07/1436013803checkbox-1024x1024.jpg"
                                />
                                <Typography.Title>Achizitionare reusita!</Typography.Title>
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