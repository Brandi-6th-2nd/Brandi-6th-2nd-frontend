import React from "react";
import styled from "styled-components";

function SellerAcountView() {
  return (
    <Fragment>
      <Page>
        <Span>Page</Span>
        <LeftButton>
          <i className="fas fa-angle-left" />
        </LeftButton>
        <CurrentPage type="text" name="currentPage" defaultValue="1" />
        <RightButton>
          <i className="fas fa-angle-right" />
        </RightButton>
        <Span>of 822</Span>
      </Page>
      <ViewRecords>
        <Span>View</Span>
        <Select name="recordCount" id="recordCount">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="150">150</option>
        </Select>
        <Span>records</Span>
      </ViewRecords>
      <Total>
        <Span>Found total</Span>
        <Span>8,219</Span>
        <Span>records</Span>
      </Total>
    </Fragment>
  );
}

export default SellerAcountView;

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
