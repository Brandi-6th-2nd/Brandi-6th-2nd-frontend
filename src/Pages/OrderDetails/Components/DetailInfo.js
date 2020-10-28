import React, { Fragment } from "react";
import styled from "styled-components";

function DetailInfo() {
  return (
    <Fragment>
      <OrderContentsWrapper>
        <OrderInfo>
          <OrderInfoTitle>
            <i className="fas fa-angle-right"></i>
            <span>주문 상세 정보</span>
          </OrderInfoTitle>
          <OrderInfoBody>
            <RowOne>
              <OrderNumber>
                <span>주문 상세 번호 :</span>
                <label>B202010260005C001</label>
              </OrderNumber>
              <OrderTime>
                <span>주문 상태 :</span>
                <select>
                  <option>상품준비</option>
                </select>
              </OrderTime>
            </RowOne>
            <hr></hr>
            <RowTwo>
              <OrderDate>
                <span>결제일시 :</span>
                <label>2020-10-26 14:10:35</label>
              </OrderDate>
              <CalcDate>
                <span>정산예정일 :</span>
                <label>아직 구매확정이 되지 않은 주문건입니다.</label>
              </CalcDate>
            </RowTwo>
            <hr></hr>
            <RowThree>
              <span>연락처 :</span>
              <label>010-3650-2119</label>
              <input type="button" value="변경"></input>
            </RowThree>
          </OrderInfoBody>
        </OrderInfo>
      </OrderContentsWrapper>
    </Fragment>
  );
}

export default DetailInfo;

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
  select {
    font-size: 14px;
    font-weight: normal;
    color: #333333;
    background-color: #eeeeee;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    height: 34px;
    padding: 6px 12px;
    width: 33%;
  }
`;

const RowTwo = styled(RowOne)``;

const OrderDate = styled(OrderNumber)``;

const CalcDate = styled(OrderNumber)``;

const RowThree = styled(OrderNumber)`
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
