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

function SellerInfoManage() {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });

  const [sellerDetail, setSellerDetail] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleCancel = () => {
    console.log("취소되었습니다");
  };

  useEffect(() => {
    fetch(`/public/Data/AccountManage/sellerDetail.json`)
      .then((response) => response.json())
      .then((response) => setSellerDetail(response.data));
  }, []);

  useEffect(() => {
    console.log(sellerDetail);
  }, [sellerDetail]);

  return (
    <Fragment>
      <Header />
      <Container>
        <SideBar />
        <Content>
          <AccountManageTitle />
          <SellerInfoForm onSubmit={handleSubmit(onSubmit)}>
            <BasicInformation register={register} sellerDetail={sellerDetail} />
            <DetailInformation register={register} errors={errors} />
            <ShippingInformation register={register} errors={errors} />
            <SellerInfoButtons handleCancel={handleCancel} />
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
