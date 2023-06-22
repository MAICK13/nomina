import React, {useEffect, useState} from 'react';
import { Button } from 'antd';
import { Table, Modal, Form, Input, Select, } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import EmployeeEmailService, {handleDownload} from 'services/EmployeeEmailService';


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
            const response = await EmployeeEmailService.delete(rowID)
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
        title: 'Empleado',
        dataIndex: 'employee_name',
        key: 'employee_name',
        render: text => <b>{text}</b>,
    },
    {
        title: 'Tipo',
        dataIndex: 'email_type',
        key: 'email_type',
        render: text => <b>{text}</b>,
    },
    {
        title: 'Email',
        dataIndex: 'employee_email',
        key: 'employee_email',
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

export const DefaultEmployeeEmail = () => {

    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        EmployeeEmailService.list().then(result => setDataResult(result))
    }, []);


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return <>

        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Correo Empleado</h2>
            </div>
            <div>
                <Button onClick={handleDownload}>Descargar reporte</Button>
                <a href="add"><Button type="primary" style={{marginLeft:'10px'}}>Agregar Nuevo Registro</Button></a>
            </div>

        </div>

        <Table columns={columns} dataSource={dataResult} />

    </>
}


export default DefaultEmployeeEmail;
