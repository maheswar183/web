// App.js
import React, { Component } from 'react';
import './App.css';
import Select from 'react-select';


class App extends Component {

 constructor()
 {
  super()
  this.state =
  {
     op:[{label:'12',value:"er"}],
      
      op2:[],
  }
 }

  cha=(event)=>
  {
    
   if(event.value==='er')
   {
      this.setState({op2:[{label:'12rhk',value:"er"}]})
      console.log(this.state.op2);
   }

  }
  
 
  render() {
   

    return (<div>
       <Select options={this.state.op} onChange={this.cha}/>
       <Select options={this.state.op2}/></div>
    );
  }

}

export default App;