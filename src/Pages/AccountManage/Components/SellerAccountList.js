import React from "react";
import styled from "styled-components";
import SellerAccountView from "./SellerAccountView";
import SellerTable from "./SellerTable";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function SellerAccountList({
  sellerList,
  setSellerList,
  sellerListCount,
  pageNum,
  recordCountValue,
  handlePrePage,
  handleNextPage,
  handlePageNum,
  handleRecordCount,
  filteredList,
  setFilteredList,
}) {
  return (
    <Fragment>
      <Content>
        <Title>
          <TitleText>
            <i className="fas fa-list" />
            <Span>셀러 회원 리스트</Span>
          </TitleText>
          <ExcelButton
            as={ReactHTMLTableToExcel}
            id="test-table-xls-button"
            className="fas fa-share download-table-xls-button"
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText=" 엑셀다운로드"
          ></ExcelButton>
        </Title>
        <WrapSellerList>
          <SellerAccountView
            sellerList={sellerList}
            sellerListCount={sellerListCount}
            pageNum={pageNum}
            recordCountValue={recordCountValue}
            handlePrePage={handlePrePage}
            handleNextPage={handleNextPage}
            handlePageNum={handlePageNum}
            handleRecordCount={handleRecordCount}
          />
          <SellerTable
            sellerList={sellerList}
            setSellerList={setSellerList}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
          <SellerAccountView
            sellerList={sellerList}
            sellerListCount={sellerListCount}
            pageNum={pageNum}
            recordCountValue={recordCountValue}
            handlePrePage={handlePrePage}
            handleNextPage={handleNextPage}
            handlePageNum={handlePageNum}
            handleRecordCount={handleRecordCount}
          />
        </WrapSellerList>
      </Content>
    </Fragment>
  );
}

export default SellerAccountList;

const Fragment = styled.div``;

const Content = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 38px;
  background-color: #eee;
  border-radius: 4px 4px 0 0;
`;

const TitleText = styled.div`
  display: flex;
  align-items: center;
  i {
    color: #666;
    font-size: 12px;
  }
`;
const Span = styled.span`
  margin-left: 5px;
  color: #333;
  font-size: 16px;
`;

const ExcelButton = styled.div`
  padding: 4px 10px;
  height: 30px;
  color: #fff;
  font-size: 15px;
  background-color: #5cb85c;
  border-color: #4cae4c;
  border-radius: 4px;
  cursor: pointer;

  i {
    color: #fff;
    margin-right: 5px;
  }

  .download-table-csv-button {
    color: white;
  }

  :hover {
    background-color: #4cae4c;
  }
`;

const WrapSellerList = styled.div`
  padding: 10px;
  width: 100%;
  height: auto;
`;
