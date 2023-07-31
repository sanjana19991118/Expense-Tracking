// import React, {useEffect} from 'react'
// import { useSelector, useDispatch } from "react-redux"
// import { startCategoryUser } from '../../actions/categoryAction'
// import { useFormik } from 'formik'
// import { signUpSchema } from '../schema/trial'
// // import CategoryList from '../Categories/CategoryList'
// import '../Css/category.css'
// const Category = (props) => {
//     // const [categories, setCategories] = useState()

//     const dispatch = useDispatch()
//     const category = useSelector((state) => {
//         return state.category.category
//     })
//     console.log('c', category)
//     const initialValues= {
//         category : " "
//     }

//     const { values, handleChange, handleSubmit, errors , touched , resetForm} = useFormik({
//         initialValues : initialValues,
//         validationSchema: signUpSchema,
//         onSubmit: (values) => {
//             dispatch(startCategoryUser(values))
//             console.log("values", values)
//         }

//     })

//     useEffect(() => {
//         resetForm({values: ''})
//     },[category, resetForm])
//     return (
//         <div>
//         <div className='category-background'>
//         <div className='center'>
//         <div className='card shadow border-warning card-body d-flex flex-column align-items-center'>
//             <label className='center-label card-title text-success'>
//                  Add Category : 
//             </label>
//             <br />
//             <form onSubmit={handleSubmit} >
//                   <input  type="category" 
//                           className="form-control border-success" 
//                           placeholder="Enter Category" 
//                           values={values.category}
                          
//                            />
//                   {errors.category && touched.category ? <span> {errors.category} </span> : null}
//             <br/>
//             <input  type="submit" className="btn btn-success" onChange={handleChange} />
//             </form>
         
//         </div>  
//         </div>
//         </div>
//          {/* <CategoryList /> */}
//         </div>
//     )
// }

// export default Category