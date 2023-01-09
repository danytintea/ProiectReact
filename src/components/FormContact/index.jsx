import { Button, Form, Input, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context";
import "./formContact.css";

export default function FormContact() {

    const [form] = Form.useForm();
    const { logged, user } = useAppContext();

    const [mail, setMail] = useState(logged ? user.username : "");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");


    useEffect(() => {
        form.setFieldsValue({
            username: mail,
        })
    }, []);

    return (
        <div className="loginBg">
            <Form className="loginFormContact" form={form} onFinish={(value) => {console.log(value)}}>
                <Typography.Title>Contact</Typography.Title>
                <Form.Item rules={[{
                    required: true,
                    type: "email",
                    message: "Introdu un email valid",
                }]} label='Email' name={'username'}>
                    <Input placeholder="Introdu email-ul" value={mail} onChange={(e) => setMail(e.target.value)} />
                </Form.Item>
                <Form.Item rules={[{
                    required: true,
                    message: "Introdu subiectul",
                }]} label='Subiect' name={'subject'}>
                    <Input placeholder="Introdu subiectul" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </Form.Item>
                <Form.Item rules={[{
                    required: true,
                    message: "Descrie problema",
                }]} name={'body'}>
                    <TextArea placeholder="Descrie problema" rows={7} size="large" value={body} onChange={(e) => setBody(e.target.value)}/>
                </Form.Item>

                <Button type="primary" htmlType="submit" block>
                    Trimite mesajul
                </Button>
            </Form>
        </div>
    )
};