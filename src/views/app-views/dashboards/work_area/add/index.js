import React from 'react';
import {Card, Modal} from 'antd';
import { Breadcrumb } from 'antd';
import { Form, Input, Select, Tooltip, Button } from 'antd';
import AreaService from "../../../../../services/AreaService";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

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
        navigate("/app/dashboards/work_area/list");
    }

    const onFinish = async values => {
        const response = await AreaService.create(values)
        if(response.result === "error"){
            showError(response.message)
        }else{
            redirectToList()
        }
    };

    return <>
        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Agregar Área De Trabajo</h2>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="list">Áreas De Trabajo</a>
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
                        label="Área"
                        name="area_name"
                        rules={[{ required: true, message: 'Área Requerida' }]}
                    >
                        <Input placeholder="Área" />
                    </Form.Item>
                    <Form.Item
                        label="Descripción"
                        name="area_description"
                        rules={[{ required: true, message: 'Descripción Requerida' }]}
                    >
                        <Input placeholder="Descripción" />
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
