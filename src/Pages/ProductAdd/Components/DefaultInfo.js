import React, { Fragment } from "react";
import styled from "styled-components";

import SellOption from "./DefaultInfo/SellOption";
import DisplayOption from "./DefaultInfo/DisplayOption";
import Category from "./DefaultInfo/Category";
import ProductInfo from "./DefaultInfo/ProductInfo";
import ProductName from "./DefaultInfo/ProductName";
import ProductDesc from "./DefaultInfo/ProductDesc";
import ImageRegister from "./DefaultInfo/ImageRegister";
import ProductDetailInfo from "./DefaultInfo/ProductDetailInfo";

export default function DefaultInfo() {
  return (
    <Fragment>
      <Table>
        <Thead>
          <tr>
            <Th colSpan="2">
              <i className="fas fa-pencil-alt"></i> &nbsp;기본 정보
            </Th>
          </tr>
        </Thead>
        <Tbody>
          <SellOption />
          <DisplayOption />
          <Category />
          <ProductInfo />
          <ProductName />
          <ProductDesc />
          <ImageRegister />
          <ProductDetailInfo />
        </Tbody>
      </Table>
    </Fragment>
  );
}

const Table = styled.table`
  ${({ theme }) => theme.table()}
`;

const Thead = styled.thead``;

const Th = styled.th`
  ${({ theme }) => theme.th()}

  i {
    font-size: 12px;
    color: #666666;
  }
`;

const Tbody = styled.tbody`
  tr {
    td:nth-child(1) {
      width: 15%;
    }
  }
`;
