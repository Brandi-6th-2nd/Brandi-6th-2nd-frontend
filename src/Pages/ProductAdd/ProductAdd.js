import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
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
  const { state, dispatch } = useContext(GlobalContext);
  const {
    sellOption,
    displayOption,
    currentFirstCategory,
    currentSecondCategory,
    productInfoType,
    manufacturer,
    manufactureDate,
    countryOption,
    productName,
    productDesc,
    productImage,
    productDetailInfo,
    productDetailInfoImage,
  } = state.productAdd;

  // 이미지 데이터를 제외한 데이터 (이미지는 아래 formData에서 다른 키 값으로 전달함)
  const defaultInfoData = {
    sellOption: sellOption,
    displayOption: displayOption,
    currentFirstCategory: currentFirstCategory,
    currentSecondCategory: currentSecondCategory,
    productInfoType: productInfoType,
    manufacturer: manufacturer,
    manufactureDate: manufactureDate,
    countryOption: countryOption,
    productName: productName,
    productDesc: productDesc,
    productDetailInfo: productDetailInfo,
  };

  const history = useHistory();

  // 선택된, 혹은 작성된 데이터들을 서버에 전송하기 위한 함수
  const sendData = async () => {
    const formData = new FormData();
    Object.keys(defaultInfoData).forEach((key) =>
      formData.append(key, defaultInfoData[key])
    );
    formData.append("image_1", productImage.first);
    formData.append("image_2", productImage.second);
    formData.append("image_3", productImage.third);
    formData.append("image_4", productImage.fourth);
    formData.append("image_5", productImage.fifth);
    formData.append("productDetailInfoImage", productDetailInfoImage);

    // validation
    if (currentFirstCategory === 0 || currentSecondCategory === 0) {
      alert(`카테고리를 선택해주세요`);
    } else if (productName.includes(`'`) || productName.includes(`"`)) {
      alert(`상품명에 쌍따옴표(") 또는 홑따옴표(')를 포함 할 수 없습니다.`);
    } else if (!productImage.first) {
      alert(`대표 이미지 등록은 필수입니다.`);
    } else {
      // 서버 통신 시 사용할 코드
      await axios
        .post(`http://10.251.1.158:5000/product`, formData, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          alert("상품 등록을 성공하였습니다.");
          history.push("/productmanage");
        })
        .catch((res) => {
          alert("상품 등록이 실패하였습니다.");
        });

      // 상품 등록 후 적용되었던 상태값들 초기화
      dispatch({ type: "reset", value: state });

      // formData 삽입값 확인용 코드
      // for (var value of formData.values()) {
      //   console.log(value);
      // }

      // 이미지 데이터를 제외한 모든 기본 정보 데이터 확인
      // console.log(defaultInfoData);
    }
  };

  const cancleProductAdd = () => {
    if (confirm("정말 취소하시겠습니까?")) {
      history.push("/productmanage");
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
          <BtnGroup>
            <Btn onClick={sendData}>등록</Btn>
            <Btn onClick={cancleProductAdd} cancle>
              취소
            </Btn>
          </BtnGroup>
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
  display: flex;
  justify-content: center;
  flex-direction: column;
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

const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
  ${({ theme }) => theme.button(``, `14px`, ``)}
  margin: 15px 2px 0;
  background: ${({ cancle }) => (cancle ? "#D95350" : "#5DB85C")};
  color: #ffffff;
  outline: none;
`;
