import React, {SyntheticEvent, useState} from 'react';
import { Link } from 'react-router-dom';
import "./register.css";
import { useEffect } from 'react';
import Logo from "../../assests/images/Icon.png";
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const submit = () => {
      const data = {
        name: name,
        email: email,
        password: password
      }
  
      console.log(data)
  
      axios.post("http://localhost:8000/api/register", data).then(() => {
        console.log("success")
      }).catch(err => {
        console.log(err)
      })
      
      alert("Register Berhasil");
    setRedirect(true);
  }
  if (redirect) {
    window.location = "/login"
}
  
  useEffect(() => {
      console.log(name)
    }, [name])
    return (
        <div className="box-form">
            <div className="left">
                <div className="overlay">  
                <img src={Logo} alt="" className="w-10" />
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h1 style={{color:'#FFFFFF'}}> Yuk Tahsin </h1>
                </div>
            </div>
                <div className="right">
                <br/><br/>
                <form onSubmit={submit}>
                <h5>Register</h5>
                <br/><br/>
                <p>Lakukan registrasi sebelum Log In!</p>
                <br/><br/>
                <div className="inputs">
                    <input placeholder="Name" required onChange={e => setName(e.target.value)}/>
                    <br/>
                    <input type="email" placeholder="Email address" required onChange={e => setEmail(e.target.value)}/>
                    <br/>
                    <input type="password" placeholder="password"  required onChange={e => setPassword(e.target.value)}/>
                </div>   
                    <br/><br/> <br/><br/>
                    <button type="submit"><Link to="/login">Register</Link></button>
                    </form>
                    <br/><br/><br/>
            </div>
        </div>

    );
};

export default Register;