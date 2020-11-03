import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/src/stylesheets/datepicker.scss";

function SellerFilterBox() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleChangeRaw = (value) => {
    if (value === "tomorrow") {
      setStartDate(addDays(new Date(), 1));
    }
  };

  return (
    <Wrapper>
      <ItemWrapper>
        <SubTitle>조회 기간</SubTitle>
        <DatePickerWrap startCalender>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="클릭해주세요."
            onChangeRaw={(event) => handleChangeRaw(event.target.value)}
            maxDate={endDate}
          />
        </DatePickerWrap>
        <Deco>~</Deco>
        <DatePickerWrap>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="클릭해주세요."
            onChangeRaw={(event) => handleChangeRaw(event.target.value)}
            minDate={startDate}
          />
        </DatePickerWrap>
      </ItemWrapper>
      <ItemWrapper>
        <Select>
          <option value="">Select</option>
          <option value="상품명">상품명</option>
          <option value="상품번호">상품번호</option>
          <option value="상품코드">상품코드</option>
        </Select>
        <SearchBar type="text" placeholder="검색어를 입력하세요." />
      </ItemWrapper>
      <ItemWrapper>
        <ItemContainer>
          <SubTitle>판매여부 : </SubTitle>
          <BtnGroup>
            <Button total>전체</Button>
            <Button>판매</Button>
            <Button>미판매</Button>
            <Button>미판매(직권)</Button>
          </BtnGroup>
        </ItemContainer>
        <ItemContainer second>
          <SubTitle>진열여부 :</SubTitle>
          <BtnGroup>
            <Button total>전체</Button>
            <Button>진열</Button>
            <Button>미진열</Button>
            <Button>미진열(직권)</Button>
          </BtnGroup>
        </ItemContainer>
      </ItemWrapper>
      <ItemWrapper>
        <SubTitle>할인여부 :</SubTitle>
        <BtnGroup>
          <Button total>전체</Button>
          <Button>할인</Button>
          <Button>미할인</Button>
        </BtnGroup>
      </ItemWrapper>
      <ItemWrapper handle>
        <Button handle search>
          검색
        </Button>
        <Button handle>초기화</Button>
      </ItemWrapper>
    </Wrapper>
  );
}

export default SellerFilterBox;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  border: 3px solid #eeeeee;
  padding: 10px 20px;
`;

const ItemWrapper = styled.div`
  display: flex;
  margin-bottom: ${({ handle }) => (handle ? "none" : "8px")};
  justify-content: ${({ handle }) => (handle ? "center" : "left")};

  input {
    display: inline-block;
    max-width: 100px;
    width: 100%;
    height: 34px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    background: #ffffff;
    cursor: pointer;
    text-align: center;
    ::placeholder {
      text-align: center;
    }

    &:focus {
      border: 0.5px solid #adb3af;
      transition: border 0.2s ease-in-out;
    }
  }
`;

const ItemContainer = styled.div`
  display: flex;
  margin-left: ${({ second }) => (second ? "10%" : "none")};
`;

const SubTitle = styled.div`
  width: 100px;
  font-size: 14px;
  line-height: 34px;
`;

const DatePickerWrap = styled.div`
  height: 34px;

  input {
    border-radius: ${({ startCalender }) =>
      startCalender ? "4px 0 0 4px" : "0 4px 4px 0"};
  }
`;

const Deco = styled.div`
  display: inline-block;
  min-width: 34px;
  height: 34px;
  background: #e5e5e5;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
`;

const SearchBar = styled.input`
  max-width: 234px !important;
  width: 100%;
  height: 30px !important;
  text-align: left !important;
  padding-left: 10px;
  ::placeholder {
    text-align: left !important;
  }
  cursor: text !important;
`;

const Select = styled.select`
  width: 100px;
  padding: 2px 10px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  outline: none;
  font-weight: 100;
  &:focus {
    border: 0.5px solid #adb3af;
    transition: border 0.2s ease-in-out;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: ${({ handle }) => (handle ? "130px" : "auto")};
  height: 34px;
  font-size: 14px;
  padding: 6px 12px;
  margin-right: ${({ total }) => (total ? "6px" : "2px")};
  background: ${({ search }) => (search ? "#428bca" : "#ffffff")};
  color: ${({ search }) => (search ? "#ffffff" : "#000000")};
  border: 1px solid #e5e5e5;
  border-radius: ${({ handle }) => (handle ? "none" : "4px")};
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
    border: 0.5px solid #adb3af;
  }
`;
