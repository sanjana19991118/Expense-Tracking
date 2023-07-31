import axios from 'axios'

export const startSearchExpense = (search) => {
     console.log('f', search)
    return (dispatch) => {
        axios.get(`http://localhost:3088/api/expense/search?name=${search}`)
               // localhost:3058/api/menuItems/search?menuName=Oreo biscuit
          .then((response) => {
              const res = response.data
            //   console.log('r' , res)
            //   if(search.length >= 3){
                dispatch(setSearchExpense(res))
            //   }  
          })
          .catch((err) => { 
              alert(err)
          })
    }
}

const setSearchExpense = (exp) =>  {
    // console.log('e', exp)
    return {
      type: "SEARCH",
      payload: exp
    }
}
