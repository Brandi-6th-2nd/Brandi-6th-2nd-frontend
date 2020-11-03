import React, { Fragment, useState, useEffect } from "react";
import DatePick from "../Components/DatePick";
import DatePicker from "react-datepicker";
import "./DatePicker.css";
import styled, { css } from "styled-components";

function FilterArea({ filteredData, setFilteredData }) {
  const [isBtnClicked, setIsBtnClicked] = useState("3일");
  const [isProperty, setIsProperty] = useState(["전체"]);
  const [date, setDate] = useState(
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() - 3
    )
  );
  const [endDate, setEndDate] = useState(new Date());
  const [isSelect, setIsSelect] = useState("");
  const [isTyped, setIsTyped] = useState("");

  const handleBtnClicked = (e) => {
    setFilteredData({ ...filteredData, clickedDate: e.target.value });
    const today = new Date();
    const weeksAgo = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    const threeDays = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 3
    );
    const oneMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      today.getDate()
    );
    const threeMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 3,
      today.getDate()
    );
    setIsBtnClicked(e.target.value);
    if (e.target.value === "전체") {
      setDate();
      setEndDate();
    }
    if (e.target.value === "오늘") {
      setDate(today);
      setEndDate(today);
    }
    if (e.target.value === "1주일") {
      setDate(weeksAgo);
      setEndDate(today);
    }
    if (e.target.value === "3일") {
      setDate(threeDays);
      setEndDate(today);
    }
    if (e.target.value === "1개월") {
      setDate(oneMonth);
      setEndDate(today);
    }
    if (e.target.value === "3개월") {
      setDate(threeMonth);
      setEndDate(today);
    }
    setFilteredData({
      ...filteredData,
      startDate: convertDate(date),
      endDate: convertDate(endDate),
    });
  };

  const convertDate = (date) => {
    const d = new Date(date);
    let year = d.getFullYear();
    let month = 1 + d.getMonth();
    let day = d.getDate();
    // month와 day가 10 이상일 경우 그대로 출력, 10 이하일 경우 앞에 0 을 붙인 뒤 출력
    return `${year}-${month >= 10 ? month : "0" + month}-${
      day >= 10 ? day : "0" + day
    }`;
  };

  const handlePropertyBtn = (e) => {
    const { value } = e.target;

    if (value === "전체") {
      setIsProperty(["전체"]);
    } else if (isProperty.length === 6) {
      setIsProperty(["전체"]);
    } else if (isProperty.find((e) => e === value)) {
      setIsProperty(isProperty.filter((e) => e !== value));
    } else if (isProperty.length > 0) {
      setIsProperty([...isProperty.filter((e) => e !== "전체"), value]);
    } else {
      setIsProperty(["전체"]);
    }
    console.log(isProperty);
  };

  const handleSearch = (e) => {
    if (isSelect != "" && isTyped.length > 0) {
      alert("데이터를 불러오고 있습니다.");
    } else if (isSelect === "" && isBtnClicked === "전체") {
      alert(
        "날짜 조건이 없을 경우에는 필수 필터 조건이 존재합니다.(주문번호 or 주문상세번호 or 주문자명 or 핸드폰번호)"
      );
    } else if (isSelect !== "") {
      alert("검색어를 입력해주세요.");
    } else {
      alert("데이터를 불러오고 있습니다.");
    }
  };

  const handleResetBtn = (e) => {
    const { value } = e.target;
    if (value === "reset") {
      setIsProperty(["전체"]);
      setIsBtnClicked("3일");
      setDate(
        new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() - 3
        )
      );
      setEndDate(new Date());
    }
  };

  const handleSelecter = (e) => {
    setIsSelect(e.target.value);
    setFilteredData({ ...filteredData, isSelect: isSelect });
  };

  const handleInput = (e) => {
    setIsTyped(e.target.value);
    setFilteredData({ ...filteredData, searchInput: isTyped });
  };
  console.log("왜밀려!!", filteredData && filteredData);

  return (
    <Fragment>
      <FilterContainer>
        <SearchFilter>
          <SelecterWrapper onChange={handleSelecter}>
            <optgroup>
              <option value="">Select...</option>
              <option value="orderNum">주문번호</option>
              <option value="detailNum">주문상세번호</option>
            </optgroup>
            <optgroup label="-------------">
              <option value="orderer">주문자명</option>
              <option value="phoneNum">핸드폰 번호</option>
            </optgroup>
            <optgroup label="-------------">
              <option value="seller">셀러명</option>
              <option value="productName">상품명</option>
            </optgroup>
          </SelecterWrapper>
          <SearchInput
            type="text"
            placeholder="검색어를 입력하세요."
            onChange={handleInput}
            value={isTyped}
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
          <DatePick
            date={date}
            setDate={setDate}
            endDate={endDate}
            setEndDate={setEndDate}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
            convertDate={convertDate}
          />
        </DateFilter>
        <SellerProperty>
          <TitleLabel>셀러속성:</TitleLabel>
          <ButtonContainer>
            <PropertyBtns
              type="button"
              value="전체"
              onClick={handlePropertyBtn}
              Clicked={isProperty.find((e) => e === "전체")}
            />
            <PropertyBtns
              type="button"
              value="쇼핑몰"
              onClick={handlePropertyBtn}
              Clicked={isProperty.find((e) => e === "쇼핑몰")}
            />
            <PropertyBtns
              type="button"
              value="마켓"
              onClick={handlePropertyBtn}
              Clicked={isProperty.find((e) => e === "마켓")}
            />
            <PropertyBtns
              type="button"
              value="로드샵"
              onClick={handlePropertyBtn}
              Clicked={isProperty.find((e) => e === "로드샵")}
            />
            <PropertyBtns
              type="button"
              value="디자이너브랜드"
              onClick={handlePropertyBtn}
              Clicked={isProperty.find((e) => e === "디자이너브랜드")}
            />
            <PropertyBtns
              type="button"
              value="제너럴브랜드"
              onClick={handlePropertyBtn}
              Clicked={isProperty.find((e) => e === "제너럴브랜드")}
            />
            <PropertyBtns
              type="button"
              value="내셔널브랜드"
              onClick={handlePropertyBtn}
              Clicked={isProperty.find((e) => e === "내셔널브랜드")}
            />
            <PropertyBtns
              type="button"
              value="뷰티"
              onClick={handlePropertyBtn}
              Clicked={isProperty.find((e) => e === "뷰티")}
            />
          </ButtonContainer>
        </SellerProperty>
        <Buttons>
          <SearchBtn onClick={handleSearch}>검색</SearchBtn>
          <ResetBtn onClick={handleResetBtn} value="reset">
            초기화
          </ResetBtn>
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
  width: 120px;
  font-size: 13px;
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
  width: 125px;
  margin: 0px 0 5px 0;
  padding: 7px 0px 0px 0px;
`;

const ButtonContainer = styled.div`
  padding: 0px 30px 0px 0px;
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

const SellerProperty = styled(DateFilter)``;

const PropertyBtns = styled(DateButton)``;
