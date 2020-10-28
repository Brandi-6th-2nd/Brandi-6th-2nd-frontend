import React from "react";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import Footer from "../../Components/Footer/Footer";
import AccountManageTitle from "./Components/AccountManageTitle";
import SellerAccountList from "./Components/SellerAccountList";
import styled from "styled-components";

function AccountManage() {
  return (
    <Fragment>
      <Header />
      <Container>
        <SideBar />
        <Content>
          <AccountManageTitle />
          <SellerAccountList />
        </Content>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default AccountManage;

const Fragment = styled.div``;

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #35363a;
`;

const Content = styled.div`
  width: calc(100% - 215px);
  height: auto;
  margin-top: 45px;
  padding: 25px 20px 20px 20px;
  background-color: #fafafa;
  flex: 1;
`;
