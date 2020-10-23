import React, { Fragment, useState } from "react";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import SellerProductManage from "./Components/SellerProductManage";
import Footer from "../../Components/Footer/Footer";
import styled from "styled-components";

function ProductManage() {
  return (
    <Fragment>
      <Header />
      <Container>
        <SideBar />
        <Article>
          <SellerProductManage />
        </Article>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default ProductManage;

const Container = styled.div`
  display: flex;
  width: 100%;
  background: #36363a;
`;

const Article = styled.article`
  width: 100%;
  height: 100vh;
  background: #fafafa;
  border-bottom-left-radius: 5px;
  padding: 25px 20px 20px;
`;
