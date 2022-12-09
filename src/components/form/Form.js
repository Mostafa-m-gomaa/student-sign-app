import React from "react";
import { Component } from "react";
import './form.css'
 class form extends Component{
    state={
        name:" ",
        age: ''
    }
    submitHandle=(e)=>{
        e.preventDefault()
        this.props.add(this.state)
        this.setState({
            name:"",
            age:''
        })
    }
    handleChange=(e)=>{
     
        this.setState({
          [e.target.id] :e.target.value
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.submitHandle}>
                    <input type="text" placeholder="enter your name .." onChange={this.handleChange} id="name" value={this.state.name}/>
                    <input type="number" placeholder="enter your age .." onChange={this.handleChange} id="age" value={this.state.age}/>
                    <input type="submit" value="add" />
                </form>
            </div>
        )
    }
 }
 export default form ;