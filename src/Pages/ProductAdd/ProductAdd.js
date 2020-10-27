import React, { Fragment, useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import DefaultInfo from "./Components/DefaultInfo";
import OptionInfo from "./Components/OptionInfo";
import SellInfo from "./Components/SellInfo";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import styled from "styled-components";

function ProductAdd() {
  const [categoryData, setCategoryData] = useState("");

  useEffect(() => {
    axios
      .get(`public/Data/ProductAdd/mockData.json`)
      .then((res) => setData(res));
  }, []);

  const setData = (res) => {
    setCategoryData(res.data.data.product_add.category);
  };

  return (
    <Fragment>
      <Header />
      <Container>
        <SideBar />
        <Article>
          <Title>
            상품 등록 <small>상품 정보 등록</small>
          </Title>
          <PageBar>
            <i className="fas fa-home icon"></i>
            &nbsp; 상품관리 &nbsp;
            <i className="fas fa-chevron-right icon"></i>
            &nbsp; 상품 관리 &nbsp;
            <i className="fas fa-chevron-right icon"></i>
            &nbsp; 상품 등록
          </PageBar>
          <DefaultInfo categoryData={categoryData} />
          <OptionInfo />
          <SellInfo />
        </Article>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default ProductAdd;

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
  padding: 25px 5px 10px;
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 100;
  color: #666666;
  margin-bottom: 15px;

  small {
    font-size: 14px;
    color: #888888;
  }
`;

const PageBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  height: 34px;
  background: #eeeeee;
  margin: 20px -5px 10px;
  padding: 0 20px;

  .icon {
    color: #999999;
  }
`;
