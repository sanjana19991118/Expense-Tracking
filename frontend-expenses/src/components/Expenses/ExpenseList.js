import React, {useState , useEffect} from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
// import Search from './Search'
// import Pagination from './Pagination'
// import ExpenseEdit  from './ExpenseEdit'
// import ChartAnother from '../../Charts/ChartAnother'
import { Modal }  from 'antd'
import { FaInfoCircle, FaCloudUploadAlt, FaTrash } from "react-icons/fa"
import {  FaPencilAlt } from "react-icons/fa"
import { useSelector, useDispatch } from 'react-redux'
import { startGetExpense, startExpenseUpdate, startExpenseSoftDelete } from '../../actions/expenseAction'
import '../Css/expenses.css'
import ExpenseDetails from './ExpenseDetails'


const ExpenseList = (props) => {
  
  const [modal, setModal] = useState(false)
  // const [number, setNumber] = useState(3)
  // const [value, setValue] = useState('')
  const [idEdit , setIdEdit] = useState('')
  // const [file, setFile] = useState({})
  const expenses = useSelector((state) => {
        // console.log('es', state.expense.expense)
        return state.expense.expense 
  })
   const category = useSelector((state) => {
        // console.log('es', state.expense.expense)
        return state.category.category
  })
    // // console.log(expenses)
    //   console.log('cat', category)
    // const [expense, setExpense] = useState({})
    const dispatch = useDispatch()

    // const removeList = (id) => {
    //    dispatch(startRemoveExpense(id))
    // }

    const removeDataSoft = (id) => {
       dispatch(startExpenseSoftDelete(id))
    }
     useEffect(() => {
       dispatch(startGetExpense())
     },[dispatch])

  

     const showModal = (_id) => {
        setModal(!modal)
        setIdEdit(_id)
     }
     const handleOk = () => {
        setModal(false)
     }

     const handleCancel = () => {
        setModal(false)
     }

     const formSub = (formData, idEdit) => {
        dispatch(startExpenseUpdate(formData, idEdit))
        showModal()
}

// const handleInvoiceSubmit = (e) => {
//     e.preventDefaut()
//     const formData = new FormData()
//     formData.append("invoice", file)
//     dispatch(startExpenseUpdateInvoice(formData,idEdit))
// }


  // const handleSliceChange = () => {
  //    setNumber(number + 1)
  // }

  //  const handleValueChange = (e) => {
  //     setValue(e.target.value)
  //  }

  //  const searchValue = () => {
  //     return expenses.filter(ele => ele.name.toLowerCase().includes(value))
  //  }

  //  const sliced = searchValue().slice(0, number)

    return (
        <div>
            {
                modal ? <div>
                    <Modal 
                      visible={modal}
                      cancelButtonProps={{ style: { border: "0.5px solid red" , color : "red"}}}
                      okButtonProps={{ style: { backgroundColor: "#2d8659" } }} 
                      onOk={handleOk}
                      onCancel={handleCancel} 
                      >
                        <div>
                             <ExpenseDetails idEdit={idEdit} formSub={formSub} />
                        </div>
                      
                      <div>
                          <button onClick={showModal}  className="btn btn-outline-danger" style={{ marginLeft : "100px", display: "inline", position : 'absolute'}}>cancel</button>
                      </div>
                      
                    </Modal>
                </div>
                :  <div className="table-list">
                <table className="table table-bordered table-striped table-hover table-design" border=''  >
                <thead className="">
                   <tr className="table-active text-muted">
                    {/* <th scope="col">SL No</th> */}
                    <th scope="col">Category</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Expense Date</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody >

                    {/* posts.filter((ele) => {
                                 return ele.title.toLowerCase().includes(search) */}
                                

{/* 
                        {
                              expenses.map((elements) => {
                                const categoryName = category.filter((category) => {
                                  return elements.categoryId === category._id
                                })

                                  const catName = categoryName.map((ele) => {
                                      return ele.name
                                  })
                                  
                              })
                          } */}
                    
                        {
                            expenses.map((exp) => {

                              const categoryName = category.filter((category) => {
                                  return exp.categoryId === category._id
                                })
                                // console.log('ccc', categoryName)

                                  const catName = categoryName.map((ele) => {
                                      return ele.category
                                  })
                                // console.log('expp', exp)
                                // console.log(i)
                                 return <tr key={exp._id} className="table-success text-muted">
                                    {/* <th scope="row">{i}</th> */}
                                    <td>{catName} 
                                      <button type="button" className="btn btn-outline-warning btn-circle border border-warning text-light rounded-lg" data-toggle="tooltip" data-placement="right" style={{ width : '10px', height : '25px', borderRadius: '50%'}} title={exp.description}>
                                          <FaInfoCircle style={{ marginLeft : '-8px', marginTop : '-18px', color : "#2d8659"}} />
                                      </button>
                                    </td>
                                    <td>{exp.name}</td>
                                    <td>{exp.amount}</td>
                                    <td>{exp.createdAt}</td> 
                                    <td>
                                           <button  className="btn btn-outline-primary btn-circle rounded-lg" >
                                              <FaPencilAlt  onClick={() => { showModal(exp._id)} }/> 
                                           </button>
                                           
                                          {/* <ExpenseEdit   /> */} 
                                    </td>
                                    {/* <td><button type="button" className="btn btn-outline-success"><i className='fas fa-trash-restore-alt'></i></button></td> */}
                                    <td><button type="button" className="btn btn-outline-success"><FaCloudUploadAlt/></button></td>
                                    <td><button type="button" className="btn btn-outline-danger" onClick={() => {
                                        Swal.fire({
                                          title: 'Are your sure?',
                                          text: "You won't be able to revert this!",
                                          icon:"warning",
                                          showCancelButton: true,
                                          confirmButtonColor: "#3085d6",
                                          confirmButtonText: 'Yes, delete it!'
                                        }).then((result) => {
                                            if(result.isConfirmed) {
                                                removeDataSoft(exp._id)
                                            }
                                        })
                                    }}><FaTrash/></button></td>
                                 </tr>
                            })
                        }
                </tbody>
                </table>
            </div>
    }            
            </div>       
    )
}

export default ExpenseList