import React, { Fragment } from "react";
import TotalOrderBar from "../Components/TotalOrderBar";
import styled from "styled-components";

function TableContainer() {
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
            <LimitFilter>
              <option value="10">10개씩 보기</option>
              <option value="20">20개씩 보기</option>
              <option value="50" selected>
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
              <HeaderTh>
                <input type="checkbox"></input>
              </HeaderTh>
              <HeaderTh>결제일자</HeaderTh>
              <HeaderTh>주문번호</HeaderTh>
              <HeaderTh>주문상세번호</HeaderTh>
              <HeaderTh>상품명</HeaderTh>
              <HeaderTh>옵션정보</HeaderTh>
              <HeaderTh>수량</HeaderTh>
              <HeaderTh>주문자명</HeaderTh>
              <HeaderTh>핸드폰번호</HeaderTh>
              <HeaderTh>주문상태</HeaderTh>
            </TableHeader>
            <TableBody>
              <th>조회된 데이터가 없습니다.</th>
            </TableBody>
            <TableFooter>
              <th></th>
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
  /* padding: 6px 10px; */
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
  table {
    width: 100%;
  }
`;

const TableHeader = styled.tr`
  display: flex;
  width: 100%;
`;

const HeaderTh = styled.th`
  border: 1px solid #ddd;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  background-color: #eeeeee;
  padding: 8px;
  text-align: start;
`;

const TableBody = styled.tr`
  background-color: #f9f9f9;
  &:hover {
    background-color: #fff;
  }

  th {
    border: 1px solid #ddd;
    font-size: 13px;
    padding: 8px;
    line-height: 1.42857143;
  }
`;

const TableFooter = styled.tr`
  background-color: white;
  th {
    border: 1px solid #ddd;
    font-size: 13px;
    padding: 8px;
  }
`;
