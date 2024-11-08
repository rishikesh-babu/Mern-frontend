import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../../Components/Cards/Cards';
import { Navigate, useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../config/axiosConfig';

function Home() {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        // debugger
        const token = localStorage.getItem('token')
        console.log("Token", token)
        // AxiosInstance.get("http://localhost:8080/users/getData", { headers: { "Authorization": 'Bearer' + " " + token } })
        // axios.get("http://localhost:8080/users/getData", { headers: { "Authorization": 'Bearer' + " " + token } })
        // AxiosInstance.get(`/users/getData`, { headers: { "Authorization": 'Bearer' + " " + token } })
        AxiosInstance.get(`/users/getData`)
            .then((res) => {
                console.log(process.env.REACT_APP_API_BASE_URL)
                setData(res.data)
            })
            .catch((err) => {
                console.log("Error from getData: ", err);
                // if (err.status == 401) {
                //      localStorage.removeItem('token')
                //      localStorage.clear()
                //     navigate('/login')
                // }
            })
    }
    return (
        <div className='d-flex flex-wrap m-3 gap-4 justify-content-center align-items-center'>
            {
                data.map((item) => <Cards book={item} key={item._id} />)
            }
        </div>
    )
}
export default Home