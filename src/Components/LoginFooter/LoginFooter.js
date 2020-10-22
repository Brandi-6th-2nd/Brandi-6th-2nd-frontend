import React from 'react';
import styled from 'styled-components';

function LoginFooter() {
  return (
    <Fragment>
      <CompanyInfo>
        회사명 : (주)브랜디 | 주소 : (06223) 서울특별시 강남구 테헤란로 32길 26
        청송빌딩 | 사업자등록번호 : 220-88-93187 I 통신판매업신고 :
        2016-서울강남-00359호 <br /> 이메일 : help@brandi.co.kr | 2018 © brandi
        inc.
      </CompanyInfo>
      <Service>
        <TermsOfService href="https://docs.google.com/document/d/17wXs6bt8g8eiWdWDgdR9pp6Z5OZ9tE22UDaDQYThbwI/edit">
          이용약관
        </TermsOfService>
        <PrivacyPolicy href="https://www.brandi.co.kr/policy">
          개인정보처리방침
        </PrivacyPolicy>
      </Service>
    </Fragment>
  );
}

export default LoginFooter;

const Fragment = styled.div`
  width: 100%;
  height: 107.6px;
  background-color: black;
  padding: 20px 0px;
`;

const CompanyInfo = styled.div`
  width: 800px;
  margin: 0 auto;
  color: #999ba2;
  font-size: 11px;
  line-height: 20px;
`;

const Service = styled.div`
  width: 800px;
  margin: 8px auto 0;
`;

const TermsOfService = styled.a`
  display: inline-block;
  font-size: 11px;
  color: white;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const PrivacyPolicy = styled(TermsOfService.withComponent('a'))`
  :before {
    content: '|';
    color: #999ba2;
  }
`;
