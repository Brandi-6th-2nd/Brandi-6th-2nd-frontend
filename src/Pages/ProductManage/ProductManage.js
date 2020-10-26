import React, { Fragment, useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import MasterProductManage from "./Components/MasterProductManage";
import SellerProductManage from "./Components/SellerProductManage";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import styled from "styled-components";

function ProductManage() {
  const [masterData, setMasterData] = useState("");
  const [sellerData, setSellerData] = useState("");
  // 조건부 렌더링 테스트용 코드
  const [isMaster, setIsMaster] = useState(false);

  useEffect(() => {
    axios
      .get(`public/Data/ProductManage/mockData.json`)
      .then((res) => setData(res));
  }, []);

  const setData = (res) => {
    setMasterData(res.data.data.master_data.product_manage);
    setSellerData(res.data.data.seller_data.product_manage);
  };

  return (
    <Fragment>
      <Header />
      <Container>
        <SideBar />
        <Article>
          {isMaster ? (
            <MasterProductManage masterData={masterData} />
          ) : (
            <SellerProductManage sellerData={sellerData} />
          )}
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
