// import React, { useState } from 'react'
// import axios from 'axios'
// import './LoginandRegister.css'


// const Register = (props) => {
//      const [username, setUsername] = useState('')
//      const [email, setEmail] = useState('')
//      const [password, setPassword] = useState('')

//      const handleSubmit = (e) => {
//         e.preventDefault()
//         const formData = {
//             username: username,
//             email:email,
//             password: password
//         }

//         //  if validation pass
//         // console.log(formData)

//         axios.post('http://localhost:3080/users/register' , formData)
//            .then((response) => {
//                const result = response.data
//             //    console.log(response.data)
//             if(result.hasOwnProperty('errors')) {
//                 alert(result.message)
//             }
//             else {
//                 alert('succesfully created an account')
//                 props.history.push('/login')
//             }
//            })
//            .catch((err) => {
//                console.log(err)
//            })
//      }

//      const handleChange =(e) => {
//         if(e.target.name === 'username') {
//             setUsername(e.target.value)
//         }
//         else if(e.target.name === 'email') {
//             setEmail(e.target.value)
//         }
//         else if(e.target.name === 'password') {
//             setPassword(e.target.value)
//         }
//      }

//      return (
//         <div className="back-ground">
//         <div className="center ">
//             <div className="card shadow border card-body d-flex flex-column align-items-center">
//             <h2 className="card-title">Register</h2>
//             <form onSubmit={handleSubmit}>
//                <input type="text"
//                       className="form-control"
//                       placeholder="enter username"
//                       value={username}
//                       onChange={handleChange}
//                       name="username" />
//                       <br />
//                 <input type="text"
//                        className="form-control"
//                        placeholder='enter email'
//                        value={email}
//                        onChange={handleChange}
//                        name="email"
//                        />
//                         <br/>
//                 <input type="text"
//                        className="form-control"
//                        placeholder="enter password"
//                        value={password}
//                        onChange={handleChange}
//                        name="password"
//                        /> < br/>

//                        <input type="submit" className="btn btn-secondary" />
//                        </form>
//                     </div>
//                 </div>
//         </div>
//      )
     
    
// }

// export default Register