import React, { Component } from 'react';
import "./RollDice.css";
import Die from "./Die";

class RollDice extends React.Component{
    static defaultProps = {
        array: ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props){
        super(props);
        this.state = {
            num1: "two",
            num2: "four",
            shake: false,
            disable: false
        };
        this.changeNum = this.changeNum.bind(this);
        // this.multipleFunc = this.multipleFunc.bind(this);
        
    }
    changeNum(e){
        let rand1 = Math.floor(Math.random()*6)+1;
        let rand2 = Math.floor(Math.random()*6)+1;
        this.setState({disable: true});
        this.setState({shake: true});
        setTimeout(()=>{
            this.setState({disable: false});
            this.setState({shake: false});
            this.setState({num1: this.props.array[rand1]})
            this.setState({num2: this.props.array[rand2]})
        }, 1500)
    }
    
    render(){
        let dis = this.state.disable;
        return(
            <div className="RollDice">
                <div className="RollDice-Die">
                    <Die num={this.state.num1} shake={this.state.shake}/>
                    <Die num={this.state.num2} shake={this.state.shake}/>
                </div>
                {dis? <button disabled onClick={this.changeNum} 
                        className="RollDice-Button">
                    {dis?"Rolling...":"Roll Dice!"}
                </button>
                :<button onClick={this.changeNum} 
                        className="RollDice-Button">
                    {dis?"Rolling...":"Roll Dice!"}
                </button>}
                
            </div>
        )
    }
}

export default RollDice;