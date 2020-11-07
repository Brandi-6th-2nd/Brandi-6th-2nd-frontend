import React from "react";
import styled from "styled-components";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
  handlePageLimit,
  indexOfFirstPost,
  setFilteredData,
  filteredData,
}) => {
  const pageNumbers = [];
  const pages = Math.ceil(totalPosts / postsPerPage);

  // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  // pages를 받아서 pages보다 값이 적을때 계속 진행된다
  for (let i = 1; i <= pages; i++) {
    // 현재 페이지만 출력을 해준다
    if (i === currentPage) {
      pageNumbers.push(i);
    } else if (
      // currentpage가 4일시  3이랑 5가 함꼐 출력되고 , 앞 1,2 그리고 뒷숫자 2개가 출력된다.
      i < 5 ||
      i > pages - 3
    ) {
      pageNumbers.push(i);
    } else if (i === currentPage - 1) {
      pageNumbers.push("...");
    }

    // if (
    //   i < 3 ||
    //   i > pages - 2 ||
    //   i === currentPage - 1 ||
    //   i === currentPage + 1
    // ) {
    //   pageNumbers.push(i);
    // }
    //
  }

  const goToPrevPage = (e) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = (e) => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav>
      <PaginUl className="pagination">
        <li
          className={currentPage === 1 ? "page-item disabled" : "page-item"}
          onClick={() => {
            goToPrevPage();
            setFilteredData({ ...filteredData, offset: indexOfFirstPost });
          }}
          value=""
        >
          <a className="page-link">이전</a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              number === currentPage ? "page-item active disabled" : "page-item"
            }
          >
            <a onClick={() => paginate(number)} value="" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li
          className={currentPage === pages ? "page-item disabled" : "page-item"}
          onClick={() => {
            goToNextPage();
            setFilteredData({ ...filteredData, offset: indexOfFirstPost });
          }}
          value=""
        >
          <a className="page-link"> 다음 </a>
        </li>
      </PaginUl>
    </nav>
  );
};

export default Pagination;

const PaginUl = styled.ul`
  li {
    color: red;
  }
`;
