import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


const ExpenseDetails = (props) => {
    const { idEdit, formSub } = props
    console.log('id', idEdit)
    const expenseDetails = useSelector((state) => {
        return state.expense.expense
    }) 
    console.log(expenseDetails)

    
    const categoryDetails = useSelector((state) => {
        
         return state.category.category
    })
     console.log('cd', categoryDetails)

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    //  const [occupation, setOccupation] = useState('')
    const [categoryId, setCategoryId] = useState('')
    // const [bio, setBio] = useState('')
    const [date, setDate] = useState('')
    const [_id, setId] = useState('')

   

    const listExpense = expenseDetails.filter((ele) => {
         return ele._id === idEdit
    })

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleAmountChange = (e) => {
         setAmount(e.target.value)
    }

    const handleIdChange = (e) => {
        setCategoryId(e.target.value)
    }
    //  const handleOccupationChange = (e) => {
    //      setOccupation(e.target.value)
    // }

    // const handleBioChange = (e) => {
    //     setBio(e.target.value)
    // }

    // const handleDateChange = (e) => {
    //     setDate(e.target.value)
    // }


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: name,
            amount: amount, 
            categoryId: categoryId,
            date: date

        }
        formSub(formData,idEdit)
        console.log("d", formData)
    }


    useEffect(() => {
        setAmount('')
        setCategoryId('')
        setName('')
        setDate('')
    },[expenseDetails])

    useEffect(() => {
        if(idEdit) {
            const element = listExpense.find((ele) => {
                return ele
            })
            setAmount(element.amount)
            setCategoryId(element.categoryId)
            setName(element.name)
            setDate(element.date)
            setId(element._id)

        }
    },[idEdit])

    const handleDatePickChange = (e) => {
        setDate(e.target.value)
    }
    
    return (
        <div>
          <form onSubmit={handleSubmit}>
               <br/>
               <br/>
               <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text text-muted" id="inputGroup-sizing-sm"><label>Name</label></span>
                </div>
                   <input type="text"  value={name} onChange={handleNameChange} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
              {/* <input type="text" /> */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text text-muted">$ Amount</span>
                    {/* <span className="input-group-text text-muted">Age</span> */}
                </div>
                <input type="text" value={amount} onChange={handleAmountChange} className="form-control" aria-label="Amount (to the nearest dollar)" />
                {/* <input type="text"  /> */}
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text text-muted"> Date </span>
                    {/* <span className="input-group-text text-muted"> Occupation </span> */}
                    
                </div>
                {/* <input type="text" value=""  onChange={handleOccupationChange} className="form-control" aria-label="Amount (to the nearest dollar)" /> */}
              <input type="date"  className ="form-control" value={date} onChange={handleDatePickChange} />
              </div>
              <br />
             
              <select className="form-select form-control" aria-label="Default select example" value={categoryId} onChange={handleIdChange}>
                <option  value=" ">Select Category</option>
                    {
                                    categoryDetails.map((ele) => {
                                         console.log('cccc', ele.category)
                                        return <option key={ele._id} value={ele._id} className="text-muted">{ele.category}</option>
                                    })
                                   
                    }
                </select>
                <br/>
              <input  name='update' type="submit" className="btn btn-success"/>
          </form>
        </div>
    )
}

export default ExpenseDetails

