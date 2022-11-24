import { Component, Componeny } from "react"
import './photo.css'
 class Web extends Component{
    state={
        name:"",
        email:"",
        password:"",
        type:"password",
    }
    handleName=(e)=>{
        this.setState({name:e.target.value})
    }
    handleEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    handlePassword=(e)=>{
        this.setState({password:e.target.value})
    }
    handleClick1=(e)=>{
        this.setState({name:''})
    }
    handleClick2=(e)=>{
        this.setState({email:' '})
    }
    handleClick3=(e)=>{
        this.setState({password:' '})
    }
    handleCheckboxChange =()=>this.setState({type:this.state.type==='text'?'password':'text'})
    render(){
        console.log(this.state)
        return(
            <div className="Photo">
                <label htmlFor=".">Name:
                <input type="text" id="name"name="name"onChange={this.handleName}/><button type="button" className="btn" onClick={this.handleClick1}>x</button></label>
                <label htmlFor=".">Email:
                <input type="text" id="email"name="email"onChange={this.handleEmail}/><button type="button" className="btn" onClick={this.handleClick2}>x</button></label>
                <label htmlFor=".">Password:
                <input type={this.state.type} id="password"name="password"onChange={this.handlePassword}/><button type="button" className="btn" onClick={this.handleClick3}>x</button></label>
            Show Passwords:
            <input type="checkbox" checked={this.state.isActive} onChange={this.handleCheckboxChange}/>
            </div>
        )
    }
 }
 export default Web