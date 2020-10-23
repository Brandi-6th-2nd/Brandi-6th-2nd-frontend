import React, { Fragment } from "react";
import SellerFilterBox from "./SellerFilterBox";
import MiddleFilterBox from "./MiddleFilterBox";
import styled from "styled-components";

function SellerProductManage() {
  return (
    <Fragment>
      <Title>상품 관리</Title>
      <SellerFilterBox />
      <MiddleFilterBox />
    </Fragment>
  );
}

export default SellerProductManage;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 100;
  color: #666666;
  margin-bottom: 15px;
`;
