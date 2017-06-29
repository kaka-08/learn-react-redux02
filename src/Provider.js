import { Component } from "react";
import { PropTypes } from "prop-types";


//Provider组件不作任何事情，只是简单的把子组件渲染出来
class Provider extends Component{

   getChildContext(){  
      return {
      	store:this.props.store
      }
   }

   render(){
   	 return this.props.children;
   }

}

// childContextTypes must be defined in order to use getChildContext().
Provider.childContextTypes={
	store:PropTypes.object
}


Provider.propTypes = {
  store: PropTypes.object.isRequired
}

export default Provider;