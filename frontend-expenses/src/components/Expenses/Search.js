import React, { useState , useEffect } from 'react'
import '../Css/search.css'
import ExpenseEdit  from './ExpenseEdit'
import { useSelector, useDispatch} from 'react-redux'
import { startSearchExpense } from '../../actions/searchAction'
import { FaInfoCircle, FaCloudUploadAlt, FaTrash } from "react-icons/fa"
// import ExpenseEdit  from './ExpenseEdit'
// import { FaInfoCircle } from "react-icons/fa"
// import { useSelector, useDispatch } from 'react-redux'
// import { startSearchExpense } from '../../actions/searchAction'

const Search  = () => {
    const searchExp = useSelector((state) => {
         return state.search.search
    })
    // console.log(searchExp)

    const [search, setSearch] = useState("")

    const searchExpense = (e) => {
         setSearch(e.target.value.toLowerCase())
    }
    const dispatch = useDispatch()
    useEffect(() => {
    //   console.log('hey')
       if(search.length >= 3) {
           console.log('search', search)
           dispatch(startSearchExpense(search))
       }
    },[search, dispatch])

    // console.log(search)

    return (
        <div className="search-design" >
            <form className="form-inline d-flex justify-content-center md-form form-sm ">
            <input className="form-control form-control-sm ml-2 w-50 " type="text" placeholder="Search" aria-label="Search" onChange={searchExpense} />
            {/* <i className="fas fa-search btn btn-outline-success" aria-hidden="true"> Success </i> */}
            </form>
            <br/>
{/* 
              <table className="table table-bordered table-striped table-hover table-design" border='' >
                <thead className="">
                   <tr className="table-active text-muted">
                    {/* <th scope="col">SL No</th> */}
                    {/* <th scope="col">Category</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Expense Date</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody > */}

                    {/* posts.filter((ele) => {
                                 return ele.title.toLowerCase().includes(search) */}
                    
                        {
                            searchExp.length > 0 && searchExp.map((exp,i) => {
                                // console.log('expp', exp)
                                // console.log(i)
                                 return <tr key={i} className="table-success text-muted">
                                    {/* <th scope="row">{i}</th> */}
                                    <td>{exp[i].categoryId} 
                                      <button type="button" className="btn btn-outline-warning btn-circle border border-warning text-light rounded-lg" data-toggle="tooltip" data-placement="right" style={{width : '10px', height : '25px', borderRadius: '50%'}} title={exp[i].description}>
                                          <FaInfoCircle style={{ marginLeft : '-8px', marginTop : '-18px', color : "#2d8659"}} />
                                      </button>
                                    </td>
                                    <td>{exp[i].name}</td>
                                    <td>{exp[i].amount}</td>
                                    <td>{exp[i].createdAt}</td>
                                    <td>
                                        <div>
                                          <ExpenseEdit   />
                                        </div>
                                    </td>
                                    {/* <td><button type="button" className="btn btn-outline-success"><i className='fas fa-trash-restore-alt'></i></button></td> */}
                                    <td><button type="button" className="btn btn-outline-success"><FaCloudUploadAlt/></button></td>
                                    <td><button type="button" className="btn btn-outline-danger"><FaTrash/></button></td>
                                 </tr>
                            })
                        }

                {/* </tbody>
                </table> */}
             

             {/* Search */}

            {/* {
                     searchExp.length > 0 && searchExp.map((ele,i) => {
                        console.log('ele', ele.name)
                        //  console.log('e', ele._id)
                         return (
                            // <li key={i}>{ele.menuName}</li>
                            //  <li className="list-group-item border-secondary alert alert-success text-dark d-flex justify-content-between align-items-center" key={i}>
                            //   {ele.menuName} 
                            //   <button className="badge badge-secondary  border-success text-dark badge-pill" onClick={() => 
                            //     addOrder(ele)}>Add</button>
                            // </li>
                          )
                     })
                  }   */}

          
           
        </div>
    )

}

export default Search





