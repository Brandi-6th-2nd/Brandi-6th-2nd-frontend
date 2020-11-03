import React from "react";
import styled from "styled-components";

function SellerAccountView({
  sellerListCount,
  pageNum,
  recordCountValue,
  handlePrePage,
  handleNextPage,
  handlePageNum,
  handleRecordCount,
}) {
  return (
    <Fragment>
      <Page>
        <Span>페이지</Span>
        <LeftButton onClick={handlePrePage}>
          <i className="fas fa-angle-left" />
        </LeftButton>
        <CurrentPage
          type="text"
          name="currentPage"
          onChange={handlePageNum}
          value={pageNum}
        />
        <RightButton onClick={handleNextPage}>
          <i className="fas fa-angle-right" />
        </RightButton>
        <Span> / {sellerListCount / recordCountValue}</Span>
      </Page>
      <ViewRecords>
        <Select value={recordCountValue} onChange={handleRecordCount}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </Select>
        <Span>개 씩</Span>
      </ViewRecords>
      <Total>
        <Span>총</Span>
        <Span>{sellerListCount}</Span>
        <Span>개</Span>
      </Total>
    </Fragment>
  );
}

export default SellerAccountView;

const Fragment = styled.div`
  display: flex;
  font-size: 14px;
`;

const Span = styled.span`
  margin-right: 5px;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  :after {
    content: "|";
    margin: 0 5px 0px 3px;
  }
`;

const LeftButton = styled.button`
  width: 27px;
  height: 30px;
  margin-right: 5px;
  padding: 7px 10px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;

  :hover {
    border: 1px solid #666666;
    background-color: #ddd;
  }
`;

const CurrentPage = styled.input`
  width: 45px;
  height: 30px;
  margin-right: 5px;
  padding-top: 2px;
  text-align: center;
  vertical-align: middle;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const RightButton = styled(LeftButton.withComponent("button"))``;

const ViewRecords = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  :after {
    content: "|";
    margin: 0 5px 0px 3px;
  }
`;

const Select = styled.select`
  width: 80px;
  height: 30px;
  margin-right: 5px;
  padding: 2px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;

  :focus {
    outline: none;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectOption = styled.option``;
