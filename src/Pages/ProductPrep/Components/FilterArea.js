import React, { Fragment, useState, useEffect } from "react";
import DatePick from "../Components/DatePick";
import styled, { css } from "styled-components";

function FilterArea() {
  const [isBtnClicked, setIsBtnClicked] = useState("3일");

  const handleBtnClicked = (e) => {
    setIsBtnClicked(e.target.value);
  };
  return (
    <Fragment>
      <FilterContainer>
        <SearchFilter>
          <SelecterWrapper>
            <optgroup>
              <option>Select...</option>
              <option>주문번호</option>
              <option>주문상세번호</option>
            </optgroup>
            <optgroup label="-------------">
              <option>주문자명</option>
              <option>핸드폰 번호</option>
            </optgroup>
            <optgroup label="-------------">
              <option>셀러명</option>
              <option>상품명</option>
            </optgroup>
          </SelecterWrapper>
          <SearchInput
            type="text"
            placeholder="검색어를 입력하세요."
          ></SearchInput>
        </SearchFilter>
        <DateFilter>
          <TitleLabel>결제완료일:</TitleLabel>
          <ButtonContainer>
            <DateButton
              type="button"
              value="전체"
              onClick={handleBtnClicked}
              Clicked={isBtnClicked === "전체"}
            />
            <DateButton
              type="button"
              value="오늘"
              onClick={handleBtnClicked}
              Clicked={isBtnClicked === "오늘"}
            />
            <DateButton
              type="button"
              value="3일"
              onClick={handleBtnClicked}
              Clicked={isBtnClicked === "3일"}
            />
            <DateButton
              type="button"
              value="1주일"
              onClick={handleBtnClicked}
              Clicked={isBtnClicked === "1주일"}
            />
            <DateButton
              type="button"
              value="1개월"
              onClick={handleBtnClicked}
              Clicked={isBtnClicked === "1개월"}
            />
            <DateButton
              type="button"
              value="3개월"
              onClick={handleBtnClicked}
              Clicked={isBtnClicked === "3개월"}
            />
          </ButtonContainer>
          <DatePick />
        </DateFilter>
        <Buttons>
          <SearchBtn>검색</SearchBtn>
          <ResetBtn>초기화</ResetBtn>
        </Buttons>
      </FilterContainer>
    </Fragment>
  );
}

export default FilterArea;

const FilterContainer = styled.div`
  border: 3px solid #eee;
  padding-left: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SearchFilter = styled.div`
  margin: 10px 0px 10px 20px;
  width: 100%;
`;

const SelecterWrapper = styled.select`
  height: 30px;
  line-height: 28px;
  padding: 2px 10px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  margin-right: 5px;
`;

const SearchInput = styled.input`
  height: 30px;
  padding: 6px 10px;
  font-size: 13px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  width: 35%;
  background-color: white;
`;

const DateFilter = styled.div`
  display: flex;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const TitleLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  margin: 0px 50px 5px 0;
  padding: 7px 0px 0px 0px;
`;

const ButtonContainer = styled.div`
  padding: 0px 15px 0px 15px;
`;

const DateButton = styled.input`
  height: 32px;
  margin-right: 3px;
  padding: 6px 12px;
  background: #fff;
  font-size: 14px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
  }
  ${({ Clicked }) =>
    Clicked &&
    css`
      background-color: #428bca;
      color: white;
      &:hover {
        background-color: #428bca;
        color: white;
      }
    `}
`;

const Buttons = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const SearchBtn = styled.button`
  padding: 6px 50px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #357ebd;
  color: #fff;
  background-color: #428bca;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #3071a9;
    border-color: #285e8e;
  }
`;

const ResetBtn = styled.button`
  padding: 6px 50px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  &:hover {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
  }
`;
