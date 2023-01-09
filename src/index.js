import React from "react";
import { createRoot } from "react-dom/client";
import App from "./containers/App";
import 'antd/dist/reset.css';
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom"
import AppProvider from "./context";


const root = document.getElementById("root");

const main = createRoot(root);

main.render(
    <ConfigProvider>
        <BrowserRouter>
            <AppProvider>
                <App />
            </AppProvider>
        </BrowserRouter>
    </ConfigProvider>
);