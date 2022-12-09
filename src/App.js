import React from 'react';
import { Component } from 'react';
import './App.css';
import Sata from "./components/sata/Sata"
import Form from "./components/form/Form"

class App extends Component {
  state = {
    data:[
      {id:1,name:"mostafa",age:25},
      {id:2,name:"salah",age:25},
      {id:3,name:"neel",age:25}
    ]
  }
  deleteItem =(id)=>{
    const items =this.state.data.filter(item=>{
      return item.id !== id;
    });
    // console.log(items.findIndex(item=>item.id===id))
    // const i =items.findIndex(item=>id===item.id)
    // items.splice(i,1)
    this.setState({
      data:items
    })
    
   }
   addItem=(i)=>{
    i.id=Math.random()
    const it=this.state.data;
    it.push(i)
    this.setState({
      data:it
    })
   }
  render(){
    return (
      <div className="App">
        <h1 className='to-do'>to do app</h1>
        <Sata  data={this.state.data} deleteItem={this.deleteItem}/>
        <Form add={this.addItem} />
      </div>
    )
  }
}
export default App;
