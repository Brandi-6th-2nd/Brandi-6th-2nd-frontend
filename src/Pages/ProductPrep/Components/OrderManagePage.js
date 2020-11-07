import React, { Fragment, useState } from "react";
import FilterArea from "../Components/FilterArea";
import TableContainer from "../Components/TableContainer";
import styled from "styled-components";

function OrderManagePage() {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isChecked, setIsChecked] = useState([]);
  const [filteredData, setFilteredData] = useState({
    limit: "50",
    offset: "0",
    filter_ordering: 1,
  });
  return (
    <Fragment>
      <ContentsWrapper>
        <PageTitle>
          <span>주문 관리</span>
          <TitleInfo>
            상품준비 관리
            <br />( 상품준비 단계에서는 구매회원의 주문취소가 가능하며,
            배송준비단계로 처리할 경우 3영업일 동안은 구매회원의 주문취소가
            불가능합니다. )
            <br />( 배송준비로 변경하신 후 3영업일 이내로 상품 배송이 시작되지
            않을 경우 구매회원의 주문취소가 가능하며 이에 따른 책임은 판매자
            회원에게 있습니다. (전자상거래법 제 15조 1항에 근거) )
          </TitleInfo>
        </PageTitle>
        <FilterArea
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
        <TableContainer
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          isAllChecked={isAllChecked}
          setIsAllChecked={setIsAllChecked}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      </ContentsWrapper>
    </Fragment>
  );
}

export default OrderManagePage;

const ContentsWrapper = styled.section`
  padding: 70px 20px 20px 20px;
  width: 100%;
  background-color: #fafafa;
`;

const PageTitle = styled.h3`
  font-size: 26px;
  color: #666;
  letter-spacing: -1px;
  display: block;
  margin: 0px 0px 15px 0px;
  font-weight: 300;
  span {
    margin-right: 6px;
  }
`;

const TitleInfo = styled.small`
  font-size: 14px;
  letter-spacing: 0px;
  font-weight: 300;
  color: #888;
`;
