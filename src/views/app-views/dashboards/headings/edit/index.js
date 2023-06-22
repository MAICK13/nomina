import React, {useEffect} from 'react';
import {Card, InputNumber, Modal} from 'antd';
import { Breadcrumb } from 'antd';
import { Form, Input, Select, Tooltip, Button } from 'antd';
import ItemService from "../../../../../services/ItemService";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {useNavigate, useParams} from "react-router-dom";
import AreaService from "../../../../../services/AreaService";



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
    const params = useParams();
    const [form] = Form.useForm();

    const redirectToList = () => {
        navigate("/app/dashboards/headings/list");
    }

    useEffect(() => {
        ItemService.get_item(params.id).then(result => {
            form.setFieldsValue({
                item_description: result.item_description,
                item_type: result.item_type
            })
        })
    }, []);

    const onFinish = async values => {
        const response = await ItemService.edit(values, params.id)
        if(response.result === "error"){
            showError(response.message)
        }else{
            redirectToList()
        }
    };



    return <>
        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Editar Rubro</h2>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="../list">Rubros</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Agregar</Breadcrumb.Item>
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
                        label="Rubro"
                        name="item_description"
                        rules={[{ required: true, message: 'Rubro Requerido' }]}
                    >
                        <Input placeholder="Rubro" />
                    </Form.Item>
                    <Form.Item
                        label="Tipo"
                        name="item_type"
                        rules={[{ required: true, message: 'Tipo Requerido' }]}
                    >
                        <Input placeholder="Tipo" />
                    </Form.Item>

                    <div style={{display:'flex', width:'100%', justifyContent:'center', marginBottom:'30px'}}>
                        <Form.Item >
                            <Button className="mr-2" type="primary" htmlType="submit">
                                Editar
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


export default AddEmployee;
