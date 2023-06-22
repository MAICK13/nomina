import React, {useEffect, useState} from 'react';
import { Button } from 'antd';
import { Table, Modal, Form, Input, Select, } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import AreaService, {handleDownload} from 'services/AreaService';

const { confirm } = Modal;

const { Option } = Select;
const position = [];

for (let i = 10; i < 36; i++) {
    position.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const showError = (message) => {
    confirm({
        title: 'Error al eliminar',
        icon: <ExclamationCircleOutlined />,
        content: message,
        cancelText: 'Cancelar',
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
};


const showConfirm = (rowID) => {

    confirm({
        icon: <ExclamationCircleOutlined />,
        content: <h3>Deseas Eliminar El registro?</h3>,
        okText: 'Eliminar',
        okType: 'danger',
        cancelText: 'Cancelar',
        async onOk() {
            const response = await AreaService.delete(rowID)
            if(response.result === "error"){
                showError(response.message)
            }else{
                window.location.reload(false);
            }
        },
        onCancel() {
            console.log('Cancel');
        },

    });
};

const columns = [
    {
        title: 'Área',
        dataIndex: 'area_name',
        key: 'area_name',
        render: text => <b>{text}</b>,
    },
    {
        title: 'Descripción',
        dataIndex: 'area_description',
        key: 'area_description',
        render: text => <b>{text}</b>,
    },

    {
        title: 'Acción',
        dataIndex: 'key',
        key: 'action',
        render: rowID => <div>
            <a href={"edit/"+rowID}><Button type="primary" icon={<EditOutlined />}></Button></a>
            <Button type="danger" icon={<DeleteOutlined />} style={{marginLeft: '10px'}} onClick={() => showConfirm(rowID)}></Button>
        </div>,
    },
];

export const DefaultEmployee = () => {

    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        AreaService.list().then(result => setDataResult(result))
    }, []);


    return <>

        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Áreas De Trabajo</h2>
            </div>
            <div>
                <Button onClick={handleDownload}>Descargar reporte</Button>
                <a href="add"><Button type="primary" style={{marginLeft:'10px'}}>Agregar Nuevo Registro</Button></a>
            </div>

        </div>

        <Table columns={columns} dataSource={dataResult} />

    </>
}


export default DefaultEmployee;
