import React from "react";
import styled from "styled-components";
import SellerAcountView from "./SellerAcountView";
import SellerTable from "./SellerTable";

function SellerAccountList() {
  return (
    <Fragment>
      <Content>
        <Title>
          <TitleText>
            <i className="fas fa-list" />
            <Span>셀러 회원 리스트</Span>
          </TitleText>
          <ExcelButton>
            <i className="fas fa-reply fa-flip-horizontal" />
            엑셀 다운로드
          </ExcelButton>
        </Title>
        <WrapSellerList>
          <SellerAcountView />
          <SellerTable />
          <SellerAcountView />
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

const ExcelButton = styled.button`
  padding: 4px 10px;
  color: #fff;
  font-size: 15px;
  background-color: #5cb85c;
  border-color: #4cae4c;
  border-radius: 4px;

  i {
    color: #fff;
    margin-right: 5px;
  }
`;

const WrapSellerList = styled.div`
  padding: 10px;
  width: 100%;
  height: auto;
`;
