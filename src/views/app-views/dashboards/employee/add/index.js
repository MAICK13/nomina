import React, {useEffect, useState} from 'react';
import {Card, DatePicker, Modal} from 'antd';
import { Breadcrumb } from 'antd';
import { Form, Input, Select, Tooltip, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../../../../services/EmployeeService";
import {ExclamationCircleOutlined} from "@ant-design/icons";


const { Option } = Select;

const position = [];
const area = [];

for (let i = 10; i < 36; i++) {
    position.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

for (let i = 1; i <11 ; i++) {
    area.push(<Option key={i.toString(11) + i}>{i.toString(11) + i}</Option>);
}

function handleChange(value) {
    console.log(`selected ${value}`);
}

const { confirm } = Modal;

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
export const AddEmployee = () => {

    const navigate = useNavigate();

    const redirectToList = () => {
        navigate("/app/dashboards/employee/list");
    }

    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        EmployeeService.job_list().then(result => setDataResult(result))
    }, []);

    const onFinish = async values => {
        const response = await EmployeeService.create(values)
        if(response.result === "error"){
            showError(response.message)
        }else{
            redirectToList()
        }
    };
    return <>
        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Agregar Colaborador</h2>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="list">Colaboradores</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Agregar</Breadcrumb.Item>
                </Breadcrumb>
            </div>


        </div>

        <div>
            <Card bordered={false} style={{ width: '100%' }}>
                <Form name="complex-form" labelCol={{ span: 3 }} onFinish={onFinish}>

                    <Form.Item
                        label="Primer Nombre"
                        name="employee_name"
                        rules={[{ required: true, message: 'Primer Nombre Requerido' }]}
                    >
                        <Input placeholder="Primer Nombre" />
                    </Form.Item>
                    <Form.Item
                        label="Segundo nombre"
                        name="employee_second_name"
                        rules={[{ required: true, message: 'Segundo Nombre Requerido' }]}
                    >
                        <Input placeholder="Segundo Nombre" />
                    </Form.Item>
                    <Form.Item
                        label="Otros nombre"
                        name="employee_other_name"
                        rules={[{ required: true, message: 'Segundo Nombre Requerido' }]}
                    >
                        <Input placeholder="Otros Nombre" />
                    </Form.Item>
                    <Form.Item
                        label="Primer ApelLido"
                        name="employee_last_name"
                        rules={[{ required: true, message: 'Primer Apellido Requerido' }]}
                    >
                        <Input placeholder="Primer Apellido" />
                    </Form.Item>
                    <Form.Item
                        label="Segundo Apellido"
                        name="employee_second_last_name"
                        rules={[{ required: true, message: 'Segundo Apellido Requerido' }]}
                    >
                        <Input placeholder="Segundo Apellido" />
                    </Form.Item>
                    <Form.Item
                        label="Apellido de casada"
                        name="employee_last_name_married"
                        rules={[{ required: true, message: 'Segundo Nombre Requerido' }]}
                    >
                        <Input placeholder="Apellido de casada" />
                    </Form.Item>
                    <Form.Item
                        label="Genero"
                        name="employee_gender"
                        rules={[{ required: true, message: 'Genero Requerido' }]}
                    >
                        <Input placeholder="Genero" />
                    </Form.Item>
                    <Form.Item
                        label="Estado Civil"
                        name="employee_civil_state"
                        rules={[{ required: true, message: 'Estado Requerido' }]}
                    >
                        <Input placeholder="Estado civil" />
                    </Form.Item>
                    <Form.Item
                        label="Fecha de Nacimiento"
                        name="employee_born_date"
                        rules={[{ required: true, message: 'Fecha Requerida' }]}
                    >
                        <Input placeholder="yyyy-mm-dd" />
                    </Form.Item>
                    <Form.Item
                        label="Lugar de Nacimiento"
                        name="employee_born_place"
                        rules={[{ required: true, message: 'Lugar Requerido' }]}
                    >
                        <Input placeholder="Lugar de nacimiento" />
                    </Form.Item>
                    <Form.Item
                        label="D P I"
                        name="employee_dpi"
                        rules={[{ required: true, message: 'DPI Requerido' }]}
                    >
                        <Input placeholder="D P I" />
                    </Form.Item>
                    <Form.Item
                        label="Fecha de inicio"
                        name="employee_start_date"
                        rules={[{ required: true, message: 'Fecha Requerida' }]}
                    >
                        <Input placeholder="yyyy-mm-dd" />
                    </Form.Item>
                    <Form.Item
                        label="Tipo de Contrato"
                        name="employee_contract"
                        rules={[{ required: true, message: 'Contrato Requerido' }]}
                    >
                        <Input placeholder="Tipo de contrato" />
                    </Form.Item>
                    <Form.Item
                        label="Puesto"
                        name="job"
                        rules={[{ required: true, message: 'Puesto Requerido' }]}
                    >
                        <Select
                            showSearch
                            style={{ width: '100%' }}
                            placeholder="Puesto"
                            onChange={handleChange}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {dataResult.length > 0 ? dataResult.map(result => (
                                <Option key={result.key}>{result.job_name}</Option>
                            )) : <Option key={null}>Cargando información</Option>}
                        </Select>
                    </Form.Item>

                    <div style={{display:'flex', width:'100%', justifyContent:'center', marginBottom:'30px'}}>
                        <Form.Item >
                            <Button className="mr-2" type="primary" htmlType="submit">
                                Agregar
                            </Button>
                            <a href="list"><Button className="mr-2" htmlType="button" >
                                Regresar
                            </Button></a>
                        </Form.Item>
                    </div>


                </Form>
            </Card>
            <div>

            </div>
        </div>


    </>
}


export default AddEmployee;
