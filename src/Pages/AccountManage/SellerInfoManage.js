import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import AccountManageTitle from "./Components/AccountManageTitle";
import BasicInformation from "./Components/BasicInformation";
import DetailInformation from "./Components/DetailInformation";
import ShippingInformation from "./Components/ShippingInformation";
import SellerInfoButtons from "./Components/SellerInfoButtons";
import Footer from "../../Components/Footer/Footer";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API } from "../../config";

function SellerInfoManage() {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });

  const [sellerDetail, setSellerDetail] = useState("");
  const [profile, setProfile] = useState("");
  const [background, setBackground] = useState("");
  const [isAddress, setIsAddress] = useState("");
  const [isZoneCode, setIsZoneCode] = useState("");

  const [isDisabled, setIsDisabled] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/master/sellerInfo/${id}`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        setSellerDetail(res.data);
        setIsDisabled(false);
      });
  }, []);

  useEffect(() => {
    setIsAddress(sellerDetail.post_address);
    setIsZoneCode(sellerDetail.post_number);
  }, [sellerDetail]);

  const onSubmit = async (data) => {
    // formData를 생성해줌
    const formData = new FormData();
    // formData에 profile 사진과 background 사진을 각각 파일 형태로 추가하고,
    formData.append("profile", profile);
    formData.append("background", background);
    // 다른 데이터들(우편번호, 배송정보 등등)을 각각 추가시킴
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    setIsDisabled(true);

    await axios
      // 아이디 주소에 formData를 POST함
      .post(`${API}/master/sellerInfo/${id}`, formData)
      .then((res) => {
        alert("수정을 성공하셨습니다~!");
      })
      .catch((err) => {
        alert("실패하였습니다.");
        setIsDisabled(false);
      });
  };

  const handleCancel = () => {
    console.log("취소되었습니다");
  };

  return (
    <Fragment>
      <Header />
      <Container>
        <SideBar />
        <Content>
          <AccountManageTitle />
          <SellerInfoForm onSubmit={handleSubmit(onSubmit)}>
            <BasicInformation
              register={register}
              sellerDetail={sellerDetail}
              setProfile={setProfile}
            />
            <DetailInformation
              register={register}
              errors={errors}
              sellerDetail={sellerDetail}
              setBackground={setBackground}
              isZoneCode={isZoneCode}
              setIsZoneCode={setIsZoneCode}
              isAddress={isAddress}
              setIsAddress={setIsAddress}
            />
            <ShippingInformation
              register={register}
              errors={errors}
              sellerDetail={sellerDetail}
            />
            <SellerInfoButtons
              handleCancel={handleCancel}
              isDisabled={isDisabled}
            />
          </SellerInfoForm>
        </Content>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default SellerInfoManage;

const Fragment = styled.div``;

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #35363a;
`;

const Content = styled.div`
  width: calc(100% - 215px);
  height: auto;
  margin-top: 45px;
  padding: 25px 20px 20px 20px;
  background-color: #fafafa;
  flex: 1;
`;

const SellerInfoForm = styled.form`
  margin-top: 30px;
  width: 100%;
  height: auto;
`;
