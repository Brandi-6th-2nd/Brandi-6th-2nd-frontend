import React, { Fragment } from "react";
import styled from "styled-components";

function ProductTable({ sellerData }) {
  console.log(sellerData);

  return (
    <Fragment>
      <TotalHits>
        전체 조회 건수 : <b>4</b> 건
      </TotalHits>
      <Table>
        <thead>
          <Tr>
            <Th>
              <CheckBox type="checkbox"></CheckBox>
            </Th>
            <Th>등록일</Th>
            <Th>대표이미지</Th>
            <Th>상품명</Th>
            <Th>상품코드</Th>
            <Th>상품번호</Th>
            <Th>판매가</Th>
            <Th>할인가</Th>
            <Th>판매여부</Th>
            <Th>진열여부</Th>
            <Th>할인여부</Th>
            <Th>Actions</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>
              <CheckBox type="checkbox"></CheckBox>
            </Td>
            <Td>2020-10-21 10:16:40</Td>
            <Td>
              <Img src="https://image.brandi.me/cproduct/2020/10/21/17891162_1603243000_image1_S.jpg"></Img>
            </Td>
            <Td>빛빛</Td>
            <Td>SB000000000009042936</Td>
            <Td>17891162</Td>
            <Td>1,000</Td>
            <Td>
              900
              <DiscountPer>( 10 % )</DiscountPer>
            </Td>
            <Td>판매</Td>
            <Td>진열</Td>
            <Td>할인</Td>
            <Td>
              <Button>구매하기</Button>
            </Td>
          </Tr>
        </tbody>
      </Table>
    </Fragment>
  );
}

export default ProductTable;

const TotalHits = styled.div`
  font-size: 13px;
  margin-bottom: 2px;

  b {
    font-weight: bold;
  }
`;

const Table = styled.table`
  width: 100%;
`;

const Th = styled.th`
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  vertical-align: middle;
  background: #eeeeee;
  border: 1px solid #dddddd;
  padding: 8px;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background: #ffffff;
  }
`;

const Td = styled.td`
  font-size: 13px;
  vertical-align: top;
  border: 1px solid #dddddd;
  padding: 8px;
`;

const DiscountPer = styled.div`
  color: red;
  margin-top: 4px;
`;

const CheckBox = styled.input`
  margin: 0;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
`;

const Button = styled.button`
  max-width: 64px;
  height: 30px;
  font-size: 12px;
  padding: 5px 10px;
  background: #3c79d8;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;
