import React from 'react'

const Pagination = ({expensePerPage, totalExpense, paginate}) => {
    // console.log('t' , totalPosts)
    // console.log('pp' , postsPerPage)
    let pageNumbers = [];

    // console.log(Math.ceil(totalPosts/postsPerPage))

    for(let i = 0 ; i <= Math.ceil(totalExpense/expensePerPage) ; i++) {
        // console.log('i' , i)
        pageNumbers.push(i)
    }
    // console.log('page', pageNumbers)
    return (
        <div>
            <nav>
                <ul className="pagination">
                   { pageNumbers.map(number => (
                      <li className="page-item" key={number}>
                         <a onClick={() => paginate(number)} href="!#" className="page-link">{number}</a>
                      </li>
                   ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination