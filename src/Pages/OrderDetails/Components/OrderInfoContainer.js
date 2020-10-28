import React, { Fragment } from "react";
import styled from "styled-components";

function OrderInfoContainer() {
  return (
    <Fragment>
      <OrderContentsWrapper>
        <OrderInfo>
          <OrderInfoTitle>
            <i className="fas fa-angle-right"></i>
            <span>주문 정보</span>
          </OrderInfoTitle>
          <OrderInfoBody>
            <RowOne>
              <OrderNumber>
                <span>주문 번호:</span>
                <label>20201026000092000</label>
              </OrderNumber>
              <OrderTime>
                <span>주문 일시:</span>
                <label>2020-10-26 14:10:35</label>
              </OrderTime>
            </RowOne>
            <hr></hr>
            <RowTwo>
              <span>총 결재 금액:</span>
              <label>17,457 원</label>
            </RowTwo>
          </OrderInfoBody>
        </OrderInfo>
      </OrderContentsWrapper>
    </Fragment>
  );
}

export default OrderInfoContainer;

const OrderContentsWrapper = styled.div`
  margin-bottom: 25px;
`;

const OrderInfo = styled.div``;

const OrderInfoTitle = styled.div`
  border-radius: 4px 4px 0 0;
  padding: 10px 10px 2px 10px;
  height: 38px;
  background-color: cornsilk;
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

const OrderInfoBody = styled.div`
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

const RowOne = styled.div`
  display: flex;
  flex-direction: row;
`;

const OrderNumber = styled.div`
  margin-bottom: 5px;
  width: 50%;
  span {
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    font-size: 13px;
    display: inline-block;
    width: 33%;
  }
  label {
    font-weight: 400;
    font-size: 14px;
    max-width: 100%;
    margin-bottom: 5px;
  }
`;

const OrderTime = styled.div`
  margin-bottom: 5px;
  width: 50%;
  span {
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    font-size: 13px;
    display: inline-block;
    width: 33%;
  }
  label {
    font-weight: 400;
    font-size: 14px;
    max-width: 100%;
    margin-bottom: 5px;
  }
`;

const RowTwo = styled.div`
  width: 50%;
  margin-bottom: 5px;
  span {
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    font-size: 13px;
    display: inline-block;
    width: 33%;
  }
  label {
    font-weight: 400;
    font-size: 14px;
    max-width: 100%;
    margin-bottom: 5px;
  }
`;
