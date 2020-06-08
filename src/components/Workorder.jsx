import React, {useState, useEffect} from 'react'
import axios from 'axios'



const Workorder = () => {
    
   

    const [register, setRegister] = useState([])
    const [workOrder, setWorkOrder] = useState([])


const token = localStorage.getItem('token');
useEffect( ()=>{
    getData()
   
},[])



     function registerUser(){
        axios({
            method: 'post',
            url: 'http://127.0.0.1:3333/register',
            
            data: {
                "username": "brunopaula",
                "password":"123456",
                "email":"brunopaula@dryserv.com"
            }
          })
          .then( data => {
               console.log(data.data)
            setWorkOrder(data.data)
          })
     }

     function getData(){
        axios({
            method: 'get',
            url: 'http://127.0.0.1:3333/workorder',
            headers: { Authorization: `Bearer ${token}` }
          })
          .then( data => {
               console.log(data.data)
               setWorkOrder(data.data)
              
          })
     }
    

    return(
        <div>
            <h1>Work Order</h1>
            
            <button onClick={ ()=> registerUser()}>Register</button>
    {workOrder.map( e => <h1>{e.service}</h1>)}
        </div>
    )
}

export default Workorder

