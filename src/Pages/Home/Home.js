import React, { Fragment, useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import TopStatusContainer from "./Components/TopStatusContainer";
import MiddleChartContainer from "./Components/MiddleChartContainer";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import styled from "styled-components";

function Home() {
  const [backData, setBackData] = useState("");
  const [topStatusData, setTopStatusData] = useState("");
  const [middleChartData, setMiddleChartData] = useState("");

  // mock data 테스트 코드 => json 파일의 내용을 backData라는 state 값에 저장
  useEffect(() => {
    axios
      .get(`public/Data/Home/mockData.json`)
      .then((res) => setBackData(res.data.data));
  }, []);

  // top_status_data, middle_chart_data를 각각의 state 값에 저장
  useEffect(() => {
    const { top_status_data, middle_chart_data } = backData;
    setTopStatusData(top_status_data);
    setMiddleChartData(middle_chart_data);
  }, [backData]);

  return (
    <Fragment>
      <Header />
      <Container>
        <SideBar />
        <Article>
          {/* 상품 주문 관련 진행 현황을 담은 컴포넌트, 위에서 저장한 state값을 props로 넘겨줌 */}
          <TopStatusContainer topStatusData={topStatusData} />
          {/* 상품 주문 관련 차트를 담은 컴포넌트, 위에서 저장한 state값을 props로 넘겨줌 */}
          <MiddleChartContainer middleChartData={middleChartData} />
        </Article>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  width: 100%;
  background: #36363a;
`;

const Article = styled.article`
  width: 100%;
  background: #fafafa;
  border-bottom-left-radius: 5px;
  padding: 25px 20px 20px 20px;
`;
