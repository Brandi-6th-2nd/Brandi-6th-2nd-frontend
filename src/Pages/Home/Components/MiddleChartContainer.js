import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

function MiddleChartContainer({ middleChartData }) {
  // 차트 데이터 관련 코드. 차트 옵션(css) 관련 설정은 최하단에 배치해두었음.

  const orderCountSumKeys =
    middleChartData &&
    Object.keys(middleChartData.order_count_sum).map((date) => {
      const splited = date.split("/");
      return `${splited[1]}/${splited[2]}`;
    });

  const orderPriceSumKeys =
    middleChartData &&
    Object.keys(middleChartData.order_price_sum).map((date) => {
      const splited = date.split("/");
      return `${splited[1]}/${splited[2]}`;
    });

  // useEffect(() => {
  //   console.log(orderCountSumOptions.tooltips.callbacks.label);
  // });

  // 주문건수 합계 데이터. Home.js에서 넘겨받은 props(middleChartData)가 선택적으로 출력되도록 설정. order_count_sum 섹션
  const orderCountSumData = {
    labels: orderCountSumKeys,
    datasets: [
      {
        data: middleChartData && Object.values(middleChartData.order_count_sum),
        fill: false,
        borderColor: "#D1260F",
        lineTension: 0.01,
      },
    ],
  };
  // 주문금액 합계 데이터. Home.js에서 넘겨받은 props(middleChartData)가 선택적으로 출력되도록 설정. order_price_sum 섹션
  const orderPriceSumData = {
    labels: orderPriceSumKeys,
    datasets: [
      {
        data: middleChartData && Object.values(middleChartData.order_price_sum),
        fill: false,
        borderColor: "#37B7F3",
        lineTension: 0.01,
      },
    ],
  };

  return (
    <Wrapper>
      <ChartBox>
        <ChartHeader>
          <ChartIcon alt="chartIcon" src={ChartIconSrc} />
          매출 통계 [최근 30일간의 결제완료된 주문 건수의 합계]
        </ChartHeader>
        <ChartContent>
          <Line data={orderCountSumData} options={orderCountSumOptions} />
        </ChartContent>
      </ChartBox>
      <ChartBox>
        <ChartHeader>
          <ChartIcon alt="chartIcon" src={ChartIconSrc} />
          매출 통계 [최근 30일간의 결제완료된 주문 금액의 합계]
        </ChartHeader>
        <ChartContent>
          <Line data={orderPriceSumData} options={orderPriceSumOptions} />
        </ChartContent>
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
  height: 272px;
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

const ChartIcon = styled.img`
  width: 14px;
  height: 16px;
  padding-top: 5px;
  margin-right: 3px;
`;

const ChartIconSrc =
  "https://icon-library.com/images/bar-graph-icon-png/bar-graph-icon-png-10.jpg";

const ChartContent = styled.div`
  width: 100%;
  height: 230px;
  background: #ffffff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

// 차트 옵션 코드 시작

// 차트 상단 라벨 삭제하기 위한 코드
Chart.defaults.global.legend.display = false;

const orderCountSumOptions = {
  // 반응형 레이아웃은 유지하되 차트의 높이 조절을 가능하게 하기 위한 설정
  responsive: true,
  maintainAspectRatio: false,

  // 마우스 hover 시 출력되는 툴팁 설정
  tooltips: {
    callbacks: {
      title: () => {
        return "결제건수";
      },
      label: function (tooltipItem) {
        const year = 20;
        // const year =
        //   middleChartData &&
        //   Object.keys(middleChartData.order_count_sum).map((date) => {
        //     const splited = date.split("/");
        //     return splited[0];
        //   });
        const dateArr = tooltipItem.xLabel.split("/");
        return `${year}년 ${dateArr[0]}월 ${dateArr[1]}일 : ${tooltipItem.yLabel} 건`;
      },
    },
    caretPadding: 15,
    caretSize: 0,
    cornerRadius: 2,
    displayColors: false,
    borderColor: "#D1260F",
    borderWidth: 2,
    backgroundColor: "#ffffff",
    titleFontColor: "#000000",
    bodyFontColor: "#000000",
  },
};

const orderPriceSumOptions = {
  responsive: true,
  maintainAspectRatio: false,
  // 숫자를 1000 단위로 구분하기 위한 설정
  scales: {
    yAxes: [
      {
        ticks: {
          callback(value) {
            return Number(value).toLocaleString();
          },
        },
      },
    ],
  },

  tooltips: {
    callbacks: {
      title: () => {
        return "결제금액";
      },
      label: function (tooltipItem) {
        const year = 20;

        const dateArr = tooltipItem.xLabel.split("/");
        return `${year}년 ${dateArr[0]}월 ${
          dateArr[1]
        }일 : ${tooltipItem.yLabel.toLocaleString()} 원`;
      },
    },
    caretPadding: 15,
    caretSize: 0,
    cornerRadius: 2,
    displayColors: false,
    borderColor: "#37B7F3",
    borderWidth: 2,
    backgroundColor: "#ffffff",
    titleFontColor: "#000000",
    bodyFontColor: "#000000",
  },
};

// 차트 옵션 끝
