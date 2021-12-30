import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {

   const pageNumbers = [];

   for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {

    pageNumbers.push(i);
   }

    return (
        <nav>

            <ul className="pagination my-3 d-flex justify-content-center">
                {pageNumbers.map((number) => (
                    currentPage === number ?

                    <li key={number} className="page-item">
                        <a href="!#" className="page-link" style={{background: "primary", color: "white", fontWeight: 900}}
                         onClick={() => paginate(number)}>
                             {number}
                             </a>
                         </li> :

                    <li key={ number } className='page-item'>
                        <a onClick={() => paginate(number)} href="#"  className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
            
        </nav>
    )
}

export default Pagination;
