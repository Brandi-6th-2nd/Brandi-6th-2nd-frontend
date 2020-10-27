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
        <OrderManagePage />
      </OrderPageContainer>
      <Footer />
    </Fragment>
  );
}

export default ProductPrep;

const OrderPageContainer = styled.div`
  display: flex;
`;
