import axios from 'axios'

export const startBudgetUser = () => {
    return(dispatch) => {
        axios.get("http://localhost:3088/api/users/budget" , {
          headers : {
             'authorization' : localStorage.getItem("token")
          }
    })
       .then((response) => {
         const budget = response.data
         // console.log('budget', budget)
         dispatch(setBudget(budget))
       })
       .catch((err) => {
         alert(err.message)
       })
       
    }
}

const setBudget = (amount) => {
    return {
         type: "SET_BUDGET",
         payload: amount

    }
}

export const startUpdateUser = (formData) => {
   //   console.log('formdata',formData)
   //   console.log('formdata id', formData.id)
     return (dispatch) => {
      axios.put(`http://localhost:3088/api/users/update/${formData.id}`, formData , {
          headers : {
             'authorization' : localStorage.getItem("token")
          } 
        })
          .then((response) => {
             const result = response.data
             console.log('res',response.data)
             dispatch(setUpdate(result))

          })
          .catch((err) => {
               alert(err.message)
          })

     }
     
}

const setUpdate = (update) => {
   return {
       type: "SET_UPDATE",
       payload: update
   }
}
