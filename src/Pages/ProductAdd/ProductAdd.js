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
  // DefaultInfo.js 에 props로 전달되는 state 값들
  const [sellOption, setSellOption] = useState("1");
  const [displayOption, setDisplayOpiton] = useState("1");
  const [categoryData, setCategoryData] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSubIndex, setCurrentSubIndex] = useState(0);

  // 상품 등록 페이지에 필요한 데이터들을 서버에 요청하여 setData 함수 실행
  useEffect(() => {
    axios
      .get(`public/Data/ProductAdd/mockData.json`)
      .then((res) => setData(res));
  }, []);

  // categoryData라는 state에 서버에서 받아온 category 데이터를 저장하는 함수
  const setData = (res) => {
    setCategoryData(res.data.data.product_add.category);
  };

  // 선택된, 혹은 작성된 데이터들을 서버에 전송하기 위한 함수
  const sendData = () => {
    console.log(sellOption);
    console.log(displayOption);
    console.log(currentIndex);
    console.log(currentSubIndex);
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
          <DefaultInfo
            sellOption={sellOption}
            setSellOption={setSellOption}
            displayOption={displayOption}
            setDisplayOpiton={setDisplayOpiton}
            categoryData={categoryData}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            currentSubIndex={currentSubIndex}
            setCurrentSubIndex={setCurrentSubIndex}
          />
          <OptionInfo />
          <SellInfo />
          <Btn onClick={sendData}>Temporary Submit Btn</Btn>
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
