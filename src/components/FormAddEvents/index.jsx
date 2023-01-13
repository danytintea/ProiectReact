import { UploadOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Typography, Upload } from "antd";
import React, { useState } from "react";
import "./style.css"

export default function FormAddEvents() {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [date, setDate] = useState();
    
    const [userInfo, setuserInfo] = useState({
        file:[],
        filepreview:null,
       });
    
      const handleInputChange = (event) => {
        setuserInfo({
          ...userInfo,
          file:event.target.files[0],
          filepreview:URL.createObjectURL(event.target.files[0]),
        });
    
      }

    return (
        <div className="formAddBg">
            <Form className="addEventForm" onFinish={(value) => { console.log(value) }}>
                <Typography.Title level={2} className="headerText">Adauga un nou eveniment</Typography.Title>
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
                    name="photo"
                    label="Incarca imaginea"
                >
                    <Input type="file" name="photo" onChange={handleInputChange} />
                </Form.Item>

                <Button type="primary" htmlType="submit" block style={{ background: "red" }}>
                    Adauga evenimentul
                </Button>

                <img className="previewimg"  src={userInfo.filepreview} alt="UploadImage" />
            </Form>
        </div>
    )
}