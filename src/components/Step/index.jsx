import { Steps } from "antd";
import React, { useState } from "react";
import { useAppContext } from "../../context";

export default function () {
    const {step, changeStep}=useAppContext();
    return (
        <>
            <Steps
                current={step}
                onChange={changeStep}
                items={[
                    {
                        title: 'Pasul 1',
                        description: 'Alege sectorul',
                    },
                    {
                        title: 'Pasul 2',
                        description: 'Alege locurile',
                    },
                    {
                        title: 'Pasul 3',
                        description: 'Completeaza datele',
                    },
                ]}
            />
        </>
    );
}