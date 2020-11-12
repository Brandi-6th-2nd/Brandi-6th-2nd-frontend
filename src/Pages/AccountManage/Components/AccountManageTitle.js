import React from "react";
import styled from "styled-components";

function AccountManageTitle() {
  return (
    <Fragment>
      <Title>
        셀러정보 수정페이지
        <SubTitle>셀러 정보 조회 / 수정</SubTitle>
      </Title>
      <PageBar>
        <BreadCrumbs>
          <i className="fas fa-home" />
          <Span>회원 관리</Span>
          <i className="fas fa-angle-right" />
          <Span>셀러 계정 관리</Span>
          <i className="fas fa-angle-right" />
          <Span>셀러 정보 조회 / 수정</Span>
        </BreadCrumbs>
      </PageBar>
    </Fragment>
  );
}

export default AccountManageTitle;

const Fragment = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.div`
  width: 100%;
  height: 28px;
  margin-bottom: 15px;
  color: #666;
  font-size: 26px;
`;

const SubTitle = styled.span`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 300;
  color: #888;
`;

const PageBar = styled.div`
  height: 34px;
  margin-left: -20px;
  margin-right: -20px;
  padding-left: 10px;
  padding-right: 20px;
  background-color: #eee;
`;

const BreadCrumbs = styled.div`
  width: auto;
  height: 34px;
  margin-bottom: 10px;
  padding: 8px;

  i {
    margin: 1px 8px;
    color: #999;
    font-size: 12px;
  }
`;

const Span = styled.span`
  font-size: 12px;
`;
