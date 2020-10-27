import React, { Fragment } from "react";
import styled from "styled-components";

function TotalOrderBar() {
  return (
    <Fragment>
      <BarWrapper>
        <TotalOrderWrapper>
          <TotalOrderSpan>
            전체 조회건 수: <b>0</b> 건
          </TotalOrderSpan>
          <ShippingProcessBtn>배송처리</ShippingProcessBtn>
        </TotalOrderWrapper>
        <ExcelDownloadBtns>
          <AllDownload>
            <i className="far fa-file-excel"></i>전체주문 엑셀다운로드
          </AllDownload>
          <SelectDownload>
            <i className="far fa-file-excel"></i>선택주문 엑셀다운로드
          </SelectDownload>
        </ExcelDownloadBtns>
      </BarWrapper>
    </Fragment>
  );
}

export default TotalOrderBar;

const BarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalOrderWrapper = styled.div``;

const TotalOrderSpan = styled.span`
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
`;

const ShippingProcessBtn = styled.button`
  color: #fff;
  background-color: #428bca;
  border-color: #357ebd;
  font-size: 12px;
  font-weight: 400;
  border: 1px solid transparent;
  margin: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #3071a9;
  }
`;

const ExcelDownloadBtns = styled.div``;

const AllDownload = styled.button`
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
  border: 1px solid transparent;
  font-size: 12px;
  font-weight: 400;
  margin: 6px 5px;
  padding: 1px 5px;
  line-height: 1.5;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #449d44;
  }
  i {
    margin-right: 5px;
  }
`;

const SelectDownload = styled(AllDownload)`
  margin-left: 0px;
`;
