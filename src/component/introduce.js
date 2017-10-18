/**
 * Created by chenzhongying on 2017/10/14.
 */
import React from 'react';

class Introduce extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props.location);
    }
    render(){
        return (
            <div>平台介绍</div>
        )
    }
}

export default Introduce;
