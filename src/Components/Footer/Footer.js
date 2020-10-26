import React from "react";
import styled from "styled-components";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <FooterContainer>
      <InnerFooter>
        | 상호 : (주)브랜디 | 주소 : (06223) 서울특별시 강남구 테헤란로 32길 26
        청송빌딩 | 사업자등록번호 : 220-88-93187 | 통신판매업신고 :
        2016-서울강남-00359호 | 이메일 : help@brandi.co.kr
        <br />
        2018 © brandi inc.
      </InnerFooter>
      <FooterTools>
        <GoTop onClick={() => scrollToTop()}>
          <i class="fas fa-angle-up"></i>
        </GoTop>
      </FooterTools>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #35363a;
  padding: 10px 20px 5px 20px;
`;

const InnerFooter = styled.div`
  line-height: 1.42857143;
  color: #999ba2;
  font-size: 12px;
`;

const FooterTools = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  align-content: center;
`;

const GoTop = styled.span`
  display: block;
  text-decoration: none;
  cursor: pointer;
  margin: -4px 0px 0px 0px;
  font-size: 16px;
  padding: 2px 6px 0px 6px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #4d4f55;
  color: #222222;
`;
