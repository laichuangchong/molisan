/**
 * Created by chenzhongying on 2017/10/12.
 */

import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';
import Common from './component/common';
import Login from './component/login';
import 'antd/dist/antd.css';
import './css/login.css';
require('es6-promise').polyfill();
require('isomorphic-fetch');


const login = true; //假设登陆了

class Entry extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Route path="/login" component={Login}/>
                    <Route exact path="/" render={() => (
                      login ? (
                          <Common/>
                      ) : (
                        <Redirect to="/login"/>
                      )
                    )}/>
                </div>
            </Router>
        );
    }
}

ReactDom.render(<Entry/>,document.getElementById('root'));

