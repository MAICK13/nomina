import React from 'react';
import { Card, Modal } from 'antd';
import { Breadcrumb } from 'antd';
import { Form, Input, Select, Tooltip, Button, DatePicker } from 'antd';
import ReportService , {downloadPayroll} from "../../../../../services/ReportService";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import moment from "moment";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const { Option } = Select;
const { confirm } = Modal;

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
function onChange(date, dateString) {
    console.log(date, dateString);
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


export const PayrollReport = () => {

    const onFinish = async values => {
        const datesOnly = {};

        Object.keys(values).forEach((key) => {
            const value = values[key];
            if (value && value instanceof moment) {
                const dateOnly = value.format('YYYY-MM-DD');
                datesOnly[key] = dateOnly;
            }
        });

        datesOnly.type = values.type;

        console.log(datesOnly);
        await downloadPayroll(datesOnly);

    };

    return <>
        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Generar Nomina</h2>

            </div>


        </div>

        <div>
            <Card bordered={false} style={{ width: '100%' }}>
                <Form name="complex-form" labelCol={{ span: 4 }} onFinish={onFinish}>


                    <Form.Item
                        label="Fecha Inicio"
                        name="start_date"
                        rules={[{ required: true, message: 'Fecha Requerida' }]}
                        // style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                    >
                        <DatePicker onChange={onChange} placeholder="Fecha Inicio"  style={{ width: '300px' }}/>
                    </Form.Item>

                    <Form.Item
                        label="Fecha Fin"
                        name="end_date"
                        rules={[{ required: true, message: 'Fecha Fin' }]}
                        // style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                    >
                        <DatePicker onChange={onChange} placeholder="Fecha Inicio"  style={{ width: '300px' }} />
                    </Form.Item>

                    <Form.Item
                        label="Fecha Pago"
                        name="pay_date"
                        rules={[{ required: true, message: 'Fecha Requerida' }]}
                        // style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                    >
                        <DatePicker onChange={onChange} placeholder="Fecha Pago" style={{ width: '300px' }} />
                    </Form.Item>

                    <Form.Item
                        label="Tipo"
                        name="type"
                        rules={[{ required: true, message: 'Tipo requerido' }]}
                    >
                        <Select
                            showSearch
                            style={{ width: '300px' }}
                            placeholder="Tipo"
                            onChange={handleChange}
                        >
                            <Option key={1}>Quincenal</Option>
                            <Option key={2}>Mensual</Option>

                        </Select>
                    </Form.Item>


                    <div style={{display:'flex', width:'100%', justifyContent:'center', marginBottom:'30px'}}>
                        <Form.Item >
                            <Button className="mr-2" type="primary" htmlType="submit">
                                Generar Nomina
                            </Button>
                        </Form.Item>
                    </div>


                </Form>
            </Card>
            <div>

            </div>
        </div>


    </>
}


export default PayrollReport;
