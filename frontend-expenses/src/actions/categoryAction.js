import axios from 'axios'
export const startCategoryUser = (formData) => {
    // console.log('formData-c', formData)
    return (dispatch) => {
        axios.post("http://localhost:3088/api/category", formData, {
            headers: {
                'authorization' : localStorage.getItem("token")
            }
        })
        .then((response) => {
            const result = response.data
            // console.log("result", result)
            dispatch(setCategory(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
     
}


const setCategory = (categories) => {
    return {
        type: "SET_CATEGORY",
        payload: categories
    }
}


export const startListCategory = () => {
    return (dispatch) => {
        axios.get("http://localhost:3088/api/category",
        {
            headers: {
                'authorization' : localStorage.getItem("token")
            }
        })
        .then((response) => {
            const category = response.data
            // console.log("category", category)
            dispatch(setCategoryList(category))
        })
        .catch((err) => {
              alert(err.message)
        })
    }
}



const setCategoryList = (categorylist) => {
   return {
       type: "SET_CATEGORY_LIST",
       payload: categorylist
   }
}

export const startRemoveList = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3088/api/category/${id}`, {
            headers: {
                'authorization' :localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data
            console.log("delete", result)
            dispatch(removeItem(result._id))
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

const removeItem = (remove) => {
   return {
       type: "REMOVE_ITEM",
       payload: remove
   }
}