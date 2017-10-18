/**
 * Created by chenzhongying on 2017/10/16.
 */
import React from 'react';
import {Form,Input,Button,Table,Switch,Modal,Spin,Row,Col} from 'antd';

const FormItem = Form.Item;
var moment = require('moment');

class Partner1 extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            modalForm:{
                username:'111'
            },
            loading: false,
            visible: false,
            data : [{
            key: 1,
            name:'人工借还',
            number: '0001',
            sort: '人工借还点',
            createTime: 1508144754229,
            valid:{
                mark : 'valid',
                id:1,
                switch:false
            },
            inviter:'黄琬晴',
            cash:{
                mark:'cash',
                id:1,
                switch:true
            },
            remark:'黄琬晴',
            children: [{
                key: 11,
                name:'东山龙门客栈',
                number: '0002',
                sort: '人工借还点',
                createTime: 1508144754229,
                valid:{
                    mark : 'valid',
                    id:2,
                    switch:true
                },
                inviter:'黄琬晴',
                cash:{
                    mark:'cash',
                    id:2,
                    switch:false
                },
                remark:'黄琬晴'
            }]
        }],
            columns:[{
                title: '名称',
                dataIndex: 'name',
                key: 'name',
                width:'15%'
            }, {
                title: '编号',
                dataIndex: 'number',
                key: 'number',
            },
                {
                title: '分类',
                dataIndex: 'sort',
                key: 'sort',
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                key: 'createTime',
                render: (text,row,index) => {
                    return {
                        children: moment(text.createTime).format('YYYY-MM-DD')
                    }
                }

            },
            {
                title: '有效',
                dataIndex: 'valid',
                key: 'valid',
                render: (text, row, index)=> {
                    return {
                        children: <Switch size="small" defaultChecked={text.switch} onChange={this.buttonchange.bind(this, text.mark, text.id)} />
                    }
                }
            },
            {
                title: '受邀人',
                dataIndex: 'inviter',
                key: 'inviter'
            },
            {
                title: '是否可提现',
                dataIndex: 'cash',
                key: 'cash',
                render: (text, row, index)=> {
                    return {
                        children: <Switch size="small" defaultChecked={text.switch} onChange={this.buttonchange.bind(this, text.mark, text.id)} />
                    }
                }

            },
            {
                title: '备注',
                dataIndex: 'remark',
                key: 'remark'
            }]
        };
    };
    buttonchange(obj,mark,id){
        console.log(mark);
        console.log(id);
    };
    handleSubmit(arg1,arg2){
        arg1.nativeEvent.preventDefault();
        console.log(arg1);
        console.log(arg2);
        /*console.log(e.target.id);
        const data = this.props.form.getFieldsValue();
        e.preventDefault();
        fetch('./common.js', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }).then(function(response) {
            console.log(response);
        }, function(error) {
            console.log(error.statusText);
        })*/
    };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const { visible, loading } = this.state;
         return (
            <div>
                <div className="loading"  style={{display:'none'}} ref="loading">
                    <Spin size="large"/>
                </div>
                <Modal
                    visible={visible}
                    width="700px"
                    title="新增机构"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                    <Button key="back" size="large" onClick={this.handleCancel}>返回</Button>,
                    <Button key="submit" type="primary" size="large" loading={loading} onClick={this.handleOk}>
                      提交
                    </Button>
                  ]}
                        >
                    <Form>
                        <Row>
                            <Col span={8}>
                                <Form layout="inline" onsubmit={this.handleSubmit.bind(this,'121')}>
                                    <FormItem label="Username">
                                        {this.state.modalForm.username}
                                        <br/>
                                        <input type="text" defaultValue={this.state.modalForm.username}/>
                                    </FormItem>
                                </Form>
                            </Col>
                            <Col span={8}>col-12</Col>
                            <Col span={8}>col-12</Col>
                        </Row>
                    </Form>

                </Modal>
                <Form layout="inline" onSubmit={this.handleSubmit} style={{marginBottom:20}} id="aaa">
                    <FormItem>
                        {getFieldDecorator('key')(
                            <Input type="text" placeholder="请输入关键字"/>
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
                    <FormItem style={{float:'right'}}>
                        <Button
                            type="primary"
                            onClick={this.showModal.bind(this)}
                            icon="plus"
                        >
                            新建机构
                        </Button>
                    </FormItem>
                </Form>
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>
        )
    }
}
const Partner = Form.create()(Partner1);
export default Partner;