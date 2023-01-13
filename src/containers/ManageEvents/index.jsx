import { Button, Card, Layout, Space, theme, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import FooterPage from "../../components/FooterPage";
import FormAddEvents from "../../components/FormAddEvents";
import MenuPage from "../../components/MenuPage";
import { useAppContext } from "../../context";

export default function ManageEvents() {


    const { events } = useAppContext();

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
                        
                        <FormAddEvents/>
                        <Space size={[20, 40]} wrap>
                            {
                                events.map((event) =>
                                    <Card
                                        key={event.key}
                                        hoverable
                                        style={{
                                            width: 300,
                                        }}
                                        cover={<img alt="example" src={event.image} />}
                                    >
                                        <Meta key={event.key} title={event.name} description={event.description} />
                                        <label>{event.date}</label>
                                        <br></br>
                                        <label>{event.price} lei</label>
                                        <Button type="primary" onClick={() => { }} block style={{ background: "black", borderColor: "red" }}>
                                            Modifica
                                        </Button>
                                        <Button type="primary" onClick={() => { }} block style={{ marginTop: 24, background: "red", borderColor: "black" }}>
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