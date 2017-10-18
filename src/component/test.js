/**
 * Created by chenzhongying on 2017/10/17.
 */
import React from 'react';
class test extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.match.params);
        return (
            <div>你好</div>
        )
    }
}
export default test;