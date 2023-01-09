import React, { useState } from 'react';
import { Input, Table } from 'antd';
import { useAppContext } from '../../context';


export default function TableGroups() {

    const { groups, rowSelection } = useAppContext();

    const columns = [
        {
            title: 'Grup',
            dataIndex: 'name',
        },
        {
            title: 'Sector',
            dataIndex: 'sector_nr',
        },
    ];

    const [search, setSearch] = useState("");

    const data = [];
    groups
        .filter((group) => group.name.toLowerCase().includes(search.toLowerCase()))
        .map((group) => {
            data.push({
                key: group.sector_nr,
                name: group.name,
                sector_nr: group.sector_nr,
            })
        }
        )


    return (
        <div style={{
            display: 'block',
            width: 700,
            padding: 30,
            alignContent: 'center',
        }}>
            <Input.Search
                placeholder='Cauta grup'
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            ></Input.Search>
            <Table
                rowSelection={{
                    type: "radio",
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};
