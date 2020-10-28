import React, { Fragment } from "react";
import styled from "styled-components";

function DetailInfo() {
  return (
    <Fragment>
      <OrderContentsWrapper>
        <OrderInfo>
          <OrderInfoTitle>
            <i className="fas fa-angle-right"></i>
            <span>상품 정보</span>
          </OrderInfoTitle>
          <OrderInfoBody>
            <RowOne>
              <OrderNumber>
                <span>상품번호 :</span>
                <label>17082238 (17082237)</label>
              </OrderNumber>
              <OrderTime>
                <span>상품명 :</span>
                <label>vivi 반팔자켓 린넨자켓 2col_무드글램</label>
              </OrderTime>
            </RowOne>
            <hr></hr>
            <RowTwo>
              <OrderDate>
                <span>상품 판매가 :</span>
                <label>18,700 원 </label>
              </OrderDate>
              <CalcDate>
                <span>상품 할인율 :</span>
                <label>0 %</label>
              </CalcDate>
            </RowTwo>
            <hr></hr>
            <RowThree>
              <OrderDate>
                <span>브랜드명 :</span>
                <label>무드글램 </label>
              </OrderDate>
              <CalcDate>
                <span>옵션정보 :</span>
                <label>베이지 </label>
              </CalcDate>
            </RowThree>
            <hr></hr>
            <RowFour>
              <span>구매수량 :</span>
              <label>1 개</label>
            </RowFour>
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

const RowThree = styled(RowOne)``;

const RowFour = styled(OrderNumber)``;
