import React ,{useState, useEffect } from 'react'
import {  Button ,  Modal } from 'antd';
// import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux'
import { startsoftExpenseList } from '../../actions/expenseAction'
// startRemoveExpense, startSoftRestore,
import { FaUserTimes,  FaTrashRestore, FaTrash} from "react-icons/fa";


const ExpenseArchieve = () => {
    

    // const [dataSoftDelete, category] = useSelector((state) => {
    //     // console.log('ss', state.expense.soft)
    //     return [state.expense.soft, state.category.category]
    // })

    

    // console.log('sss', dataSoftDelete )

    const [open, setOpen] = useState(false);

    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startsoftExpenseList())
    },[dispatch])

    // const removeDataSoft = (id) => {
    //     dispatch(startRemoveExpense(id))
    // }

    // const restoreSoftData = (id) => {
    //     dispatch(startSoftRestore(id))
    // }

    return (
      <div>
          <Button type="dashed" style={{ width : "200px", marginLeft: '30px'}} onClick={() => setOpen(true)}>
                            <label style={{  fontWeight: 'bold',   textDecoration: 'none', color : "#2d8659"  }}> Delete Expenses </label>
                            <FaUserTimes style={{marginLeft : '30px', color : "#2d8659"}}/>
          </Button>
          <Modal
                title="Deleted Expenses"
                centered
                open={open}
                okButtonProps={{ style: { backgroundColor: "#2d8659" } }} 
                cancelButtonProps={{ style: { border: "0.5px solid red" , color : "red"}}}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
                            >
                                {/* {
                                    dataSoftDelete.length > 0 &&  */}

                              <table className="table table-bordered table-striped table-hover table-design" style={{ marginLeft : "10px"}}border=''>
                                <thead className="">
                                    <tr className="table-active text-muted">
                                        {/* <th scope="col">SL No</th> */}
                                        <th scope="col">Category</th>
                                        <th scope="col">Item Name</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Expense Date</th>
                                        <th scope="col">Restore</th>
                                        <th scope="col">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Electronics</td>
                                            <td>Web camera</td>
                                            <td>1000</td>
                                            <td>2023-07-26T01:20:32.844Z</td>
                                             <td><button className="btn btn-outline-danger">
                                                <FaTrashRestore />
                                            </button></td>
                                            <td><button className="btn btn-outline-success"><FaTrash/></button></td>
                                        </tr>
                                        <tr>
                                            <td>Clothes</td>
                                            <td>palazo</td>
                                            <td>120</td>
                                            <td>2023-07-25T12:05:59.561Z</td>
                                            <td><button className="btn btn-outline-danger">
                                                <FaTrashRestore />
                                            </button></td>
                                            <td><button className="btn btn-outline-success"><FaTrash/></button></td>
                                        </tr>
                                        <tr>
                                            <td>Electronics</td>
                                            <td>Boat smart watch</td>
                                            <td>1500</td>
                                            <td>2023-05-24T05:52:10.506Z</td>
                                             <td><button className="btn btn-outline-danger">
                                                <FaTrashRestore />
                                            </button></td>
                                            <td><button className="btn btn-outline-success"><FaTrash/></button> </td>
                                        </tr>
                                    </tbody>
                            </table>
                                {/* }
                             */}
            </Modal>
      </div>
    )
}

export default ExpenseArchieve



            // <tbody>
            //                             {
            //                                 dataSoftDelete.map((expense) => {
            //                                     const catId = category.filter((ele) => {
            //                                         return ele._id === expense.categoryId
            //                                     })
            //                                     console.log("new", catId)
            //                                     const catName = catId.map((ele) => {
            //                                          return ele.category
            //                                     })

            //                                     return (
            //                                      <tr key={expense._id}>
            //                                    <td> {catName}
            //                                        <button type="button" className="btn btn-outline-warning btn-circle border border-warning text-light rounded-lg" data-toggle="tooltip" data-placement="right" style={{ width : '10px', height : '25px', borderRadius: '50%'}} title={expense.description}>
            //                                          <FaInfoCircle style={{ marginLeft : '-8px', marginTop : '-18px', color : "#2d8659"}} />
            //                                        </button>
            //                                    </td>
            //                                    <td>{expense.name}</td>
            //                                    <td>{expense.amount}</td>
            //                                    <td>{expense.date.slice(0,10)}</td>
            //                                    <td><button type="button" className="btn btn-outline-success" onClick={() => {
            //                                        removeDataSoft(expense._id)
            //                                    }}><i className='fas fa-trash-restore-alt'></i></button></td>
            //                                    <td><button type="button" className="btn btn-outline-danger" onClick={() => {
            //                                           restoreSoftData(expense._id,  dataSoftDelete)
            //                                    }}><i className="fas fa-trash"></i></button></td>
            //                                    {/* <td>{expense.invoice}</td> */}
            //                             </tr>
            //                                     )
            //                                 })
            //                             }
                                       
                                     
            //                     </tbody>

