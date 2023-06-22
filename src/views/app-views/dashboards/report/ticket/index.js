import React, {useEffect, useState} from 'react';
import { Card } from 'antd';
import { Breadcrumb } from 'antd';
import { Form, Input, Select, Tooltip, Button, DatePicker } from 'antd';
import EmployeePhoneService from "../../../../../services/EmployeePhoneService";
import moment from "moment";
import {downloadPayroll, downloadTicket} from "../../../../../services/ReportService";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

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
function onChange(date, dateString) {
    console.log(date, dateString);
}


export const TicketReport = () => {

    const onFinish = async values => {
        console.log(values);

        await downloadTicket(values);
    };

    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        EmployeePhoneService.employee_list().then(result => setDataResult(result))
    }, []);

    return <>
        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Generar Boleta De Pago</h2>

            </div>


        </div>

        <div>
            <Card bordered={false} style={{ width: '100%' }}>
                <Form name="complex-form" labelCol={{ span: 4 }} onFinish={onFinish} >


                    <Form.Item
                        label="Colaborador"
                        name="employee"
                        rules={[{ required: true, message: 'Colaborador Requerido' }]}
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




                    <div style={{display:'flex', width:'100%', justifyContent:'center', marginBottom:'30px'}}>
                        <Form.Item >
                            <Button className="mr-2" type="primary" htmlType="submit">
                                Generar Boleta
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


export default TicketReport;
