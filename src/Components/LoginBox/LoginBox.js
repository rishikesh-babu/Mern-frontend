import React, { useState } from 'react'
import './LoginBox.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../config/axiosConfig';

function LoginBox() {
    const [loginData, setloginData] = useState({});
    //   const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // url: "http://localhost:8080/users/login",
    const handleLogin = (event) => {
        AxiosInstance({
            url: `/users/login`,
            method: "post",
            data: loginData
        })
            .then((res) => {
                // debugger
                console.log(res.data.token)
                localStorage.setItem("token", res.data.token)
                // localStorage.setItem("Sample", "Sample Data")
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    };
    const handleChange = (e) => {
        setloginData({ ...loginData, [e.target.name]: e.target.value })
    }
    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="email">Username</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    name="password"
                    className="form-control"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn-primary" onClick={handleLogin}>Login</button>
        </div>
    );
}
export default LoginBox