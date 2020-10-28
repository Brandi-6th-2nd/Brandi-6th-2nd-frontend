import React, { Fragment, useEffect, useState } from "react";
import TotalOrderBar from "../Components/TotalOrderBar";
import styled from "styled-components";

function TableContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/public/Data/ProductPrep/TableData.json")
      .then((res) => res.json())
      .then((res) => setData(res.TableData));
  }, []);
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
            <OrderFilter>
              <option>최신주문일순</option>
              <option>주문일의 역순</option>
            </OrderFilter>
            <LimitFilter defaultValue={"DEFAULT"}>
              <option value="10">10개씩 보기</option>
              <option value="20">20개씩 보기</option>
              <option value="50" value="DEFAULT">
                50개씩 보기
              </option>
              <option value="100">100개씩 보기</option>
              <option value="150">150개씩 보기</option>
            </LimitFilter>
          </ListOrdersFilter>
        </FilterBar>
        <TotalOrderBar />
        <TableWrapper>
          <table>
            <TableHeader>
              <tr>
                <HeaderTh>
                  <input type="checkbox"></input>
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
              {data.map((el, idx) => (
                <tr key={idx}>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>{el.paid_on}</td>
                  <td>{el.order_number}</td>
                  <td>{el.order_detail_number}</td>
                  <td>{el.seller_name}</td>
                  <td>{el.product_name}</td>
                  <td>{el.option_info}</td>
                  <td>{el.quantity}</td>
                  <td>{el.orderer_name}</td>
                  <td>{el.phone_number}</td>
                  <td>{el.payment_amount}</td>
                  <td>{el.order_status}</td>
                </tr>
              ))}
            </TableBody>
            <TableFooter>
              <tr>
                <PaginationBtn>
                  <li>
                    <a href="">1</a>
                  </li>
                  <li>
                    <a href="">2</a>
                  </li>
                  <li>
                    <a href="">3</a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fas fa-angle-right"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fas fa-angle-double-right"></i>
                    </a>
                  </li>
                </PaginationBtn>
              </tr>
            </TableFooter>
          </table>
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

const PaginationBtn = styled.td`
  font-size: 13px;
  padding: 8px;
  display: flex;
  width: 1px;

  li {
    list-style: none;
    font-size: 14px;
    text-align: center;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #428bca;
    background-color: #fff;
    border: 1px solid #ddd;
    margin: 10px 0px 10px -1px;
    :nth-last-child(1) {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    :nth-child(1) {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    input {
      padding: 8px;
    }
  }
`;
