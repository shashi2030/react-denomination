import React, { Component } from 'react';
import AtmMoneyResults from '../Components/AtmMoneyResults';
require('./css/Dispencer.css');

const notes = [2000,500,200,100,50,20,10,5,2,1];

class Dispencer extends Component{
    constructor(){
        super();
        this.state={
            enteredAmount:null,
            result:null,
            totalNotes:null
        }
    }
    handleChange = (e) =>{
        this.setState({
            enteredAmount:e.target.value
        })
    }
    getMoney = () => {        
        let enteredAmount = this.state.enteredAmount;

        if(enteredAmount > 0){
            let result = {};
            let totalNotes = 0;
    
            for(let i = 0; i < notes.length; i++){
                let noteCount = Math.floor(enteredAmount / notes[i]);
                result[notes[i]] = noteCount;
                enteredAmount = enteredAmount % notes[i];
                totalNotes += noteCount;
            }
    
            this.setState({
                result:result,
                totalNotes:totalNotes
            })
        }       
    }
    render(){
        return(
            <div className="container">
                <div className="get-money-form container-box">
                        <div className="row">
                            <label>Enter the Amount</label>
                            <input type="number" name="amount" onChange={this.handleChange} />
                        </div>
                        <button className="btn" onClick={this.getMoney}>Get Rupees </button>
                </div>
                {
                    this.state.totalNotes && <div className="results container-box">
                    <h3>Following Result</h3>
                    <AtmMoneyResults data = {this.state.result} />
                    <h3 className="result-heading"><span>Total Notes:</span> <span>{this.state.totalNotes}</span></h3>
                </div>
                }
                               
            </div>
        )
    }
}
export default Dispencer;