import React, {Component} from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


class UserSignUpForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            cpwd: "",
            email: "",
            phone: "",
            firstName: "",
            lastName: "",
            errForm: false
        }
    }

    handleChange = (event) => {
        let changeName = event.target.name;
        this.setState({[changeName]: event.target.value});
    }

    handleSignUp = () => {
        alert("res");
        var isVaild = true;
        this.props.argue(null);
        if(this.state.username === "" || this.state.password === "" 
        || this.state.cpwd === "" || this.state.email === "" 
        || this.state.phone === "" || this.state.firstName === ""
        || this.state.lastName === ""){
            this.props.argue("Missing the required fields");
            console.log("filed err");
            isVaild = false;
        }else if(this.state.password !== this.state.cpwd){
            this.props.argue("Password is not match");
            isVaild = false;
        }

        if(!isVaild){
            this.setState({password: "", cpwd: "" });
        }
        
    } 


    render = () => {
        return(
            <div className="signup-form-detial-row">
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder="Username"/>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password"/>
                    <input type="password" name="cpwd" onChange={this.handleChange} value={this.state.cpwd} placeholder="Confirm Passoword"/>
                    <input type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email"/>
                    <input type="tel" name="phone" onChange={this.handleChange} value={this.state.phone} placeholder="Phone Number"/>
                    <div className="input-container">
                        <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} placeholder="First Name"/>
                        <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} placeholder="Last Name"/>

                    </div>
                    <br/>
                    <Link to="index">Already have account?</Link>
                    <input type="button" onClick={this.handleSignUp} value="Sign Up"/>
            </div>
        );
    }


}

export default UserSignUpForm;