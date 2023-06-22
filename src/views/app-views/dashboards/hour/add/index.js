import React, {useEffect, useState} from 'react';
import {Card, Modal} from 'antd';
import { Breadcrumb } from 'antd';
import { Form, Input, Select, Tooltip, Button, DatePicker } from 'antd';
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import HourService from "../../../../../services/HourService";

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

export const AddJob = () => {

    const navigate = useNavigate();

    const redirectToList = () => {
        navigate("/app/dashboards/hour/list");
    }

    const [dataResult, setDataResult] = useState([]);


    useEffect(()=>{
        HourService.employee_list().then(result=>setDataResult(result))
    }, []);

    const onFinish = async values => {
        const response = await HourService.create(values)
        if(response.result === "error"){
            showError(response.message)
        }else{
            redirectToList()
        }
    };


    return <>
        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Agregar Registro De Horas</h2>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="list">Registro De Horas</a>
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
                        label="Empledo"
                        name="employee"
                        rules={[{ required: true, message: 'Empleado Requerido' }]}
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

export default AddJob;
