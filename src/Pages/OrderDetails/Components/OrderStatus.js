import React, { Fragment } from "react";
import styled from "styled-components";

function OrderStatus() {
  return (
    <Fragment>
      <OrderStatusContainer>
        <OrderStatusWrapper>
          <OrderStatusTitle>
            <i className="fas fa-angle-right"></i>
            <span>주문상태 변경 이력</span>
          </OrderStatusTitle>
          <OrderStatusBody>
            <TableContainer>
              <thead>
                <TableHead>
                  <th>날짜</th>
                  <th>주문상태</th>
                </TableHead>
              </thead>
              <tbody>
                <TableBody>
                  <th>2020-10-26 14:10:35</th>
                  <th>상품준비</th>
                </TableBody>
              </tbody>
            </TableContainer>
          </OrderStatusBody>
        </OrderStatusWrapper>
      </OrderStatusContainer>
    </Fragment>
  );
}

export default OrderStatus;

const OrderStatusContainer = styled.div`
  margin-bottom: 25px;
`;

const OrderStatusWrapper = styled.div``;

const OrderStatusTitle = styled.div`
  border-radius: 4px 4px 0 0;
  padding: 10px 10px 2px 10px;
  height: 38px;
  background-color: #eee;
  span {
    color: #333;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    margin-top: 1px;
  }
  i {
    margin-top: 2px;
    font-size: 13px;
    margin-right: 5px;
    color: #666;
  }
`;

const OrderStatusBody = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 0px 0px 4px 4px;
  border: 1px solid #dddddd;
  hr {
    border-top: 1px solid #e0dfdf;
    border-bottom: 1px solid #fefefe;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

const TableContainer = styled.table`
  width: 100%;
  thead {
  }
`;

const TableHead = styled.tr`
  border: 1px solid #ddd;
  line-height: 1.42857143;
  color: #222222;
  background-color: #eeeeee;
  th {
    font-size: 14px;
    padding: 8px;
    border: 1px solid #ddd;
    text-align: start;
    font-weight: bold;
    width: 100%;
    :nth-child(1) {
      width: 20%;
    }
  }
`;

const TableBody = styled.tr`
  border: 1px solid #ddd;
  line-height: 1.42857143;
  background-color: #f9f9f9;
  th {
    font-size: 13px;
    padding: 8px;
    border: 1px solid #ddd;
    width: 20%;
    text-align: start;
    width: 100%;
    :nth-child(1) {
      width: 20%;
    }
  }
`;
