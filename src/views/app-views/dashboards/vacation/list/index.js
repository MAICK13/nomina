import React, {useEffect, useState} from 'react';
import {Table, Divider, Tag, Breadcrumb, Modal, Form, Select, Input} from 'antd';
import { Button } from 'antd';
import {SearchOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined} from '@ant-design/icons';
import VacationService, {handleDownload} from 'services/VacationService';

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
            const response = await VacationService.delete(rowID)
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
        dataIndex: 'employee',
        key: 'employee',
        render: text => <b>{text}</b>,
    },{
        title: 'Solicitud',
        dataIndex: 'request_date',
        key: 'request_date',
        render: text => <b>{text}</b>,
    },
    {
        title: 'Aprovacion',
        dataIndex: 'date_approval',
        key: 'date_approval',
        render: text => <b>{text}</b>,
    },
    {
        title: 'Desde',
        dataIndex: 'start_date',
        key: 'start_date',
        render: text => <b>{text}</b>,
    },
    {
        title: 'Hasta',
        dataIndex: 'end_date',
        key: 'end_date',
        render: text => <b>{text}</b>,
    },
    {
        title: 'Total de dias',
        dataIndex: 'left_days',
        key: 'left_days',
        render: text => <b>{text}</b>,
    },
    {
        title: 'Accion',
        dataIndex: 'key',
        key: 'action',
        render: rowID => <div>
            {/*<a href={"edit/"+rowID}><Button type="primary" icon={<EditOutlined />}></Button></a>*/}
            <Button type="danger" icon={<DeleteOutlined />} style={{marginLeft: '10px'}} onClick={() => showConfirm(rowID)}></Button>
        </div>,
    },
];



export const DefaultVacation = () => {

    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        VacationService.list().then(result => setDataResult(result))
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

       {/* <Modal title="Busqueda Avanzada" open={isModalOpen} onOk={handleOk} okText={'Buscar'} cancelText={'Cancelar'} onCancel={handleCancel}>
            <Form name="complex-form" labelCol={{ span: 6 }} >
                <Form.Item
                    label="Autorizado"
                    name="position"
                    rules={[{ required: true, message: 'Puesto Requerido' }]}
                    // style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                >
                    <Input placeholder="Autorizado" />
                </Form.Item>
            </Form>
        </Modal>*/}

        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Solictudes de Vacaciones</h2>

            </div>
            <div>
                <Button onClick={handleDownload}>Descargar reporte</Button>
                <a href="add"><Button type="primary" style={{marginLeft:'10px'}}>Solicitar</Button></a>
            </div>

        </div>

        <Table columns={columns} dataSource={dataResult} />

    </>
}


export default DefaultVacation;
