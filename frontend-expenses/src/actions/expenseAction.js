import axios from 'axios'

export const startGetExpense = () => {
    // console.log('formData-c', formData)
    return (dispatch) => {
        axios.get("http://localhost:3088/api/expense", {
            headers: {
                'authorization' : localStorage.getItem("token")
            }
        })
        .then((response) => {
            const result = response.data
            console.log("result", result)
            dispatch(setExpense(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
     
}


const setExpense = (expense) => {
    return {
        type: "GET_EXPENSE",
        payload: expense
    }
}

export const startAddExpense = (formData) => {
    return (dispatch) => {
        axios.post("http://localhost:3088/api/expense", formData , {
            headers: {
                'authorization' : localStorage.getItem("token")
            }
        })
        .then((response) => {
            const result = response.data
            console.log("result", result)
            dispatch(setAddExpense(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

const setAddExpense = (addExp) => {
    return {
        type: "ADD_EXPENSE",
        payload: addExp
    }
}


export const startExpenseUpdate = (formData,idEdit) => {
    return (dispatch) => {
        axios.put(`http://localhost:3088/api/expense/update/${idEdit}`, formData, {
            headers: {
                'authorization' : localStorage.getItem("token")
            }
        })
        .then((response) => {
            const result = response.data
            // console.log("result", result)
            dispatch(setUpdateExpense(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

const setUpdateExpense = (updateExp) => {
    return {
        type: "UPDATE_EXPENSE",
        payload: updateExp
    }
}


export const startRemoveExpense = (id) => {
    console.log(id)
    return (dispatch) => {
        axios.delete(`http://localhost:3088/api/expense/delete/${id}`, {
            headers: {
                'authorization' : localStorage.getItem("token")
            }
        })
        .then((response) => {
            const result = response.data
            // console.log("result", result)
            dispatch(setRemoveExpense(result._id))
            dispatch(removesoftExpense(result._id))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

const setRemoveExpense = (removeExp) => {
    return {
        type: "DELETE_EXPENSE",
        payload: removeExp
    }
}

const removesoftExpense = (id) => {
    return {
        type: "SOFT_EXPENSE",
        payload: id
    }
}

export const startExpenseSoftDelete = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3088/api/expense/softDelete/${id}` , {
            headers: {
                'authorization' : localStorage.getItem("token")
            }
        })
        .then((response) => {
            const result = response.data
            console.log("res", result)
            dispatch(addSoftExpense(id))   
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}


const addSoftExpense = (id) => {
    return {
         type : "EXPENSE_DELETE_SOFT",
         payload : id
    }
}

export const startsoftExpenseList = () => {
    return (dispatch) => {
      axios.get('http://localhost:3088/api/expense/softExpense', {
         headers: {
             'authentication' : localStorage.getItem("token")
         }
      })
      .then((response) => {
         const result = response.data
         console.log("soft", result)
         dispatch(softlistExpense(result))
      })
      .catch((err) => {
         console.log(err.message)
      })
    }
}


const softlistExpense = (listAll) => {
    return {
         type: "SOFT_EXPENSE_LIST",
         payload: listAll
    }
}

export const startSoftRestore = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3088/api/expense/softRestore/${id}`, {
         headers: {
            'authentication' : localStorage.getItem("token")
          }
        })
        .then((response) => {
            const result = response.data
            console.log("restore", result)
            dispatch(softRestoreExpense(id))
            dispatch(softDelete(id))
            dispatch(startGetExpense())
        })
        .catch((err) => {
             console.log(err.message)
        })
    }
}

const softRestoreExpense = (id) => {
    return {
        type: "SOFT_EXPENSE_RESTORE",
        payload: id
    }
}

const softDelete = (id) => {
    return {
        type: "EXPENSE_DATA_DELETE",
        payload : id
    }
}