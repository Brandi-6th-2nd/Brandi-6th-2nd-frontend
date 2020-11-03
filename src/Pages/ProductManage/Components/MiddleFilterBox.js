import React, { Fragment } from "react";
import styled from "styled-components";

function MiddleFilterBox() {
  return (
    <Fragment>
      <PageBar>
        <PageStatus>
          <i className="fas fa-bars"></i>
          &nbsp; 상품관리 / 상품 관리 &nbsp;
          <i className="fas fa-chevron-right"></i>
          &nbsp;상품관리 관리 &nbsp;
          <i className="fas fa-chevron-right"></i>
          &nbsp; 리스트
        </PageStatus>
        <Select>
          <option value="10">10개씩 보기</option>
          <option value="20">20개씩 보기</option>
          <option value="50">50개씩 보기</option>
        </Select>
      </PageBar>
      <OptionBar>
        <Button>
          <i className="far fa-file-excel"></i>&nbsp;선택상품 엑셀 다운로드
        </Button>
        <Button>
          <i className="far fa-file-excel"></i>&nbsp;전체상품 엑셀 다운로드
        </Button>
        <Select option>
          <option value="">판매여부</option>
          <option value="판매">판매</option>
          <option value="미판매">미판매</option>
        </Select>
        <Select option>
          <option value="">진열여부</option>
          <option value="진열">진열</option>
          <option value="미진열">미진열</option>
        </Select>
        <Button apply>
          <i className="fas fa-check"></i>&nbsp;적용
        </Button>
      </OptionBar>
    </Fragment>
  );
}

export default MiddleFilterBox;

const PageBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 34px;
  background: #eeeeee;
  margin: 20px -20px 10px;
  padding: 0 20px;
`;

const PageStatus = styled.div`
  font-size: 13px;

  .fa-chevron-right {
    color: #bdbfbe;
    margin: 0 4px;
  }
`;

const Select = styled.select`
  width: 120px;
  height: 30px;
  padding: 2px 10px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  margin-left: ${({ option }) => (option ? "5px" : "none")};
  outline: none;
  font-weight: 400;
  &:focus {
    border: 0.5px solid #adb3af;
    transition: border 0.2s ease-in-out;
  }
`;

const OptionBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  min-height: 30px;
`;

const Button = styled.button`
  height: ${({ apply }) => (apply ? "30px" : "22px")};
  font-size: 12px;
  background: ${({ apply }) => (apply ? "#f0ad4e" : "#5db85c")};
  color: #ffffff;
  border-radius: 3px;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;
