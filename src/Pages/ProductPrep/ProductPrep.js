import React, { Fragment } from "react";
import styled from "styled-components";
import OrderManagePage from "../ProductPrep/Components/OrderManagePage";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";

function ProductPrep() {
  return (
    <Fragment>
      <Header />
      <OrderPageContainer>
        <SideBar />
        <PageContainer>
          <OrderManagePage />
        </PageContainer>
      </OrderPageContainer>
      <Footer />
    </Fragment>
  );
}

export default ProductPrep;

const OrderPageContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;

const PageContainer = styled.div`
  width: calc(100% - 215px);
  flex: 1;
`;
