import React from "react";

class Clock extends React.Component{
    render(){
        var time = new Date();
        return  <h1>format: {this.props.format} <br></br> timezone: {this.props.timezone}<br>
                </br>time:{time.toLocaleTimeString('en-US', { hour12: this.props.format === '24' ? false : true })}</h1>;
    }
}

export default Clock;
