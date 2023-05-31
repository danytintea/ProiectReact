import { Layout, theme, Modal, Button, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import MenuPage from "../../components/MenuPage";
import Step from "../../components/Step";
import { useAppContext } from "../../context";
import Seats from "../../components/Seats";
import FooterPage from "../../components/FooterPage";

export default function Tickets() {

    const { sector, isModalOpen, cancelModal } = useAppContext();


    const {
        token: { colorBgContainer },
    } = theme.useToken();

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
                        <Seats sector={sector} />

                        <Modal open={isModalOpen} onCancel={cancelModal}
                            footer={[
                                <Button key="back" onClick={cancelModal}>
                                    OK
                                </Button>
                            ]}>
                            <div className="formAddBg">
                                <img
                                    width={200}
                                    marginLeft="100"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png"
                                />
                                <Typography.Title>Nu ai selectat niciun bilet!</Typography.Title>
                            </div>
                        </Modal>

                    </div>
                </Content>
                <FooterPage />
            </Layout>
        </Layout >
    )
}