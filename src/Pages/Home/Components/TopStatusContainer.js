import React from "react";
import styled from "styled-components";

function TopStatusContainer({ topStatusData }) {
  return (
    <Wrapper>
      <TopStatusBox>
        {/* Home.js에서 넘겨받은 props(topStatusData)가 선택적으로 출력되도록 설정. product_status 섹션 */}
        {topStatusData &&
          Object.entries(topStatusData.product_status).map((data, index) => {
            return (
              <TopStatusContent key={index}>
                <Title>{data[0]}</Title>
                <Count>{data[1]} 건</Count>
              </TopStatusContent>
            );
          })}
      </TopStatusBox>
      <TopStatusBox>
        {/* Home.js에서 넘겨받은 props(topStatusData)가 선택적으로 출력되도록 설정. product_count 섹션 */}
        {topStatusData &&
          Object.entries(topStatusData.product_count).map((data, index) => {
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
