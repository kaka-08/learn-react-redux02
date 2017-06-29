import React,{ Component } from "react";
import { createStore } from "redux";
import ReactDOM from "react-dom";



export default class Root extends Component{
   render(){

     return(
          <p>this is tag p</p>
     	)
   }
}


ReactDOM.render(
    <Root />,
    document.getElementById('container')
)