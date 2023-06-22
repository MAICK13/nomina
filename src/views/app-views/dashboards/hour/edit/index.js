import React, {useEffect, useState} from 'react';
import {Card, Modal} from 'antd';
import { Breadcrumb } from 'antd';
import { Form, Input, Select, Tooltip, Button } from 'antd';
import HourService from "../../../../../services/HourService";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

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

export const EditHour = () => {

    const navigate = useNavigate();

    const [form] = Form.useForm();

    const params = useParams();

    useEffect(() => {
        HourService.get_hour(params.id).then(result => {
            form.setFieldsValue({
                start_date: result.start_date,
                end_date: result.end_date,
                employee: result.employee,
                hour: result.hour
            })
        })
    }, []);


    const redirectToList = () => {
        navigate("/app/dashboards/hour/list");
    }

    const onFinish = async values => {
        const response = await HourService.edit(values, params.id)
        if(response.result === "error"){
            showError(response.message)
        }else{
            redirectToList()
        }
    };

    return <>
        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Editar Registro de Horas</h2>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="../list">Registro de Horas</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Editar</Breadcrumb.Item>
                </Breadcrumb>
            </div>


        </div>

        <div>
            <Card bordered={false} style={{ width: '100%' }}>
                <Form name="complex-form" labelCol={{ span: 3 }}

                      form={form}

                      onFinish={onFinish}
                >


                    <Form.Item
                        label="Fecha Inicio"
                        name="start_date"
                        rules={[{ required: true, message: 'Fecha Requerida' }]}
                    >
                        <Input placeholder="yyyy-mm-dd" />
                    </Form.Item>
                    <Form.Item
                        label="Fecha Final"
                        name="end_date"
                        rules={[{ required: true, message: 'Fecha Requerida' }]}
                    >
                        <Input placeholder="yyyy-mm-dd" />
                    </Form.Item>
                    <Form.Item
                        label="Ingreso de horas"
                        name="hour"
                        rules={[{ required: true, message: 'Horas Requeridas' }]}
                    >
                        <Input placeholder="Inserte las horas" />
                    </Form.Item>
                    <Form.Item
                        label="Id Empleado"
                        name="employee"
                        rules={[{ required: true, message: 'Id Requerido' }]}
                    >
                        <Input placeholder="Id Empleado" />
                    </Form.Item>

                    <div style={{display:'flex', width:'100%', justifyContent:'center', marginBottom:'30px'}}>
                        <Form.Item >
                            <Button className="mr-2" type="primary" htmlType="submit">
                                Modificar
                            </Button>
                            <a href="../list"><Button className="mr-2" htmlType="button" >
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


export default EditHour;
