import { Layout, theme, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import FooterPage from "../../components/FooterPage";
import MenuPage from "../../components/MenuPage";

export default function Info() {
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
                    <Typography.Title className="headerText">Info</Typography.Title>
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
                        <div className="loginBg">

                            <div className="loginForm" >
                                <Typography.Title level={1}>Ce este DDB?</Typography.Title>
                                <Typography.Title level={5} className="headerText">
                                Programul Doar Dinamo Bucuresti este programul de sustinere a echipei de fotbal Dinamo Bucuresti prin intermediul suporterilor.
                                Acestia detin cu ajutorul programului 12,06% din actiunile clubului, iar in ultimii 4 ani a reprezentat singura sursa externa de finantare a echipei Dinamo.
                                <br/>Programul DDB a contribuit cu suma  15.831.351,00 lei la capitalul clubului.
                                <br/>Darita mebrilor cotizanti Dinamo inca traieste!
                                </Typography.Title>
                                <Typography.Title level={1}>Cum este organizat DDB?</Typography.Title>
                                <Typography.Title level={5} className="headerText">
                                Programul Doar Dinamo Bucuresti are un presedinte ales prin vot, cu un program pe 4 ani, iar membrii programului sunt repartizati in grupuri regionale.
                                <br/>Grupurile DDB sunt formate din comunitatile locale de dinamovisti ce sunt sau au fost mebrii DDB. Acestia au intalniri periodice, actiuni comune iar in timp au creat adevarate comunitati.
                                <br/>Sub numele grupurilor membrii sunt uniti si participa la actiuni ale programului, precum Cupa DDB, Campania OM la Om sau cumpararea de BILETE VIRTUALE
                                </Typography.Title>
                                <Typography.Title level={1}>Ce sunt biletele virtuale?</Typography.Title>
                                <Typography.Title level={5} className="headerText">
                                Biletele virtuale reprezinta o modalitate de strangere a fondurilor in cadrul Programului DDB. Ideea biletelor este de a sustine echipa chiar si de la distanta.
                                 Suporterii ce nu pot fi prezenti fizic pe stadion pot achizitiona bilete virtuale, in acest mod acestia se transpun in tribune pentru a fi mai aproape de fenomenul Dinamo.  
                                 <br/>Biletele virtuale au luat viata in timpul pandemiei, cand accesul la meciurile de fotbal era interzis si continua pana in prezent fiind una din principalele moduri de colectare ale programului dupa cotizatia de mebru.
                                <br/>Prin aceasta metoda programul a colectat aproximativ 4 milioane de lei!
                                </Typography.Title>
                            </div>
                        </div>
                    </div>
                </Content>
                <FooterPage />
            </Layout>
        </Layout >
    )

}