import React from 'react'
// import { useState } from 'react';
// import {  Button , Modal } from 'antd';
// import Button from "antd-button-color";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaIdCard , FaRegHandPointDown,  FaRegIdBadge  } from "react-icons/fa";
import amma from '../Images/amma.jpg'
// import profilegirl from '../Profile/profilegirl.jpg'
import '../Css/profile.css'
import AddProfile from './AddProfile';
import ExpenseArchieve from '../Expenses/ExpenseArchieve'

const ProfileDetails = () => {
       const profile = useSelector((state) => {
            return state.profile.profile
       })
      
        return (
            <div>
                {/* {
                    Object.keys(profile).length > 0 && */}
                     <div>
                        <div className="card shadow profile-card card-body border-warning d-flex flex-column align-items-center" >
                        <div className="card-body">
                            <h5 className="card-title text-success" >Profile Details</h5>
                            <p className="card-text text-start text-muted" >Find Profile information here <FaIdCard className="text-success"  /> <FaRegHandPointDown className="text-success"/> </p>
                            
                           
                        </div>
                            
                       
                        {/* <hr className="border border-warning" style={{padding: "0px"}}/> */}
                        <ul className="list-group list-group-flush" style={{marginLeft : "200px", width: "400px", marginTop : "-15px"}}>
                            <li className="list-group-item"><label>Name : </label> Krishna Raj{profile.name} </li>
                            <li className="list-group-item"><label>Age : </label> 25 {profile.age} </li>
                            <li className="list-group-item"><label>Occupation : </label> Software Developer {profile.occupation} </li>
                            <li className="list-group-item"><label>Bio : </label> Working on Tech { profile.bio }</li>
                            {
                                profile.avatar ? (
                                      <img className="card-img border-warning rounded-circle img-thumbnail" src ={`http://localhost:3080/${profile.avatar}`} style={{ width: '150px', height : '150px',  marginLeft : "-700px"}}  alt="no img"/>
                                ) : (
                                    <img className="card-img border-warning rounded-circle img-thumbnail"  src ={amma} style={{ width: '150px', height : '150px',  marginLeft : "-200px", marginTop: '-150px'}} alt="" />
                                )
                            }

                            <li className="list-group-item">
                                <div className="mb-3">
                                    <label style={{ padding: '20px'}} for="exampleFormControlFile1"> Profile Image Upload <FaRegIdBadge style={{   marginLeft : '10px', color : "#2d8659"}}/></label>
                                    <input className="form-control" type="file" id="formFileMultiple" />
                                </div>
                              
                            </li>
                        </ul>

                        <button className="btn btn-warning text-muted" style={{ fontWeight : "bold"  , marginLeft: "500px", marginTop : "5px", padding : "10px"}}> Add Profile <AddProfile/> </button>
                        <div className="card-body">
                            <>
                            <ExpenseArchieve />
                            <Link  to="/expense" className="card-link" style={{  fontWeight: 'bold', marginLeft: '-200px' , marginTop : '-40px',  textDecoration: 'none', color : "#2d8659" }}>Expense Details</Link>
                            </>
                        </div>
                        </div>

                        
                       
                            
                            {/* <div>  
                                <FaFileInvoice style={{marginLeft : '180px', color : "#2d8659"}}/>  Complete Invoice Upload <FaUpload  style={{ marginLeft : '250px', color : "#2d8659"}}/> 
                            </div> */}
                        {/* </div> */}
                        <br/>
                    </div>
                {/* } */}
                   
                </div>

   )
}

export default ProfileDetails