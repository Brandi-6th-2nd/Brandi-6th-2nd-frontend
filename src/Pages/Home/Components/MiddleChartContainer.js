import React from "react";
import styled from "styled-components";

function MiddleChartContainer() {
  return (
    <Wrapper>
      <ChartBox>
        <ChartHeader>
          매출 통계 [최근 30일간의 결제완료된 주문 건수의 합계]
        </ChartHeader>
        <ChartContent></ChartContent>
      </ChartBox>
      <ChartBox>
        <ChartHeader>
          매출 통계 [최근 30일간의 결제완료된 주문 금액의 합계]
        </ChartHeader>
        <ChartContent></ChartContent>
      </ChartBox>
    </Wrapper>
  );
}

export default MiddleChartContainer;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 292px;
`;

const ChartBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  border: 1px solid #dddddd;
  margin: 0 10px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
`;

const ChartHeader = styled.header`
  height: 40px;
  background: #f5f5f5;
  color: #808080;
  font-size: 13px;
  line-height: 20px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 1px solid #dddddd;
  padding: 10px 15px;
`;

const ChartContent = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
