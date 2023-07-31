import React from 'react'
import '../../Css/page.css'

const Pagination = (req, res) => {
    

    return (
        <div>
            <nav aria-label="Page navigation example" className="page">
                <ul className="pagination">
                <li className="page-item ">
                    <a className="page-link" href=" " aria-label="Previous">
                    <span  className="text-success"aria-hidden="true">&laquo;</span>
                    <span className="text-success sr-only">Previous</span>
                    </a>
                </li>
                <li className="page-item"><a className="text-success page-link" href=" ">1</a></li>
                <li className="page-item"><a className=" text-success page-link" href=" ">2</a></li>
                <li className="page-item"><a className=" text-success page-link" href=" ">3</a></li>
                <li className="page-item"><a className=" text-success page-link" href=" ">4</a></li>
                <li className="page-item"><a className=" text-success page-link" href=" ">5</a></li>
                <li className="page-item"><a className=" text-success page-link" href=" ">6</a></li>
                <li className="page-item"><a className=" text-success page-link" href=" ">7</a></li>
                <li className="page-item"><a className=" text-success page-link" href=" ">8</a></li>
                <li className="page-item"><a className=" text-success page-link" href=" ">9</a></li>
                <li className="text-success page-item">
                    <a className="text-success page-link" href=" " aria-label="Next">
                    <span className ="text-success" aria-hidden="true">&raquo;</span>
                    <span className="text-success sr-only">Next</span>
                    </a>
                </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination