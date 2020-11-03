import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import Footer from "../../Components/Footer/Footer";
import AccountManageTitle from "./Components/AccountManageTitle";
import SellerAccountList from "./Components/SellerAccountList";
import styled from "styled-components";

function AccountManage() {
  const [sellerList, setSellerList] = useState([]);
  const [sellerListCount, setSellerListCount] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [recordCountValue, setRecordCountValue] = useState(10);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetch(`public/Data/AccountManage/SellerList.json`)
      .then((response) => response.json())
      .then((response) => setSellerList(response.SellerList));
  }, []);

  useEffect(() => {
    setFilteredList(sellerList);
  }, [sellerList]);

  useEffect(() => {
    setSellerListCount(sellerList.length);
  }, [sellerList]);

  const handlePrePage = () => {
    setPageNum(pageNum > 1 ? pageNum - 1 : 1);
  };

  const handleNextPage = () => {
    setPageNum(
      pageNum < sellerListCount / recordCountValue
        ? pageNum + 1
        : sellerListCount / recordCountValue
    );
  };

  const handlePageNum = () => {
    setPageNum(pageNum);
  };

  const handleRecordCount = (e) => {
    setRecordCountValue(e.target.value);
  };

  return (
    <Fragment>
      <Header />
      <Container>
        <SideBar />
        <Content>
          <AccountManageTitle />
          <SellerAccountList
            setSellerList={setSellerList}
            sellerList={sellerList}
            sellerListCount={sellerListCount}
            pageNum={pageNum}
            recordCountValue={recordCountValue}
            handlePrePage={handlePrePage}
            handleNextPage={handleNextPage}
            handlePageNum={handlePageNum}
            handleRecordCount={handleRecordCount}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
        </Content>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default AccountManage;

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
