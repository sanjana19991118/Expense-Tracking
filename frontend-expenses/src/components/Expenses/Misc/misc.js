//  {/* {
//                                         expenses.map((exp,i) => {
//                                         // console.log('expp', exp)
//                                         // console.log(i)
//                                         return <tr key={i} className="table-success text-muted"> */}
//                                             {/* <th scope="row">{i}</th> */}
//                                             {/* <td>{exp[i].categoryId} 
//                                             <button type="button" className="btn btn-outline-warning btn-circle border border-warning text-light rounded-lg" data-toggle="tooltip" data-placement="right" style={{width : '10px', height : '25px', borderRadius: '50%'}} title={exp[i].description}>
//                                                 <FaInfoCircle style={{ marginLeft : '-8px', marginTop : '-18px', color : "#2d8659"}} />
//                                             </button>
//                                             </td>
//                                             <td>{exp[i].name}</td>
//                                             <td>{exp[i].amount}</td>
//                                             <td>{exp[i].createdAt}</td>
//                                         <td><button type="button" className="btn btn-outline-primary"><i className="fas fa-edit"></i></button></td>
//                                         <td><button type="button" className="btn btn-outline-success"><i className='fas fa-trash-restore-alt'></i></button></td>
//                                         <td><button type="button" className="btn btn-outline-danger"><i className="fas fa-trash"></i></button></td>
                                                                
//                                     </tr> */} 
//                                 {/* })
//                             }  */}


//  <form onSubmit={handlePictureSubmit}>
//                     <input type="file" placeholder="Choose your profile photo" name="file" onChange={handleChange} />
//                     <button type="secondary" htmlType="submit">
//                         upload 
//                     </button>
//                 </form>




 {/* <select value={categoryId} onchange={handleIdChange}>
                 <option value=" ">Select Category</option>
                  
                  {
                    categoryDetails.map((ele) => {
                         return <option key={ele._id} value={ele._id}>{ele.name}</option>
                    })
                  }

              </select> */}



// import React from 'react'
// import {useSelector, useDispatch}  from 'react-redux'
// import ExpenseForm from './ExpenseForm'

// const ExpenseDetails = () => {
//     const [exp,cat] = useSelector((state) => {
//          return [state.expense.expense, state.category.category]
//     })

//     return (
//         <div>
//             {
//                 exp.map((ele) => {
//                      const categoryName = cat.filter((category) => {
//                          return ele.categoryId === category._id
//                      })

//                      const catName = categoryName.map((ele) => {
//                      return ele.name
//                 })
//                    return <ExpenseForm {...ele} catName={catName} />
//                 })   
//             }
//         </div>
//     )
     
// }

// export default ExpenseDetails




//  {
//                  <div className="center-ex">
//                 {/* <div className="container center-ex"> */}
//                     <div className=" center-ex">
//                         <div className="center-ex">  
//                         <div className="search"><Search   /></div>
//                         <div className="expense-form"><ExpenseForm  /></div>
//                         <ExpenseList   />  
//                         <div><Pagination /></div>  
//                         </div> 
//                     </div> 
//                 </div>
//             }