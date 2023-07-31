import React, { useState}  from 'react' 
// import axios from 'axios'
import { startLoginUser } from '../actions/userAction'
import { useDispatch } from 'react-redux'
import '../components/Css/Homedesign.css'
import './Css/LoginandRegister.css'


const Login = (props) => {
    
    const[email , setEmail] = useState('')
    const[password, setPassword] = useState('')


    const dispatch = useDispatch()
    //  useEffect(() => {
    //    dispatch(startLoginUser())
    //  },[dispatch])
   
    const handleSubmit = (e) => {
         e.preventDefault()
         const formData = {
            email: email,
            password: password
         }
         console.log(formData)
         dispatch(startLoginUser(formData, props.history.push))
         
        //  dispatch(startLoginUser)
        // if validation pass 
    //     axios.post('http://localhost:3080/users/login', formData)
    //         .then((response) => {
    //             const result = response.data
    //             if(result.hasOwnProperty('errors')) {
    //                  alert(result.errors)
    //             }
    //             else {
    //                 alert('successfully logged in')
    //                 localStorage.setItem('token' , result.token)
    //                 props.history.push('/')
    //                 props.handleAuth()
    //             }

    //             console.log(response.data)
    //         })
    //         .catch((err) => {
    //            console.log(err.message)
    //         })
    // }

   
     }

  const handleChange = (e) => {
        if(e.target.name === 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    return ( 
    <div className='back-ground'>
            <div className='center-register'>
            <div className='card shadow border-warning card-body d-flex flex-column align-items-center'>
            <h3 className='card-title text-success '> Login</h3>
            <form onSubmit={handleSubmit}>
                {/* <label className="form-label">Email</label> */}
                <input type="text"
                       className="form-control"
                       placeholder="enter email"
                       value={email}
                       onChange={handleChange}
                       name="email"
                        /> <br />
                {/* <label>Password</label> */}
                <input 
                        type="password"
                        className="form-control"
                        placeholder="enter password"
                        value={password}
                        onChange={handleChange}
                        name="password"
                    /> <br/>
                <input type="submit" className="btn btn-success"/>
            </form>
            </div>
        </div>
    </div>
    )
}

export default Login