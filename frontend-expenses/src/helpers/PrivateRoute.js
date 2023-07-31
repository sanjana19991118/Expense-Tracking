// hoc - higher order Componenet 
// a component that takes another component as a value or return as component is called as a higher order component
import { Redirect,Route } from 'react-router-dom'
const PrivateRoute = ({ component: Component, ...rest}) => {
   // property called as component 
   // then take the rest of the parameters that  i have passed 
   // then render that component some where
   return (
      <Route 
         {...rest} // except thte component parameters others parameters are passed  , like to , exact, path , component etc
         // componenet (b) is taken and made a independent variable , what we are leftout with  , path and exact are a and c 
         render = {(props) => { // inline component
            return localStorage.getItem('token') /* if its true user logged*/ ? (
                <Component {...props} /> /*other properties in ...props like match , history */ 
            ) : (
              <Redirect 
                to = {{
                    pathname: '/login'
                }}
              />
            )
         }} 
       />
   )
}

export default PrivateRoute