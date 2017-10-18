/**
 * Created by chenzhongying on 2017/10/12.
 */

import React from 'react';
import 'antd/dist/antd.css';
import '../css/login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';



const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(typeof values);
            if (!err) {
                fetch('./common.js', {
                 method: "POST",
                 body: JSON.stringify(values),
                 headers: {
                 "Content-Type": "application/json"
                 },
                 credentials: "same-origin"
                 }).then(function(response) {
                    console.log(response);
                 }, function(error) {
                    console.log(error.statusText);
                 })
            }
        });

    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入您的用户名' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} type="text" placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入您的密码' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        );
    }
}

const Login = Form.create()(NormalLoginForm);


export default Login;