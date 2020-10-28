import React, { Fragment } from "react";
import OrderInfoContainer from "../Components/OrderInfoContainer";
import DetailInfo from "../Components/DetailInfo";
import ProductInfo from "../Components/ProductInfo";
import RecipientInfo from "../Components/ RecipientInfo";
import OrderStatus from "../Components/OrderStatus";
import styled from "styled-components";

function OrderDetailPage() {
  return (
    <Fragment>
      <OrderDetailsWrapper>
        <DetailsTitle>
          주문 상세 관리<span>주문 목록/관리</span>
        </DetailsTitle>
        <DetailsNav>
          <NavContents>
            <i className="fas fa-home"></i>
            <li>주문 관리</li>
            <i className="fas fa-angle-right"></i>
            <li>주문 상세 페이지</li>
          </NavContents>
        </DetailsNav>
        <OrderDetailsContents>
          <OrderTitle>
            <i className="fas fa-truck fa-flip-horizontal"></i>
            <span>주문 상세</span>
          </OrderTitle>
          <OrderBody>
            <OrderInfoContainer />
            <DetailInfo />
            <ProductInfo />
            <RecipientInfo />
            <OrderStatus />
            <hr></hr>
            <SaveBtns>
              <button>저장</button>
              <button>취소</button>
            </SaveBtns>
          </OrderBody>
        </OrderDetailsContents>
      </OrderDetailsWrapper>
    </Fragment>
  );
}

export default OrderDetailPage;

const OrderDetailsWrapper = styled.section`
  padding: 70px 20px 20px 20px;
  width: 100%;
`;

const DetailsTitle = styled.div`
  font-size: 26px;
  letter-spacing: -1px;
  display: block;
  color: #666;
  margin: 0px 0px 15px 0px;
  font-weight: 300;
  span {
    font-size: 14px;
    letter-spacing: 0px;
    font-weight: 300;
    color: #888;
    margin-left: 5px;
  }
`;

const DetailsNav = styled.div`
  padding: 0 20px 0 10px;
  margin: 0 -20px 10px;
  background-color: #eee;
`;

const NavContents = styled.ul`
  background-color: #eee;
  padding: 8px;
  height: 34px;
  display: flex;
  flex-direction: row;
  align-items: center;

  li {
    font-size: 13px;
    color: #333;
    margin-right: 8px;
  }
  i {
    font-size: 11px;
    color: #999999;
    margin-right: 8px;
  }
`;

const OrderDetailsContents = styled.div``;

const OrderTitle = styled.div`
  background-color: #eee;
  border-radius: 4px 4px 0 0;
  padding: 10px 10px 2px 10px;
  height: 38px;
  i {
    font-size: 11px;
    color: #666;
    margin: 2px 5px 0 0;
  }
  span {
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    color: #333;
  }
`;

const OrderBody = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 0px 0px 4px 4px;
  border: 1px solid #dddddd;
  hr {
    border-top: 1px solid #e0dfdf;
    border-bottom: 1px solid #fefefe;
  }
`;

const SaveBtns = styled.div`
  text-align: center;
  button {
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    color: #333;
    background-color: #fff;
    border-color: #ccc;
    :hover {
      color: #333;
      background-color: #e6e6e6;
      border-color: #adadad;
    }
    :nth-child(1) {
      color: #fff;
      background-color: #5cb85c;
      border-color: #4cae4c;
      margin-right: 5px;
      :hover {
        color: #fff;
        background-color: #449d44;
        border-color: #398439;
      }
    }
  }
`;
