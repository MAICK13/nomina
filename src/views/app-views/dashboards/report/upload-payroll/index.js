import React from 'react';
import { Card } from 'antd';

import { UploadOutlined } from '@ant-design/icons';
import { Form, Input, Select, Tooltip, Button, DatePicker, Upload, message } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};


export const UploadPayroll = () => {

    return <>
        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Cargar Nomina</h2>

            </div>


        </div>

        <div>
            <Card bordered={false} style={{ width: '100%' }}>
                <Form name="complex-form" labelCol={{ span: 4 }} >


                    <Form.Item
                        label="Fecha Nomina"
                        name="date"
                        rules={[{ required: true, message: 'Fecha Requerida' }]}
                        // style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                    >
                        <MonthPicker  />
                    </Form.Item>

                    <Form.Item
                        label="Archivo Nomina"
                        name="date"
                        rules={[{ required: true, message: 'Archivo Requerido' }]}
                        // style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                    >
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Seleccionar Archivo</Button>
                        </Upload>,
                    </Form.Item>


                    <div style={{display:'flex', width:'100%', justifyContent:'center', marginBottom:'30px'}}>
                        <Form.Item >
                            <Button className="mr-2" type="primary" htmlType="submit">
                                Cargar Nomina
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


export default UploadPayroll;
