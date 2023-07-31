import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { startCategoryUser } from '../../actions/categoryAction'
// import { useFormik } from 'formik'
// import { signUpSchema } from '../schema/trial'
// import CategoryList from '../Categories/CategoryList'
import '../Css/category.css'
const Category = () => {
    
    const category = useSelector((state) => {
        return state.category.category
    })
    console.log('c', category)
    const[categories, setCategories] = useState(category.categories ? category.categories : ' ')
    const[_id] = useState(category._id ? category._id : ' ')
    const dispatch = useDispatch()
    //  useEffect(() => {
    //    dispatch(startLoginUser())
    //  },[dispatch])
    const handleChange = (e) => {
        setCategories(e.target.value)
    }

    const handleSubmit = (e) => {
         e.preventDefault()
         const formData = {
            id : _id,
            category: categories
         }
        //  console.log('start', formData)
         dispatch(startCategoryUser(formData))
    }

    return (
        <div>
        <div className='category-background'>
        <div className='center'>
        <div className='card shadow border-warning card-body d-flex flex-column align-items-center'>
            <label className='center-label card-title text-success'>
                 <h3>Add Categories </h3>
            </label>
            <br />
            <form onSubmit={handleSubmit} >
                  <input  type="category" 
                          className="form-control border-success category-form" 
                          placeholder="Enter Category" 
                          values={category}
                          onChange={handleChange}
                         
                           />
                  {/* {errors.category && touched.category ? <span> {errors.category} </span> : null} */}
            <br/>
            <input  type="submit" className="btn btn-success submit"    />
            </form>
        </div>  
        </div>
        </div>
         {/* <CategoryList /> */}
        </div>
    )
}

export default Category