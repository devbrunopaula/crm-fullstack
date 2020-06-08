import React,{useState} from 'react'
import axios from 'axios'
function Login() {

    const [loginData, setLoginData] = useState([])
    const storedJwt = localStorage.getItem('token');
    function getToken(){
        axios({
            method: 'post',
            url: 'http://127.0.0.1:3333/login',
            
            data: {
                "password":"123456",
                "email":"brunopaula@dryserv.com"
            }
          })
          .then( data => {
            localStorage.setItem('token', data.data.token);
            setLoginData(data)
          })
     }
     console.log(loginData)
    return (
        <div>
            <h1>Login</h1>

          <button onClick={ ()=> getToken() }>LOGIN</button>
        </div>
    )
}

export default Login
