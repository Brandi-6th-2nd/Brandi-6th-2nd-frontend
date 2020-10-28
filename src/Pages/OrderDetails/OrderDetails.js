import React, { Fragment } from "react";
import OrderDetailPage from "../OrderDetails/Components/OrderDetailPage";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import styled from "styled-components";

function OrderDetails() {
  return (
    <Fragment>
      <Header />
      <OrderDetailsContainer>
        <SideBar />
        <OrderDetailPage />
      </OrderDetailsContainer>
      <Footer />
    </Fragment>
  );
}

export default OrderDetails;

const OrderDetailsContainer = styled.div`
  display: flex;
`;
