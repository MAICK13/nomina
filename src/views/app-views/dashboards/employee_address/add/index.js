import React, {useEffect, useState} from 'react';
import {Card, Modal} from 'antd';
import { Breadcrumb } from 'antd';
import { Form, Input, Select, InputNumber, Button } from 'antd';
import {ExclamationCircleOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import EmployeeAddressService from "../../../../../services/EmployeeAddressService";

const { Option } = Select;

const employees = [];
const area = [];



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

export const AddEmployeePhone = () => {
    const navigate = useNavigate();

    const redirectToList = () => {
        navigate("/app/dashboards/employee_address/list");
    }

    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        EmployeeAddressService.employee_list().then(result => setDataResult(result))
    }, []);

    const onFinish = async values => {
        const response = await EmployeeAddressService.create(values)
        if(response.result === "error"){
            showError(response.message)
        }else{
            redirectToList()
        }
    };

    return <>
        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Agregar Dirección Empleado</h2>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="list">Dirección Empleado</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Agregar</Breadcrumb.Item>
                </Breadcrumb>
            </div>


        </div>

        <div>
            <Card bordered={false} style={{ width: '100%' }}>
                <Form name="complex-form" labelCol={{ span: 3 }}
                      initialValues={{  }}
                      onFinish={onFinish}
                >

                    <Form.Item
                        label="Empleado"
                        name="employee"
                        rules={[{ required: true, message: 'Empleado requerido' }]}
                    >
                        <Select
                            showSearch
                            style={{ width: '100%' }}
                            placeholder="Empleado"
                            onChange={handleChange}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {dataResult.length > 0 ? dataResult.map(result => (
                                <Option key={result.key}>{result.employee_name + " " + result.employee_last_name}</Option>
                            )) : <Option key={null}>Cargando información</Option>}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Tipo Dirección"
                        name="address_type"
                        rules={[{ required: true, message: 'Tipo requerido' }]}
                    >
                        <Input placeholder="Tipo Dirección" />
                    </Form.Item>
                    <Form.Item
                        label="Indicador"
                        name="address_indicator"
                        rules={[{ required: true, message: 'Indicador requerido' }]}
                    >
                        <Input placeholder="Indicador" />
                    </Form.Item>
                    <Form.Item
                        label="Dirección"
                        name="employee_address"
                        rules={[{ required: true, message: 'Dirección requerido' }]}
                    >
                        <Input placeholder="Dirección" />
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


export default AddEmployeePhone;
