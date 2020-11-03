import React, { Fragment, useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import DefaultInfo from "./Components/DefaultInfo";
import OptionInfo from "./Components/OptionInfo";
import SellInfo from "./Components/SellInfo";
import Footer from "../../Components/Footer/Footer";

import { GlobalContext } from "../../contexts/globalContext";

export default function ProductAdd() {
  const { state } = useContext(GlobalContext);
  // 서버로 보내는 항목인지 아닌지 애매한 것들은 주석처리 해두었음
  const {
    sellOption,
    // displayOption,
    currentFirstCategory,
    currentSecondCategory,
    // productInfoType,
    manufacturer,
    manufactureDate,
    countryOption,
    productName,
    productDesc,
    productImage,
    // productDetailInfo,
    productDetailInfoImage,
  } = state.productAdd;

  const data = {
    sellOption: sellOption,
    // displayOption: displayOption,
    currentFirstCategory: currentFirstCategory,
    currentSecondCategory: currentSecondCategory,
    // productInfoType: productInfoType,
    manufacturer: manufacturer,
    manufactureDate: manufactureDate,
    countryOption: countryOption,
    productName: productName,
    productDesc: productDesc,
    productImage: productImage,
    // productDetailInfo: productDetailInfo,
    productDetailInfoImage: productDetailInfoImage,
  };

  // 선택된, 혹은 작성된 데이터들을 서버에 전송하기 위한 함수
  const sendData = () => {
    // validation
    if (currentFirstCategory === 0 || currentSecondCategory === 0) {
      alert(`카테고리를 선택해주세요`);
    } else if (productName.includes(`'`) || productName.includes(`"`)) {
      alert(`상품명에 쌍따옴표(") 또는 홑따옴표(')를 포함 할 수 없습니다.`);
    } else if (!productImage.first) {
      alert(`대표 이미지 등록은 필수입니다.`);
    } else {
      // axios.post(`${apiAdress}`, data);
      console.log(data);
    }
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
          <DefaultInfo />
          <OptionInfo />
          <SellInfo />
          <Btn onClick={sendData}>Temporary Submit Btn</Btn>
        </Article>
      </Container>
      <Footer />
    </Fragment>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  background: #36363a;
`;

const Article = styled.article`
  width: 100%;
  background: #fafafa;
  border-bottom-left-radius: 5px;
  padding: 25px 5px 10px;
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 100;
  color: #666666;
  padding: 45px 15px 0 15px;

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

const Btn = styled.button`
  ${({ theme }) => theme.button(``, `14px`, `#e5e5e5`)}
  margin-top: 15px;
`;
