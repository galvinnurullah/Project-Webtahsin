import React, {SyntheticEvent, useState} from 'react';
import { Link } from 'react-router-dom';
import "./login.css";
import Logo from "../../assests/images/Icon.png";
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = (e) => {
        e.preventDefault();

       axios.post('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });


        setRedirect(true);
    }

    if (redirect) {
        window.location="/login/beranda";
    }
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
                <h5>Login</h5>
                <br/><br/>
                <p>Masukan username dan password dengan benar untuk melakukan login</p>
                <br/><br/>
                <div className="inputs">
                    <input type="email" placeholder="Email address" required onChange={e => setEmail(e.target.value)}/>
                    <br/>
                    <input type="password" placeholder="password"  required onChange={e => setPassword(e.target.value)}/>
                </div>   
                    <br/><br/> <br/><br/>
                    <button><Link to="/register">Register</Link></button>
                    <button type="submit"><Link to="/login/beranda">Login</Link></button>
                    </form>
                    <br/><br/><br/>
            </div>
        </div>

    );
};

export default Login;