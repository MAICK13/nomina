import React, {useEffect, useState} from 'react';
import { Button } from 'antd';
import { Table, Modal, Form, Input, Select, } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import JobService, {handleDownload} from 'services/JobService';
;


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
            const response = await JobService.delete(rowID)
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
        title: 'Puesto',
        dataIndex: 'job_name',
        key: 'job_name',
        render: text => <b>{text}</b>,
    },
    {
        title: 'Descripcion',
        dataIndex: 'job_description',
        key: 'job_description',
        render: text => <b>{text}</b>,
    },
    {
        title: 'Salario',
        dataIndex: 'job_salary',
        key: 'job_salary',
        render: text => <b>{text}</b>,
    },
    {
        title: 'Area',
        dataIndex: 'area_name',
        key: 'area_name',
        render: text => <b>{text}</b>,
    },

    {
        title: 'Accion',
        dataIndex: 'key',
        key: 'action',
        render: rowID => <div>
            <a href={"edit/"+rowID}><Button type="primary" icon={<EditOutlined />}></Button></a>
            <Button type="danger" icon={<DeleteOutlined />} style={{marginLeft: '10px'}} onClick={() => showConfirm(rowID)}></Button>
        </div>,
    },
];

export const DefaultJob = () => {

    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        JobService.list().then(result => setDataResult(result))
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

        {/*<Modal title="Busqueda Avanzada" open={isModalOpen} onOk={handleOk} okText={'Buscar'} cancelText={'Cancelar'} onCancel={handleCancel}>
            <Form name="complex-form" labelCol={{ span: 6 }} >
                <Form.Item
                    label="Puesto"
                    name="position"
                    rules={[{ required: true, message: 'Puesto Requerido' }]}
                    // style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                >
                    <Input placeholder="Puesto" />
                </Form.Item>
            </Form>
        </Modal>*/}

        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Lista De Puestos</h2>
            </div>
            <div>
                <Button onClick={handleDownload}>Descargar reporte</Button>
                <a href="add"><Button type="primary" style={{marginLeft:'10px'}}>Agregar Nuevo</Button></a>
            </div>

        </div>

        <Table columns={columns} dataSource={dataResult} />

    </>
}


export default DefaultJob;
