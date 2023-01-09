import React from "react";
import { Button, Divider, Form, Input, Typography } from 'antd';
import { useAppContext } from "../../context";
import "./Login.css";

export default function Login() {

    const {
        finishLogin,
        guest,
    } = useAppContext();


    return (
        <div className="loginBg">
            <Form className="loginForm" onFinish={finishLogin}>
                <Typography.Title>Conectează-te</Typography.Title>
                <Form.Item rules={[{
                    required: true,
                    type: "email",
                    message: "Introdu un email valid",
                }]} label='Email' name={'username'}>
                    <Input placeholder="Introdu email-ul" />
                </Form.Item>
                <Form.Item rules={[{
                    required: true,
                    message: "Introdu parola",
                }]} label='Password' name={'password'}>
                    <Input.Password placeholder="Introdu parola" />
                </Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Login
                </Button>
                <Divider style={{ borderColor: "black" }}>sau</Divider>
                <Button type="primary" onClick={guest} block>
                    Continua fără conectare
                </Button>
            </Form>
        </div>)
}