import React, { Fragment } from "react";
import TopStatusContainer from "./Components/TopStatusContainer";
import styled from "styled-components";
import MiddleChartContainer from "./Components/MiddleChartContainer";

function Home() {
  return (
    <Fragment>
      <Header />
      <Container>
        <SideBar />
        <Article>
          <TopStatusContainer />
          <MiddleChartContainer />
        </Article>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Home;

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 45px;
  background: #873b53;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  background: #36363a;
`;

const SideBar = styled.aside`
  max-width: 215px;
  width: 100%;
  height: 100vh;
  background: #36363a;
`;

const Article = styled.article`
  width: 100%;
  height: 100vh;
  background: #fafafa;
  border-bottom-left-radius: 5px;
  padding: 25px 20px 20px 20px;
  margin-top: 45px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 49px;
  background: #36363a;
`;
