import React, { Fragment } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MenuContent = [
  {
    id: 1,
    tabIcon: "fas fa-home",
    tabName: "홈",
    arrowIcon: "",
  },
  {
    id: 2,
    tabIcon: "far fa-chart-bar",
    tabName: "통계",
    arrowIcon: "fas fa-angle-left",
  },
  {
    id: 3,
    tabIcon: "fas fa-cart-arrow-down",
    tabName: "주문관리",
    arrowIcon: "fas fa-angle-left",
  },
  {
    id: 4,
    tabIcon: "fas fa-shopping-cart",
    tabName: "취소/환불 관리",
    arrowIcon: "fas fa-angle-left",
  },
  {
    id: 5,
    tabIcon: "fas fa-shopping-bag",
    tabName: "상품관리",
    arrowIcon: "fas fa-angle-left",
  },
  {
    id: 6,
    tabIcon: "far fa-smile",
    tabName: "고객응대관리",
    arrowIcon: "fas fa-angle-left",
  },
  {
    id: 7,
    tabIcon: "fas fa-gift",
    tabName: "기획전/쿠폰관리",
    arrowIcon: "fas fa-angle-left",
  },
  {
    id: 8,
    tabIcon: "far fa-user",
    tabName: "회원관리",
    arrowIcon: "fas fa-angle-left",
  },
];

function SideBar() {
  return (
    <Fragment>
      <Header />
      <PageContentWrapper>
        <SideBarMenu>
          <SideBarToggler>
            <i className="fas fa-angle-left"></i>
          </SideBarToggler>
          {MenuContent.map((info, idx) => (
            <MenuContents key={idx}>
              <SpanWrapper>
                <i className={info.tabIcon}></i>
                <span>{info.tabName}</span>
              </SpanWrapper>
              <i className={info.arrowIcon} />
            </MenuContents>
          ))}
        </SideBarMenu>
      </PageContentWrapper>
      <Footer />
    </Fragment>
  );
}

export default SideBar;

const PageContentWrapper = styled.div`
  width: 215px;
  height: 980px;
  background-color: #35363a;
  color: #35363a;
`;

const SideBarMenu = styled.ul`
  display: flex;
  flex-direction: column;
`;

const SideBarToggler = styled.li`
  border-bottom: 1px solid transparent;
  border-radius: 4px 0px 0px 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: right;
  float: right;
  border: 0;
  margin: 15px -1px 15px 191px;
  width: 24px;
  height: 23px;
  background-color: #fcfcfc;
  i {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 2px 3px 8px;
    font-size: 18px;
    height: auto;
    text-shadow: none;
  }
`;

const MenuContents = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 13px 10px 15px;
  width: 100%;
  border-bottom: 1px solid #414247;
  color: #eeeeee;
  cursor: pointer;
  i {
    margin-right: 5px;
  }
`;

const SpanWrapper = styled.div`
  i {
    margin-right: 5px;
    font-size: 16px;
  }
  span {
    color: #f1f1f1;
    font-size: 14px;
    font-weight: 300;
  }
`;
