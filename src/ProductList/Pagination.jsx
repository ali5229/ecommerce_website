// src/components/Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  
  // Show up to 5 page numbers at a time
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);
  
  if (currentPage <= 3) {
    endPage = Math.min(5, totalPages);
  } else if (currentPage >= totalPages - 2) {
    startPage = Math.max(totalPages - 4, 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button 
        onClick={() => onPageChange(1)} 
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        &lsaquo;
      </button>
      
      {startPage > 1 && <span className="ellipsis">...</span>}
      
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </button>
      ))}
      
      {endPage < totalPages && <span className="ellipsis">...</span>}
      
      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages || totalPages === 0}
      >
        &rsaquo;
      </button>
      <button 
        onClick={() => onPageChange(totalPages)} 
        disabled={currentPage === totalPages || totalPages === 0}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;