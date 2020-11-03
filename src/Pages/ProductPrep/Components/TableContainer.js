import React, { Fragment, useEffect, useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Pagination from "../Components/Pagination";
import TotalOrderBar from "../Components/TotalOrderBar";
import MappingTr from "../Components/MappingTr";
import styled from "styled-components";

function TableContainer({
  isAllChecked,
  setIsAllChecked,
  isChecked,
  setIsChecked,
  filteredData,
  setFilteredData,
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // 현재 페이지 값
  const [currentPage, setCurrentPage] = useState(1);
  // 현재 페이지 안에 들어가는 데이터 양
  const [postsPerPage, setPostPerPage] = useState(50);

  //현재 페이지의 마지막 인덱스
  const indexOfLastPost = currentPage * postsPerPage;
  // 현재 페이지의 첫번쨰 인덱스, 즉 3번째 페이지 일 경우 100번째 인덱스
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // cureentPage가 3일 경우 인데스 100에서 150까지의 데이터를 잘라온다.
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    handlePageLimit(pageNumber);
  };

  // console.log(posts);
  // useEffect(() => {
  //   fetch("http://localhost:3000/public/Data/ProductPrep/TableData.json")
  //     .then((res) => res.json())
  //     .then((res) => setData(res.TableData));
  // }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const sortByDate = (e) => {
    if (e.target.value === "reverse") {
      const sorted = [...data].sort((a, b) => {
        return b.postId - a.postId;
      });
      setData(sorted);
      setCurrentPage(1);
    } else if (e.target.value === "recent") {
      const sorted = [...data].sort((a, b) => {
        return a.postId - b.postId;
      });
      setData(sorted);
      setCurrentPage(1);
    }
  };

  // 잘라온 current
  const checkAllHandler = (checked) => {
    if (checked) {
      const array = [];
      currentPosts.forEach((el) => array.push(el.id));
      setIsChecked(array);
    } else {
      setIsChecked([]);
    }
  };

  const handleChecked = (checked, id) => {
    if (checked) {
      setIsChecked([...isChecked, id]);
    } else {
      setIsChecked(isChecked.filter((el) => el !== id));
    }
    setFilteredData({ ...filteredData, isChecked: isChecked });
    // setIsChecked((prev) => {
    //   if (prev.includes(id)) {
    //     return prev.filter((x) => x !== id);
    //   } else {
    //     return [...prev, id];
    //   }
    // });
  };

  useEffect(() => {
    console.log(filteredData && filteredData);
  }, [filteredData]);

  const handlePageLimit = (e) => {
    // 리밋 필터를 누를 때마다 페이지를 1로 되돌려주면서 체크박스를 초기화 시킨다.
    setFilteredData({
      ...filteredData,
      limit: postsPerPage,
      offset: indexOfFirstPost,
    });
    setPostPerPage(Number(e.target.value));
    setCurrentPage(1);
    setIsChecked([]);
  };

  if (loading) {
    return (
      <h2>
        <img
          src="https://media1.tenor.com/images/9596d3118ddd5c600806a44da90c4863/tenor.gif?itemid=16014629"
          alt="Cuted Cat"
        />
      </h2>
    );
  }

  return (
    <Fragment>
      <TableContainers>
        <FilterBar>
          <PageInfos>
            <i className="fas fa-list"></i>
            <li>
              주문관리<i className="fas fa-angle-right"></i>
            </li>
            <li>
              상품준비 관리<i className="fas fa-angle-right"></i>
            </li>
            <li>
              상품준비 리스트<i className="fas fa-angle-right"></i>
            </li>
          </PageInfos>
          <ListOrdersFilter>
            <OrderFilter onChange={sortByDate}>
              <option value="recent">최신주문일순</option>
              <option value="reverse">주문일의 역순</option>
            </OrderFilter>
            <LimitFilter defaultValue="50" onChange={handlePageLimit}>
              <option value="10">10개씩 보기</option>
              <option value="20">20개씩 보기</option>
              <option value="50">50개씩 보기</option>
              <option value="100">100개씩 보기</option>
              <option value="150">150개씩 보기</option>
            </LimitFilter>
          </ListOrdersFilter>
        </FilterBar>
        <TotalOrderBar data={data} setData={setData} />
        <TableWrapper>
          <table id="table-to-xls">
            <TableHeader>
              <tr>
                <HeaderTh>
                  <input
                    type={"checkbox"}
                    onChange={(e) => checkAllHandler(e.target.checked)}
                    checked={isChecked.length === postsPerPage ? true : false}
                  ></input>
                </HeaderTh>
                <HeaderTh>결제일자</HeaderTh>
                <HeaderTh>주문번호</HeaderTh>
                <HeaderTh>주문상세번호</HeaderTh>
                <HeaderTh>셀러명</HeaderTh>
                <HeaderTh>상품명</HeaderTh>
                <HeaderTh>옵션정보</HeaderTh>
                <HeaderTh>수량</HeaderTh>
                <HeaderTh>주문자명</HeaderTh>
                <HeaderTh>핸드폰번호</HeaderTh>
                <HeaderTh>결제금액</HeaderTh>
                <HeaderTh>주문상태</HeaderTh>
              </tr>
            </TableHeader>
            <TableBody>
              {currentPosts.map((el, idx) => (
                <MappingTr
                  el={el}
                  key={idx}
                  data={data}
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                  isAllChecked={isAllChecked}
                  setIsAllChecked={setIsAllChecked}
                  handleChecked={handleChecked}
                />
              ))}
            </TableBody>
            <TableFooter></TableFooter>
          </table>
          <PaginWrapper>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              postsPerPage={postsPerPage}
              totalPosts={data.length}
              paginate={paginate}
              loading={loading}
              data={data}
              handlePageLimit={handlePageLimit}
            />
          </PaginWrapper>
        </TableWrapper>
        <TotalOrderBar />
      </TableContainers>
    </Fragment>
  );
}

export default TableContainer;

const TableContainers = styled.section``;

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -20px 10px -20px;
  padding: 0 20px 0 10px;
  background-color: #eeeeee;
  height: 34px;
`;

const PageInfos = styled.ul`
  display: flex;
  padding: 8px;
  font-size: 13px;
  i {
    padding-left: 8px;
    padding-top: 1px;
  }
  li {
    padding-left: 8px;
    font-weight: 400;
  }
`;

const ListOrdersFilter = styled.div`
  height: 30px;
  line-height: 28px;
`;

const OrderFilter = styled.select`
  height: 30px;
  line-height: 28px;
  padding: 2px 10px;
  font-size: 13px;
  margin-right: 5px;
  background-color: white;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
`;

const LimitFilter = styled(OrderFilter)`
  margin-right: 0px;
`;

const TableWrapper = styled.div`
  white-space: nowrap;
  width: 100%;
  border: 1px solid #ddd;
  overflow-x: auto;
  overflow-y: hidden;
  border-collapse: collapse;
  table {
    width: 100%;
    border-collapse: collapse;
  }
`;

const TableHeader = styled.thead`
  border-collapse: collapse;
`;

const HeaderTh = styled.th`
  border: 1px solid #ddd;
  border-collapse: collapse;
  /* width: 100%; */
  font-size: 14px;
  font-weight: 600;
  background-color: #eeeeee;
  padding: 8px;
  text-align: start;

  input {
    width: 19px;
  }
`;

const TableBody = styled.tbody`
  width: 100%;
  background-color: #f9f9f9;
  border-collapse: collapse;
  &:hover {
    background-color: #fff;
  }

  td {
    border: 1px solid #ddd;
    border-collapse: collapse;
    font-size: 13px;
    padding: 8px;
    line-height: 1.42857143;
    /* width: 100%; */
    :first-child {
      width: 19px;
    }
  }
`;

const TableFooter = styled.tfoot`
  display: flex;
  tr {
  }
`;

const PaginWrapper = styled.div`
  width: 100%;
  margin: 15px;
`;

// const PaginationBtn = styled.td`
//   font-size: 13px;
//   padding: 8px;
//   display: flex;
//   width: 1px;

//   li {
//     list-style: none;
//     font-size: 14px;
//     text-align: center;
//     padding: 6px 12px;
//     margin-left: -1px;
//     line-height: 1.42857143;
//     color: #428bca;
//     background-color: #fff;
//     border: 1px solid #ddd;
//     margin: 10px 0px 10px -1px;
//     :nth-last-child(1) {
//       border-top-right-radius: 4px;
//       border-bottom-right-radius: 4px;
//     }
//     :nth-child(1) {
//       border-top-left-radius: 4px;
//       border-bottom-left-radius: 4px;
//     }
//     input {
//       padding: 8px;
//     }
//   }
// `;
