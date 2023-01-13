import { UploadOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Typography, Upload } from "antd";
import React, { useState } from "react";
import "./style.css"

export default function FormAddEvents() {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [date, setDate] = useState();


    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const config = {
        rules: [
          {
            type: 'object',
            required: true,
            message: 'Please select time!',
          },
        ],
      };


    return (
        <div className="formAddBg">
            <Form className="addEventForm" onFinish={(value) => {console.log(value.date) }}>
                <Typography.Title level={2} className="headerText">Adauga un nou eveniment</Typography.Title>
                <Form.Item rules={[{
                    required: true,
                    message: "Introdu denumirea evenimentului",
                }]} label='Name' name={'name'}>
                    <Input placeholder="Introdu denumirea evenimentului" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Item>
                
                <Form.Item rules={[{
                    required: true,
                    message: "Introdu descrierea evenimentului",
                }]} label='Description' name={'description'}>
                    <Input placeholder="Introdu descrierea evenimentului" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Item>

                <Form.Item rules={[{
                    required: true,
                    message: "Introdu pretul unui bilet",
                }]} label='Price' name={'price'}>
                    <Input placeholder="Introdu pretul unui bilet" value={price} onChange={(e) => setPrice(e.target.value)} />
                </Form.Item>

                <Form.Item name="date" label="DatePicker" {...config}>
                    <DatePicker value={date} onChange={(_,dateString)=>setDate(dateString)}/>
                </Form.Item>

                <Form.Item
                    name="upload"
                    label="Incarca imaginea"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>

                <Button type="primary" htmlType="submit" block style={{ background: "red"}}>
                    Adauga evenimentul
                </Button>
            </Form>
        </div>
    )
}