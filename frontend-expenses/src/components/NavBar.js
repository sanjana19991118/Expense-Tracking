import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { FaRupeeSign , FaWallet, FaRegHandPointDown, FaHome, FaRegRegistered, FaSignInAlt, FaRegMoneyBillAlt, FaTools, FaUserCircle, FaTrashRestore,   FaUserAlt } from "react-icons/fa";
// , FaTrashAlt , FaFileInvoiceDollar
import PrivateRoute from '../helpers/PrivateRoute'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Account from './Account/Account'
import Settings from './Settings/Settings'
// import Profile from './Profile/Profile'
import ProfileInfo from './Profile/ProfileInfo';
import Expense from './Expenses/Expense'



const NavBar = (props) => {
    //  const { userLoggedIn, handleAuth } = props
     const token = localStorage.getItem('token')

     let circleClasses = "inline-block p-7 rounded-full w-20 mx-auto";
     let iconStyles = { color: "#90EE90", fontSize: "1.5em", margin: "auto" };
     return (
        <div>
                <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href=" "> 
                      <span style={{ background: ""}} className={circleClasses}>
                      <FaWallet style={iconStyles} /> <h3 style={{color: "#FFD700"}}>Expenses</h3>
                      </span>
                     </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header ">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"> 
                            <div style={{ color: "white" }} className={circleClasses}>
                            <FaRupeeSign style={iconStyles} /> 
                             Find Expense Info Here  <FaRegHandPointDown  style={iconStyles} />
                            </div> </h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {
               token ? 
                (   
                    <div>
                        <li className="nav-item">
                            <Link to="/settings"  style={{ color: "#00FA9A" , textDecoration: 'none'  }} className="nav-link active" aria-current="page" href=" " ><FaTools /> Settings</Link>
                        </li>
                         <li className="nav-item">
                           <Link to="/account"  style={{ color: "#00FA9A" , textDecoration: 'none' }} className="nav-link active" aria-current="page" href=" " ><FaUserAlt /> Account</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/expense"  style={{ color: "#00FA9A" , textDecoration: 'none' }} className="nav-link active" aria-current="page" href=" " ><FaRegMoneyBillAlt /> Expenses</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" onClick={
                                 () => {
                                    localStorage.removeItem("token")
                                    alert('logged out successfully')
                                    props.history.push("/register")
                                 }
                            } className="nav-link" href=" " style={{ color: "#00FA9A" }} > Logout </Link>
                        </li>
                         <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "#00FA9A" }} >
                             Account 
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                    <li className="nav-item">
                                      <Link to="/account"  style={{ color: "#00FA9A" , textDecoration: 'none'  }}  className="nav-link active" aria-current="page" href=" " ><FaUserAlt /> Account Info </Link>
                                    </li>
                                    {/* <li><Link to="/profile"  style={{ color: "#00FA9A" , textDecoration: 'none'}} ><FaUserCircle /> Profile Info</Link></li> */}
                                    <li><Link to="/profileInfo"  style={{ color: "#00FA9A" , textDecoration: 'none'}} ><FaUserCircle /> Profile Info</Link></li>
                                    <li><Link  to="/profile" style={{ color: "#00FA9A" , textDecoration: 'none'}} ><FaTrashRestore /> Undo Expenses</Link></li>
                                    {/* <li><Link  to="/profile" style={{ color: "#00FA9A" , textDecoration: 'none'}}><FaFileInvoiceDollar /> Upload Complete Invoice</Link></li> */}
                                    {/* <li><Link  to="/profile" style={{ color: "#00FA9A" , textDecoration: 'none'}}><FaTrashAlt /> Delete Account  </Link></li> */}
                            </ul> 
                        </li>
                   </div>
                       
                ): (
                    <div>
                        <li className="nav-item">
                            <Link to="/" style={{ color: "#00FA9A", textDecoration: 'none' }} ><FaHome style={iconStyles } /> Home</Link>
                        </li>
                        <li className="nav-item">
                           <Link to="/register" style={{ color: "#00FA9A",textDecoration: 'none' }} > <FaRegRegistered  style={iconStyles } /> Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" style={{ color: "#00FA9A" , textDecoration: 'none' }} ><FaSignInAlt style={iconStyles } /> Login</Link>
                            {/* <a className="nav-link active" aria-current="page" href=" " style={{ color: "#00FA9A" }} ><Link to="/login" style={{ color: "#00FA9A" , textDecoration: 'none' }} ><FaSignInAlt style={iconStyles } /> Login</Link></a> */}
                        </li>
                    </div>
                 
                )
            }
                        </ul>
                        
                    </div>
                    </div>
                </div>
                </nav>
                <Route path="/" component={Home} exact={true} />
                <Route path="/register" component={Register} />
                <Route path="/login" render={(props) => {
                            return <Login {...props}
                                       token={token}
                                        />
                }} />
                 <PrivateRoute  path="/account" component={Account} />
                 <PrivateRoute path="/expense" component={Expense} />
                 <PrivateRoute path="/settings" component={Settings} />
                 {/* <PrivateRoute path="/profile" component={Profile} /> */}
                 <PrivateRoute path="/profileInfo" component={ProfileInfo} />
        </div>
     )
}

export default withRouter(NavBar) 