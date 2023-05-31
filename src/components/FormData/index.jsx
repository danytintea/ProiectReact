import { Button, Form, Input, Typography, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context";
import "./style.css";

export default function FormData() {

    const [form] = Form.useForm();
    const { logged, user, nr_tickets, sendTikets } = useAppContext();

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        form.setFieldsValue({
            name: logged ? user.name : "",
            username: logged ? user.username : "",
            phone: logged ? user.phone : "",
        })
    }, [user]);

    

    return (
        <div className="loginBg">

            <Form className="loginForm" form={form} onFinish={(value) => { sendTikets(value) }}>
                <Typography.Title>Introdu datele</Typography.Title>
                <Form.Item rules={[{
                    required: true,
                    message: "Introdu un nume",
                }]} label='Nume' name={'name'}>
                    <Input placeholder="Introdu numele" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Item>
                <Form.Item rules={[{
                    required: true,
                    type: "email",
                    message: "Introdu un email valid",
                }]} label='Email' name={'username'}>
                    <Input placeholder="Introdu email-ul" value={mail} onChange={(e) => setMail(e.target.value)} />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Numar de telofon"
                    rules={[{
                        required: true,
                        message: 'Introdu numarul de telofon'
                    }]}
                >
                    <Input placeholder="Introdu numarul de telefon" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </Form.Item>
                <Typography.Title level={3}>Vei primi {nr_tickets} puncte</Typography.Title>
                <Typography.Title level={3}>Aceste bilete nu ofera accesul pe stadion!</Typography.Title>
                <Button type="primary" htmlType="submit" block style={{ background: "red" }}>
                    Finalizeaza comanda
                </Button>

            </Form>
        </div>
    )
};