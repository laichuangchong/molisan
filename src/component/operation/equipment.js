/**
 * Created by chenzhongying on 2017/10/15.
 */
import React from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;
/*function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}*/
class HorizontalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render(){
        const { getFieldDecorator} = this.props.form;

        return (
            <div>
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('userName')(
                            <Input placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password')(
                            <Input type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            查询
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
const Equipment = Form.create()(HorizontalLoginForm);
export default Equipment;