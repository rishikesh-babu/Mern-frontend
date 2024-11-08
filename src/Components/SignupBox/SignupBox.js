import React, { useEffect, useState } from 'react'
import '../LoginBox/LoginBox.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../config/axiosConfig';

function SignupBox() {
	const [signupData, setSignupData] = useState({});
	//   const dispatch = useDispatch();
	  const navigate = useNavigate(); 

	// useEffect(() => {
	// 	console.log(signupData)
	// }, [signupData])

	const handleSignUp = (event) => {
		// After validation

		AxiosInstance.post('/users/signup', signupData)
		// axios.post('http://localhost:8080/users/signup', signupData, { headers: { 'Authorization': 'sjfsaj' } })
		.then((res) => {
				navigate('/login')
			})
			.catch((err) => {
				console.log("Error", err);
			})
	};
	const handleChange = (e) => {
		setSignupData({
			...signupData,
			[e.target.name]: e.target.value
		})
	}
	return (
		<div className="login-container">
			<h2>Login</h2>
			<div className="form-group">
				<label htmlFor="fullname">Username</label>
				<input
					type="text"
					id="fullname"
					name="fullname"
					className="form-control"
					value={signupData.fullname}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="password">mob</label>
				<input
					type="number"
					name='mob'
					className="form-control"
					value={signupData.mob}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="password">email</label>
				<input
					type="email"
					name='email'
					className="form-control"
					value={signupData.email}
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
					value={signupData.password}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="password"> Confirm Password</label>
				<input
					type="password"
					name="cnfPassword"
					className="form-control"
					value={signupData.cnfPassword}
					onChange={handleChange}
					required
				/>
			</div>
			<button type="submit" className="btn-primary" onClick={handleSignUp} >
				Login
			</button>
		</div>
	);
}
export default SignupBox