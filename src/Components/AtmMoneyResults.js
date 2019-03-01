import React, { Component } from 'react';

class AtmMoneyResults extends Component{
    render(){
        return(
            <ul>
            {
                this.props.data && Object.keys(this.props.data).map((val,index)=>{
                    return <li key={index}><span>{val} notes of Rs</span> <span>{this.props.data[val]}</span></li>                               
                })
            }                       
        </ul>
        )
    }
}

export default AtmMoneyResults;