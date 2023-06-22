import React, {useEffect, useState} from 'react';
import {Card, Modal} from 'antd';
import { Breadcrumb } from 'antd';
import { Form, Input, Select, Tooltip, Button } from 'antd';
import { DatePicker } from 'antd';
import VacationService from "../../../../../services/VacationService";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { Option } = Select;

const position = [];
const area = [];
function onChange(date, dateString) {
    console.log(date, dateString);
}

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

export const AddVacation = () => {
    const navigate = useNavigate();

    const redirectToList = () => {
        navigate("/app/dashboards/vacation/list");
    }
    const[dataResult, setDataResult] = useState([]);

    useEffect(()=>{
        VacationService.employee_list().then(result => setDataResult(result))
    },[])

    const onFinish = async values => {

        const datesOnly = {};

        Object.keys(values).forEach((key) => {
            const value = values[key];
            if (value && value instanceof moment) {
                const dateOnly = value.format('YYYY-MM-DD');
                datesOnly[key] = dateOnly;
            }
        });
        datesOnly.employee = values.employee
        datesOnly.left_days = values.left_days
        datesOnly.rejection_reason = values.rejection_reason

        const response = await VacationService.create(datesOnly)
        if(response.result === "error"){
            showError(response.message)
        }else{
            redirectToList()
        }
    };

    return <>
        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Solictudes de Vacaciones</h2>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="list">Solicitud De Vacaciones</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Solicitar</Breadcrumb.Item>
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
                        label="Fecha solicitud"
                        name="request_date"
                        rules={[{ required: true, message: 'Fecha solicitud requerida' }]}
                    >
                        <DatePicker onChange={onChange} placeholder="Selecciona una fecha" style={{width:'200px'}} />
                    </Form.Item>
                    <Form.Item
                        label="Fecha Aprobacion"
                        name="date_approval"
                        rules={[{ required: true, message: 'Fecha aprobacion requerida' }]}
                    >
                        <DatePicker onChange={onChange} placeholder="Selecciona una fecha" style={{width:'200px'}} />
                    </Form.Item>
                    <Form.Item
                        label="Fecha Inicio"
                        name="start_date"
                        rules={[{ required: true, message: 'Fecha inicio requerida' }]}
                    >
                        <DatePicker onChange={onChange} placeholder="Selecciona una fecha" style={{width:'200px'}} />
                    </Form.Item>
                    <Form.Item
                        label="Fecha Fin"
                        name="end_date"
                        rules={[{ required: true, message: 'Fecha fin requerida' }]}
                    >
                        <DatePicker onChange={onChange} placeholder="Selecciona una fecha" style={{width:'200px'}} />
                    </Form.Item>

                    <Form.Item
                        label="Fecha Rechazo"
                        name="date_rejection"
                        rules={[{ required: true, message: 'Fecha rechazo requerida' }]}
                    >
                        <DatePicker onChange={onChange} placeholder="Selecciona una fecha" style={{width:'200px'}} />
                    </Form.Item>
                    <Form.Item
                        label="Razon"
                        name="rejection_reason"
                        rules={[{ required: true, message: 'Salario requerido' }]}
                    >
                        <Input placeholder="Salario" />
                    </Form.Item>

                    <Form.Item
                        label="Empleado"
                        name="employee"
                        rules={[{ required: true, message: 'Descripcion de solicitud' }]}
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
                        label="Dias fuera"
                        name="left_days"
                        rules={[{ required: true, message: 'Puesto Requerido' }]}
                    >
                        <Input placeholder="Dias que el empleado estara ausente" />
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


export default AddVacation;
