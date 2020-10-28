import React, { Fragment } from "react";
import styled from "styled-components";

function RecipientInfo() {
  return (
    <Fragment>
      <OrderContentsWrapper>
        <OrderInfo>
          <OrderInfoTitle>
            <i className="fas fa-angle-right"></i>
            <span>수취자 정보</span>
          </OrderInfoTitle>
          <OrderInfoBody>
            <RowOne>
              <OrderNumber>
                <span>주문자명 :</span>
                <label>박민정</label>
              </OrderNumber>
              <OrderTime>
                <span>연락처 :</span>
                <label>01036502119</label>
                <input type="button" value="변경"></input>
              </OrderTime>
            </RowOne>
            <hr></hr>
            <RowTwo>
              <OrderDate>
                <span>배송지 :</span>
                <label>서울 도봉구 노해로 258 엄저구점저구 (01453)</label>
              </OrderDate>
              <CalcDate>
                <span>배송시 요청사항 :</span>
                <label>일반배송 :</label>
                <input type="button" value="배송지 변경"></input>
              </CalcDate>
            </RowTwo>
          </OrderInfoBody>
        </OrderInfo>
      </OrderContentsWrapper>
    </Fragment>
  );
}

export default RecipientInfo;

const OrderContentsWrapper = styled.div`
  margin-bottom: 25px;
`;

const OrderInfo = styled.div``;

const OrderInfoTitle = styled.div`
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

const OrderTime = styled(OrderNumber)`
  label {
    display: inline-block;
    width: 33%;
  }
  input {
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
    border: 1px solid transparent;
    padding: 1px 5px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const RowTwo = styled(RowOne)``;

const OrderDate = styled(OrderNumber)``;

const CalcDate = styled(OrderNumber)`
  label {
    display: inline-block;
    width: 33%;
  }
  input {
    color: #fff;
    background-color: #5bc0de;
    border-color: #46b8da;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
`;
