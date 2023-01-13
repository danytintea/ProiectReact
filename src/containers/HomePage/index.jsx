import { Button, Card, Layout, Space, theme, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import { Content, Header } from 'antd/es/layout/layout';
import React from 'react';
import FooterPage from '../../components/FooterPage';
import MenuPage from '../../components/MenuPage';
import { useAppContext } from '../../context';
import "./style.css"

export default function HomePage() {

    const { events, selectEvent } = useAppContext();
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
                        <Typography.Title level={3} className="headerText">Evenimente disponibile:</Typography.Title>
                        <>
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
                                            <Button type="primary" onClick={() => { selectEvent(event) }} block style={{ background: "red"}}>
                                                Cumpara
                                            </Button>
                                        </Card>
                                    )
                                }
                            </Space>

                        </>
                    </div>
                </Content>
                <FooterPage />
            </Layout>
        </Layout >
    )
}