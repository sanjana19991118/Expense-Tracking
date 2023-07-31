import React, { useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { startGetExpense } from '../../../actions/expenseAction';
import Expense from '../Expense';
import Pagination from './Pagination';


function Page() {
     const pageDetails = useSelector((state) => {
      //  console.log(state.expense.expense)  
       return state.expense.expense[0]
     })
     
     console.log('pd' , pageDetails)

   //   const[expense, setExpenses] = useState([]);
     const[loading, setLoading] = useState(false);
     const[currentPage, setCurrentPage] = useState(1);
     const[expensePerPage, setExpensePerPage] = useState(3);

     const dispatch = useDispatch()

     useEffect(() => {
       dispatch(startGetExpense())
       setLoading(false)
     },[dispatch])

     

   

   //   useEffect(() => {

   //       // const fetchPosts = async () => {
   //       //    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
   //       //    // console.log('r', res.data)
   //       //    setPosts(res.data)
   //       //    setLoading(false)
   //       // }
   //       //     fetchPosts()
   //   }, [])

     console.log('p', pageDetails)

     const indexOfLastExpense = currentPage * expensePerPage;

    //  console.log(indexOfLastExpense)

     const indexOfFirstExpense = indexOfLastExpense - expensePerPage;

     console.log(indexOfFirstExpense)

     const currentExpenses = pageDetails.slice(indexOfFirstExpense, indexOfLastExpense)

     const paginate = (pageNumbers) => {
        setCurrentPage(pageNumbers)
     }
   //   console.log('p', expensePerPage)

     return (
         <div className="container mt-5">
            <h1 className="text-primary mb-3">My Posts</h1>
            <h2>Start editing to see some magic happen!</h2>
            <Expense expenses={currentExpenses} loading={loading} />
            <Pagination expensePerPage={expensePerPage} totalExpense={pageDetails.length} paginate={paginate} />
         </div>
     )

   }

   export default Page