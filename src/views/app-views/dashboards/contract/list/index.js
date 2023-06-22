import React, {useState} from 'react';
import {Table, Divider, Tag, Modal, Form, Select, Input} from 'antd';
import { Button } from 'antd';
import {SearchOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined} from '@ant-design/icons';

const { confirm } = Modal;

const showConfirm = () => {
    confirm({
        icon: <ExclamationCircleOutlined />,
        content: <h3>Deseas Eliminar El registro?</h3>,
        okText: 'Eliminar',
        okType: 'danger',
        cancelText: 'Cancelar',
        onOk() {
            console.log('Eli');
        },
        onCancel() {
            console.log('Cancel');
        },

    });
};

const columns = [
    {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
        render: text => <b>{text}</b>,
    },
    {
        title: 'Tipo Contrato',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Creacion',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Creado Por',
        key: 'tags',
        dataIndex: 'tags',
    },
    {
        title: 'Accion',
        key: 'action',
        render: text => <div>
            <Button type="primary" icon={<EditOutlined />}></Button>
            <Button type="danger" icon={<DeleteOutlined />} style={{marginLeft: '10px'}} onClick={showConfirm}></Button>
        </div>,
    },
];

const data = [
    {
        key: '1',
        name: 'Contrato A',
        age: 'Tipo 1',
        address: '20/01/2023',
        tags: 'Fredy Reyes',
    },
    {
        key: '2',
        name: 'Contrato A',
        age: 'Tipo 1',
        address: '20/01/2023',
        tags: 'Fredy Reyes',
    },
    {
        key: '3',
        name: 'Contrato A',
        age: 'Tipo 1',
        address: '20/01/2023',
        tags: 'Fredy Reyes',
    },
    {
        key: '4',
        name: 'Contrato A',
        age: 'Tipo 1',
        address: '20/01/2023',
        tags: 'Fredy Reyes',
    },
    {
        key: '5',
        name: 'Contrato A',
        age: 'Tipo 1',
        address: '20/01/2023',
        tags: 'Fredy Reyes',
    }

];

export const DefaultContract = () => {

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

        <Modal title="Busqueda Avanzada" open={isModalOpen} onOk={handleOk} okText={'Buscar'} cancelText={'Cancelar'} onCancel={handleCancel}>
            <Form name="complex-form" labelCol={{ span: 6 }} >
                <Form.Item
                    label="Tipo Contrato"
                    name="position"
                    rules={[{ required: true, message: 'Puesto Requerido' }]}
                    // style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                >

                    <Input placeholder="Tipo Contrato" />
                </Form.Item>
            </Form>
        </Modal>

        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Lista De Contratos</h2>
            </div>
            <div>
                <Button icon={<SearchOutlined />} onClick={showModal}>Buscar</Button>
                <a href="add"><Button type="primary" style={{marginLeft:'10px'}}>Agregar Nuevo</Button></a>
            </div>

        </div>

        <Table columns={columns} dataSource={data} />

    </>
}


export default DefaultContract;
