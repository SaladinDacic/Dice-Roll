import React, {Component} from "react";
import "./Die.css"

class Die extends React.Component{
    static defaultProps = {
        num: "three",
        shake: false
    }
    render(){
        let num = this.props.num
        return(
            <div>
                <i className={`fas fa-dice-${num} Die-i ${this.props.shake?"Die-shake":""}`}></i>
            </div>
        )
    }
}

export default Die;