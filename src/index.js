import React,{ Component } from "react";
import store from "./Store";
import ReactDOM from "react-dom";
import Provider from "./Provider"; 
import TestProvider from "./containers/test-provider";


export default class Root extends Component{
   render(){
     return(
     	 <Provider store={store}>
            <TestProvider />
     	 </Provider>
     	)
   }
}

ReactDOM.render(
    <Root />,
    document.getElementById('container')
)