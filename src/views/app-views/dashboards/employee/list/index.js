import React, {useEffect, useState} from 'react';
import { Button } from 'antd';
import { Table, Modal, Form, Input, Select, } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import EmployeeService, {handleDownload} from "../../../../../services/EmployeeService";

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
            const response = await EmployeeService.delete(rowID)
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
        title: 'Primer nombre',
        dataIndex: 'employee_name',
        key: 'employee_name',
        render: text => <b>{text}</b>,
    },
    {
        title: 'Segundo nombre',
        dataIndex: 'employee_second_name',
        key: 'employee_second_name',
        render: text => <b>{text}</b>,
    },
    /*{
        title: 'Otros nombre',
        dataIndex: 'employee_other_name',
        key: 'employee_other_name',
        render: text => <b>{text}</b>,
    },*/
    {
        title: 'Primer apellido',
        dataIndex: 'employee_last_name',
        key: 'employee_last_name',
        render: text => <b>{text}</b>,
    },
    {
        title: 'Segundo apellido',
        dataIndex: 'employee_second_last_name',
        key: 'employee_second_last_name',
        render: text => <b>{text}</b>,
    },
    /*{
        title: 'Apellido casada',
        dataIndex: 'employee_last_name_married',
        key: 'employee_last_name_married',
        render: text => <b>{text}</b>,
    },*/
    {
        title: 'Identificacion',
        dataIndex: 'employee_dpi',
        key: 'employee_dpi',
        render: text => <b>{text}</b>,
    },
    // {
    //     title: 'Fecha nacimiento',
    //     dataIndex: 'employee_born_date',
    //     key: 'employee_born_date',
    //     render: text => <b>{text}</b>,
    // },
    // {
    //     title: 'Nacimineto',
    //     dataIndex: 'employee_born_place',
    //     key: 'employee_born_place',
    //     render: text => <b>{text}</b>,
    // },
    // {
    //     title: 'Genero',
    //     dataIndex: 'employee_gender',
    //     key: 'employee_gender',
    //     render: text => <b>{text}</b>,
    // },
    // {
    //     title: 'Estado civil',
    //     dataIndex: 'employee_civil_state',
    //     key: 'employee_civil_state',
    //     render: text => <b>{text}</b>,
    // },
    {
        title: 'Puesto',
        dataIndex: 'job_name',
        key: 'job_name',
        render: text => <b>{text}</b>,
    },
    {
        title: 'Tipo de contrato',
        dataIndex: 'employee_contract',
        key: 'employee_contract',
        render: text => <b>{text}</b>,
    },
    {
        title: 'Fecha de Inicio',
        dataIndex: 'employee_start_date',
        key: 'employee_start_date',
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
        EmployeeService.list().then(result => setDataResult(result))
    }, []);

    console.log(dataResult)

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
            <Form name="complex-form" labelCol={{ span: 3 }} >
                <Form.Item
                    label="Puesto"
                    name="position"
                    rules={[{ required: true, message: 'Puesto Requerido' }]}
                    // style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                >
                    <Select
                        showSearch
                        style={{ width: '100%' }}
                        placeholder="Seleccionar Puesto"
                        optionFilterProp="position"
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {position}
                    </Select>
                </Form.Item>
            </Form>
        </Modal>

        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Lista De Empleados</h2>
            </div>
            <div>
                <Button onClick={handleDownload}>Descargar reporte</Button>
                <a href="add"><Button type="primary" style={{marginLeft:'10px'}}>Agregar Nuevo</Button></a>
            </div>

        </div>

        <Table columns={columns} dataSource={dataResult} />

    </>
}


export default DefaultEmployee;
