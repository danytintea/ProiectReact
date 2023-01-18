
import { Button, DatePicker, Form, Input, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context";
import "./style.css"

export default function FormAddEvents({nameButton, title, finish, event}) {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [date, setDate] = useState();
    const [image, setImage] = useState();

    const {setIdModal}=useAppContext();

    const [form]=useForm();
    useEffect(() => {
        form.setFieldsValue({
            name: event ? event.name : "",
            description: event? event.description: "",
            price: event? event.price: "",
            date: event? event.date: "",
            image: event? event.image: ""
        })
        setIdModal(event? event.id:null)
    }, []);

    return (
        <div className="formAddBg">
            <Form className="addEventForm" onFinish={finish} form={form}>
                <Typography.Title level={2} className="headerText">{title}</Typography.Title>
                <Form.Item rules={[{
                    required: true,
                    message: "Introdu denumirea evenimentului",
                }]} label='Denumire' name={'name'}>
                    <Input placeholder="Introdu denumirea evenimentului" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Item>

                <Form.Item rules={[{
                    required: true,
                    message: "Introdu descrierea evenimentului",
                }]} label='Descriere' name={'description'}>
                    <Input placeholder="Introdu descrierea evenimentului" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Item>

                <Form.Item rules={[{
                    required: true,
                    message: "Introdu pretul unui bilet",
                }]} label='Pret' name={'price'}>
                    <Input placeholder="Introdu pretul unui bilet" value={price} onChange={(e) => setPrice(e.target.value)} />
                </Form.Item>

                <Form.Item rules={[{
                    required: true,
                    message: "Introdu data",
                }]} name="date" label="Data">                
                    <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </Form.Item>

                <Form.Item
                rules={[{
                    required: true,
                    message: "Introdu link-ul pentru imagine",
                }]}
                    name="image"
                    label="Incarca imaginea"
                >
                    {/* <Input type="file" name="photo"  onChange={handleInputChange}/> */}
                    <Input placeholder="Introdu link-ul pentru imagine" value={image} onChange={(e) => setImage(e.target.value)} />
                </Form.Item>

                <Button type="primary" htmlType="submit" block style={{ background: "red" }}>
                    {nameButton}
                </Button>

            </Form>
        </div>
    )
}