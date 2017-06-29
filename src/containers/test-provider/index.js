import React,{Component} from "react";
import { PropTypes } from "prop-types";


class TestProvider extends Component{
   constructor(props, context) {
   	//这里由于provider是自己写的，所以tontext参数需要传过来
    super(...arguments);
    this.state = {
      value:this.context.store.getState()
     };
    }

   componentDidMount(){
     console.log(this.state);
   }
   render(){
   	  return (
          <div>
             this is TestProvider. for test
          </div>
         )
   }

}

//自己写的provider,要想拿到store,需要配置下面两行代码，即要配置 contextTypes
TestProvider.contextTypes = {
  store: PropTypes.object
}


export default TestProvider;