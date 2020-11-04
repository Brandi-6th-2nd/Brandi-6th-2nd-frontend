import React, { Fragment, useContext, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";

import { GlobalContext } from "../../../../contexts/globalContext";

export default function ProductInfo() {
  // 상품 정보 고시의 제조 일자 부분에 사용되는 state값. productAddContext.js의 manufactureDate와 분리함.
  // 전역 state 값인 manufactureDate의 값으로 new Date()를 적용한 뒤 아래 handleManufactureDate 함수에서
  // manufactureDate의 값을 string으로 변경하게 되면 Invaild time value라는 에러가 발생해서
  // 의도적으로 전역 상태값(서버로 전달하는 값)과 DatePicker에서 쓰이는 상태값을 분리한 것임.
  const [localManufactureDate, setLocalManufactureDate] = useState(new Date());
  const { state, dispatch } = useContext(GlobalContext);
  const {
    productInfoType,
    manufacturer,
    countryOption,
    manufactureDate,
  } = state.productAdd;

  const handleProductInfoType = (e) => {
    dispatch({ type: "setProductInfoType", value: e.target.value });
  };

  const handleManufacturer = (e) => {
    dispatch({ type: "setManufacturer", value: e.target.value });
  };

  const handleManufactureDate = (date) => {
    // 하단의 DatePicker에서는 현재 파일의 상단에 선언된 localManuFactureDate 상태값을 받아 작동함.
    // 이 함수에서는 현재 선택된 date 값을 localManuFactureDate 상태값으로 설정함.
    setLocalManufactureDate(date);
    // 날짜 정보를 화면에 보이는 것과 같은 양식(YYYY-MM-DD)으로 바꾸기 위한 코드
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month >= 10 ? month : `0${month}`;
    let day = date.getDate();
    day = day >= 10 ? day : `0${day}`;
    const convertedDate = `${year}-${month}-${day}`;

    // 전역 상태값을 convertedDate로 변경함.
    dispatch({ type: "setManufactureDate", value: convertedDate });
    console.log(manufactureDate);
  };

  const handleCountryOption = (e) => {
    dispatch({ type: "setCountryOption", value: e.target.value });
  };

  return (
    <Fragment>
      <Td>
        상품 정보 고시 <mark>*</mark>
      </Td>
      <Td>
        <InputGroup>
          <InputItem>
            <InputRadio
              type="radio"
              name="productInfo"
              id="detailRefer"
              value="detailRefer"
              checked={productInfoType === "detailRefer"}
              onChange={handleProductInfoType}
            />
            <Label htmlFor="detailRefer">상품 상세 참조</Label>
          </InputItem>
          <InputItem>
            <InputRadio
              type="radio"
              name="productInfo"
              id="inputDirect"
              value="inputDirect"
              checked={productInfoType === "inputDirect"}
              onChange={handleProductInfoType}
            />
            <Label htmlFor="inputDirect">직접 입력</Label>
          </InputItem>
        </InputGroup>
        <InputDirectContainer isInputDirect={productInfoType === "inputDirect"}>
          <Wrapper>
            <Title>제조사(수입사) :</Title>
            <Input
              type="text"
              value={manufacturer}
              onChange={handleManufacturer}
            />
          </Wrapper>
          <Wrapper>
            <Title>제조일자 :</Title>
            <CalenderWrapper>
              <DatePicker
                selected={localManufactureDate}
                onChange={(date) => handleManufactureDate(date)}
                dateFormat="yyyy-MM-dd"
                id="calendar"
              />
              <CalenderIcon htmlFor="calendar">
                <i className="far fa-calendar-alt" />
              </CalenderIcon>
            </CalenderWrapper>
          </Wrapper>
          <Wrapper>
            <Title>원산지 :</Title>
            <Select value={countryOption} onChange={handleCountryOption}>
              <option value="etc">기타</option>
              <option value="china">중국</option>
              <option value="korea">한국</option>
              <option value="vietnam">베트남</option>
            </Select>
          </Wrapper>
        </InputDirectContainer>
      </Td>
    </Fragment>
  );
}

const Td = styled.td`
  ${({ theme }) => theme.td()}

  mark {
    background: none;
    color: red;
  }
`;

const InputGroup = styled.div`
  display: flex;
`;

const InputItem = styled.div`
  display: flex;
  align-items: center;
`;

const InputRadio = styled.input`
  margin: 0 5px 0 0;
  cursor: pointer;
  &:checked {
    color: gray;
  }
`;

const Label = styled.label`
  margin-right: 30px;
  cursor: pointer;
`;

const InputDirectContainer = styled.div`
  display: ${({ isInputDirect }) => (isInputDirect ? "block" : "none")};
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;

  input {
    display: inline-block;
    width: 240px;
    height: 34px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    padding: 6px 12px;
    margin-left: 30px;
    background: #ffffff;
    cursor: pointer;

    &:focus {
      border: 0.5px solid #adb3af;
      transition: border 0.2s ease-in-out;
    }
  }
`;

const Title = styled.div`
  width: 92px;
  line-height: 30px;
`;

const CalenderWrapper = styled.div`
  position: relative;
`;

const CalenderIcon = styled.label`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  width: 39px;
  height: 34px;
  padding: 6px 8px;
  background: #e5e5e5;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
`;

const Input = styled.input`
  ${({ theme }) => theme.input()}
`;

const Select = styled.select`
  ${({ theme }) => theme.select()}
  width: 240px;
  height: 34px;
  margin-left: 30px;
`;
