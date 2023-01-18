import { Button, Card, Layout, Modal, Space, theme, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import { Content, Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import FooterPage from "../../components/FooterPage";
import FormAddEvents from "../../components/FormAddEvents";
import MenuPage from "../../components/MenuPage";
import { useAppContext } from "../../context";

export default function ManageEvents() {


    const { 
        events, 
        deleteEventFunction, 
        finishCreateEvent, 
        isModalOpen, 
        openModal,
        cancelModal,
        updateEventFunction,
     } = useAppContext();


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
                    <Typography.Title className="headerText">Gestioneaza evenimente</Typography.Title>
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

                        <FormAddEvents
                            nameButton="Adauga evenimentul"
                            title="Adauga un nou eveniment"
                            finish={finishCreateEvent}
                        />

                        <Space size={[20, 40]} wrap>
                            {
                                events.map((event) =>
                                    <Card
                                        key={event.id}
                                        hoverable
                                        style={{
                                            width: 300,
                                        }}
                                        cover={<img alt="example" src={event.image} />}
                                    >
                                        <Meta key={event.id} title={event.name} description={event.description} />
                                        <label>{event.date}</label>
                                        <br></br>
                                        <label>{event.price} lei</label>
                                        <Button type="primary" onClick={openModal} block style={{ background: "black", borderColor: "red" }}>
                                            Modifica
                                        </Button>
                                        <Modal open={isModalOpen} onCancel={cancelModal}
                                            footer={[
                                                <Button key="back" onClick={cancelModal}>
                                                    Renunta
                                                </Button>
                                            ]}>
                                            <FormAddEvents
                                                nameButton="Modifica evenimentul"
                                                title="Modifica evenimentul"
                                                event={event}
                                                finish={updateEventFunction}
                                            />
                                        </Modal>
                                        <Button type="primary" onClick={() => deleteEventFunction(event.id)} block style={{ marginTop: 24, background: "red", borderColor: "black" }}>
                                            Sterge
                                        </Button>
                                    </Card>
                                )
                            }
                        </Space>
                    </div>
                </Content>
                <FooterPage />
            </Layout>
        </Layout >
    )

}