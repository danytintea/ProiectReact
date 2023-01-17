import { Card, Col, Layout, Row, theme, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import FooterPage from "../../components/FooterPage";
import MenuPage from "../../components/MenuPage";
import Step from "../../components/Step";
import TableGroups from "../../components/TableGroups";
import { useAppContext } from "../../context";
import "./style.css"

export default function Groups() {

    const { event } = useAppContext();
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

                        <Row>
                            <Col span={12}>
                                <div className="content">
                                    <Card
                                        key={event.id}
                                        bordered
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
                                    </Card>
                                </div>
                            </Col>
                            <Col span={12}>
                                <Typography.Title level={2} className="headerText">Alege grupul / sectorul:</Typography.Title>
                                <TableGroups />
                            </Col>
                        </Row>

                    </div>
                </Content>
                <FooterPage />
            </Layout>
        </Layout >
    )
}