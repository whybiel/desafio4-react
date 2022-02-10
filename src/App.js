import React, {Component} from "react";
import "./App.css"

export default class Arrow extends Component{
  x = (number1) =>{
    return(number1*2)
  }
  render(){
    return(
      <div className="container">
        <h2 className="text">Olá meu nome é Gabriel e vou fazer {this.x(9)} anos em Março!</h2>
      </div>
    )
  }
}