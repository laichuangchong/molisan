/**
 * Created by chenzhongying on 2017/10/8.
 */
import React from 'react';
import {
    HashRouter as Router,
    Route,
    Link,
    withRouter,
    BrowserRouter
} from 'react-router-dom';
import {Layout, Menu, Icon, Spin} from 'antd';
import '../css/common.css';
import Home from './home';
import Introduce from './introduce';
import Breadcrumblist from './breadcrumb';
import Equipment from './operation/equipment';
import Organization from './operation/organization';
import BorrowReturnRecord from './operation/borrowReturnRecord';
import Cashrecord from './seller/cashRecord';
import Storemanage from './seller/storeManage';
import Partner from './permission/partner';
import Role from './permission/role';
import Test from './test';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu; //获取左侧导航组件

class Common extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            title: '首页',
            subtitle: '',
            remoteMenu: [],
            menu: {
                operation: {
                    name: '运维系统',
                    type: 'global',
                    key: 1,
                    childrenNav: {
                        equipment: {
                            path: '/operation/equipment', //伞机管理
                            key: 2,
                            component: () => Equipment,
                            name: '伞机管理',
                            exact: true
                        },
                        organization: {
                            path: '/operation/organization', //机构管理
                            key: 3,
                            component: () => Organization,
                            name: '机构管理',
                            exact: true
                        },
                        borrowReturnRecord: {
                            path: '/operation/borrowReturnRecord', //借还记录
                            key: 4,
                            component: () => BorrowReturnRecord,
                            name: '借还记录',
                            exact: true
                        }
                    }
                },
                seller: {
                    name: '商家系统',
                    type: 'android',
                    key:5,
                    childrenNav: {
                        storeManage: {
                            path: '/seller/storeManage', //门店管理
                            key: 6,
                            component: () => Storemanage,
                            name: '门店管理',
                            exact: true
                        },
                        cashRecord: {
                            path: '/seller/cashRecord', //提现记录 
                            key: 7,
                            component: () => Cashrecord,
                            name: '提现记录',
                            exact: true
                        }
                    }
                },
                permission:{
                    name:'权限系统',
                    type:'android',
                    key:8,
                    childrenNav:{
                        partner:{
                            path:'/permission/partner', //合伙人／商家管理
                            key: 9,
                            component:() => Partner,
                            name: '合伙人／商家管理',
                            exact: true

                        },
                        role:{
                            path:'/permission/role', //角色管理
                            key:10,
                            component:() => Role,
                            name: '角色管理',
                            exact: true
                        }
                    }
                }
            },
            topRoutes: [
                {
                    path: '/',
                    component: ()=> Home,
                    name: '欢迎首页',
                    exact: true
                }, {
                    path: '/introduce',
                    component: ()=> Introduce,
                    name: '平台介绍',
                    exact: true
                }
            ]
        };
    };
    componentDidMount(){
        this.setState({
            remoteMenu: [ //远程导航
                {
                    indexName: 'operation',
                    childrenNav: ['equipment','organization','borrowReturnRecord']
                },
                {
                    indexName: 'seller',
                    childrenNav: ['storeManage','cashRecord']
                },
                {
                    indexName: 'permission',
                    childrenNav: ['partner','role']
                }
            ]
        })
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        return (
            <div>
                <Router>

                    <Layout style={{ minHeight: '100vh' }}>
                        <Sider
                            collapsible
                            collapsed={this.state.collapsed}
                            onCollapse={this.onCollapse}
                        >
                            <div className="logo"/>
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                                {this.state.remoteMenu.map((route) => (
                                    <SubMenu
                                        key={this.state.menu[route.indexName].key}
                                        title={<span><Icon type={route.type} /><span>{this.state.menu[route.indexName].name}</span></span>}
                                    >
                                        {route.childrenNav.map((childRoute,index)=>(
                                            <Menu.Item key={this.state.menu[route.indexName].childrenNav[childRoute].key}>
                                                <Link to={this.state.menu[route.indexName].childrenNav[childRoute].path}
                                                      key={this.state.menu[route.indexName].childrenNav[childRoute].key}>
                                                    {this.state.menu[route.indexName].childrenNav[childRoute].name}
                                                </Link>
                                            </Menu.Item>
                                        ))}
                                    </SubMenu>
                                ))}
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header style={{ background: '#fff', padding: 0 }}>
                                <Menu
                                    mode="horizontal"
                                    defaultSelectedKeys={['2']}
                                    style={{ lineHeight: '64px' }}
                                >
                                    {this.state.topRoutes.map((route, index)=>(
                                        <Menu.Item key={index}>
                                            <Link to={route.path}>{route.name}</Link>
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            </Header>
                            <Content style={{ margin: '0 16px' }}>
                                <Breadcrumblist />
                                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                    {this.state.remoteMenu.map((route) => (
                                        route.childrenNav.map((childRoute,index)=>(
                                            <Route
                                                key={this.state.menu[route.indexName].childrenNav[childRoute].key}
                                                path={this.state.menu[route.indexName].childrenNav[childRoute].path}
                                                exact={route.exact}
                                                component={this.state.menu[route.indexName].childrenNav[childRoute].component()}
                                            />
                                        ))
                                    ))}
                                    {this.state.topRoutes.map((route, index) => (
                                        // Render more <Route>s with the same paths as
                                        // above, but different components this time.
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.component()}
                                        />
                                    ))}
                                </div>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                                Ant Design ©2016 Created by Ant UED
                            </Footer>
                        </Layout>
                    </Layout>
                </Router>
            </div>
        );
    }
};

export default Common;
