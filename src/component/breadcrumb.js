/**
 * Created by chenzhongying on 2017/10/16.
 */
import React from 'react';
import {  Link, withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';


const breadcrumbNameMap = {
    '/operation':'运维系统',
    '/operation/equipment':'伞机管理',
    '/operation/organization':'机构管理',
    '/operation/borrowReturnRecord':'借还记录',
    '/seller':'商家系统',
    '/seller/storeManage':'门店管理',
    '/seller/cashRecord':'提现记录',
    '/permission':'权限系统',
    '/permission/partner':'合伙人',
    '/permission/role':'角色管理'
};

const Breadcrumblist = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        if((url === '/operation')||(url === '/seller')||(url === '/permission')) {
            return (
                <Breadcrumb.Item key={url}>
                        {breadcrumbNameMap[url]}
                </Breadcrumb.Item>
            )
        }else{
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>
                        {breadcrumbNameMap[url]}
                    </Link>
                </Breadcrumb.Item>
            );
        }

    });
    const breadcrumbItems = [(
        <Breadcrumb.Item key="home">
            <Link to="/">首页</Link>
        </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
    return (
        <Breadcrumb style={{ margin: '12px 0' }}>
            {breadcrumbItems}
        </Breadcrumb>
    );
});

export default Breadcrumblist