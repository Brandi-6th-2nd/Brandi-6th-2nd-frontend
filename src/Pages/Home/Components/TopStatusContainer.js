import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function TopStatusContainer() {
  const [backData, setBackData] = useState("");

  // mockData 테스트용 코드
  useEffect(() => {
    axios
      .get(`public/Data/Home/mockData.json`)
      .then((res) => setBackData(res.data.top_status_data));
  }, []);

  return (
    <Wrapper>
      <TopStatusBox>
        {backData &&
          Object.entries(backData.product_status).map((data, index) => {
            return (
              <TopStatusContent key={index}>
                <Title>{data[0]}</Title>
                <Count>{data[1]} 건</Count>
              </TopStatusContent>
            );
          })}
      </TopStatusBox>
      <TopStatusBox>
        {backData &&
          Object.entries(backData.product_count).map((data, index) => {
            return (
              <TopStatusContent key={index}>
                <Title>{data[0]}</Title>
                <Count>{data[1]} 개</Count>
              </TopStatusContent>
            );
          })}
      </TopStatusBox>
    </Wrapper>
  );
}

export default TopStatusContainer;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 187px;
`;

const TopStatusBox = styled.div`
  width: 50%;
  height: 165px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0 15px;
  padding: 15px 20px 0;
  background: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
`;

const TopStatusContent = styled.p`
  display: flex;
  height: 30px;
  justify-content: space-between;
  font-size: 13px;
`;

const Title = styled.span``;

const Count = styled.span`
  font-weight: bold;
`;
