import React from 'react';
import { Card } from 'antd';
import { Breadcrumb } from 'antd';
import { Form, Input, Select, Tooltip, Button } from 'antd';


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

export const AddEmployee = () => {

    return <>
        <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginBottom:'30px'}}>
            <div>
                <h2>Agregar Contrato</h2>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="list">Contratos</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Agregar</Breadcrumb.Item>
                </Breadcrumb>
            </div>


        </div>

        <div>
            <Card bordered={false} style={{ width: '100%' }}>
                <Form name="complex-form" labelCol={{ span: 3 }} >

                    <Form.Item
                        label="Primer Nombre"
                        name="firstName"
                        rules={[{ required: true, message: 'Primer Nombre Requerido' }]}
                        // style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                    >
                        <Input placeholder="Primer Nombre" />
                    </Form.Item>
                    <Form.Item
                        label="Segundo nombre"
                        name="secondName"
                        rules={[{ required: true, message: 'Segundo Nombre Requerido' }]}
                        // style={{ display: 'inline-block', width: 'calc(50% - 5px)' }}
                    >
                        <Input placeholder="Segundo Nombre" />
                    </Form.Item>
                    <Form.Item
                        label="Puesto"
                        name="position"
                        rules={[{ required: true, message: 'Puesto Requerido' }]}
                        // style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                    >
                        <Select
                            showSearch
                            style={{ width: '100%' }}
                            placeholder="Seleccionar Puesto"
                            optionFilterProp="position"
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {position}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Area De Trabajo"
                        name="area"
                        rules={[{ required: true, message: 'Area Requerida' }]}
                        // style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                    >
                        <Select
                            showSearch
                            style={{ width: '100%' }}
                            placeholder="Seleccionar Area"
                            optionFilterProp="area"
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {area}
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
