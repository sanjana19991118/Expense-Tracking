import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import {startRemoveList} from "../../actions/categoryAction" 
import { FaTrash } from 'react-icons/fa'
import { startListCategory } from '../../actions/categoryAction'
import '../Css/category.css'
const CategoryList = () => {
    const category = useSelector((state) => {
        return state.category.category
    })

    // console.log("categoryL", category)
    const dispatch = useDispatch()

    useEffect(() => {
         dispatch(startListCategory())
    },[dispatch])

    
    const removeList = (id) => {
        dispatch(startRemoveList(id))
    }
    return (
        <div className='category-background-list'>
        <div className='center-clist'>
        <div className='card shadow border-warning card-body d-flex flex-column align-items-center'>
            {
                category.length > 0 && <h3 className='center-label card-title text-success'>Categories  - <b className="text-muted">{ category.length }</b></h3>
            }
            <ul style={{ listStyleType : "none"}}>
                {
                  category.length > 0 && category.map((ele) => {
                    // console.log('ii', ele._id)
                      return <li style={{fontSize: "20px" , paddingRight: "15px", marginBottom: '5px'}} key={ele._id}>{ele.category} 
                        <button  type='submit' className='btn btn-success' style={{marginLeft : '5px'}} onClick={() => {
                         removeList(ele._id)
                      }} ><span> </span><FaTrash /></button>
                      </li>
                  })
                }

            </ul>
            {/* <h1>GOLD</h1> */}
          </div>
        </div>
        </div>
    )
}

export default CategoryList