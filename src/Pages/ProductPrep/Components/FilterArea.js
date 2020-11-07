import React, { Fragment, useState, useEffect } from "react";
import DatePick from "../Components/DatePick";
import axios from "axios";
import DatePicker from "react-datepicker";
import "./DatePicker.css";
import styled, { css } from "styled-components";

function FilterArea({ filteredData, setFilteredData }) {
  const [isBtnClicked, setIsBtnClicked] = useState("3일");
  const [isProperty, setIsProperty] = useState(["1"]);
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

  const [renderValue, setRenderValue] = useState(false);

  const handleBtnClicked = (e) => {
    // setFilteredData({ ...filteredData, clickedDate: e.target.value });
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
      setDate(null);
      setEndDate(new Date());
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
    setRenderValue(!renderValue);
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
    const { name } = e.target;
    // setRenderValue(!renderValue);
    if (name === "1" || isProperty.length === 6) {
      setIsProperty(["1"]);
    } else if (isProperty.find((e) => e === name)) {
      setIsProperty(isProperty.filter((e) => e !== name));
      isProperty.length === 1 && setIsProperty(["1"]);
      // setIsProperty(["1"]);
    } else if (isProperty.length > 0) {
      setIsProperty([...isProperty.filter((e) => e !== "1"), name]);
    }
    setRenderValue(!renderValue);

    //  else {
    //   setIsProperty(["1"]);
    // }
  };
  console.log(">>>>>>>>>>>>>>", isProperty);

  const handleSearch = async (e) => {
    if (isSelect != "" && isTyped.length > 0) {
      setFilteredData({
        ...filteredData,
        filter_date_from: convertDate(date),
        filter_date_to: convertDate(endDate),
        seller_attribute_id: isProperty.sort().join(),
        searching: isTyped,
        searching_category: isSelect,
      });
    } else if (isSelect === "" && isBtnClicked === "전체") {
      alert(
        "날짜 조건이 없을 경우에는 필수 필터 조건이 존재합니다.(주문번호 or 주문상세번호 or 주문자명 or 핸드폰번호)"
      );
    } else if (isSelect !== "") {
      alert("검색어를 입력해주세요.");
    } else {
      setFilteredData({
        ...filteredData,
        filter_date_from: convertDate(date),
        filter_date_to: convertDate(endDate),
        seller_attribute_id: isProperty.sort().join(),
        searching: isTyped,
        searching_category: isSelect,
      });
    }
    const result = await axios.get(
      `http://10.58.3.246:5000/orders/lists/4`,
      {
        params: filteredData,
      },
      {
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      }
    );
    setFilteredData(result);
  };

  const handleResetBtn = async (e) => {
    const { value } = e.target;
    if (value === "reset") {
      setIsProperty(["1"]);
      setIsBtnClicked("3일");
      setDate(
        new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() - 3
        )
      );
      setEndDate(new Date());
      setIsTyped("");
      setIsSelect("");
    }
    setRenderValue(!renderValue);
    const result = await axios.get(
      `http://10.58.3.246:5000/orders/lists/4`,
      {
        params: {
          filter_date_from: convertDate(
            new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000)
          ),
          filter_date_to: convertDate(new Date()),
          seller_attribute_id: "1",
        },
      },
      {
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      }
    );
    setFilteredData(result);
  };
  console.log("wwww>>>>", filteredData);

  const handleSelecter = (e) => {
    setIsSelect(e.target.value);
    setRenderValue(!renderValue);
  };

  const handleInput = (e) => {
    setIsTyped(e.target.value);
    setRenderValue(!renderValue);
  };

  useEffect(() => {
    // setFilteredData({ ...filteredData });
    setFilteredData({
      ...filteredData,
      filter_date_from: convertDate(date),
      filter_date_to: convertDate(endDate),
      seller_attribute_id: isProperty.sort().join(),
      searching: isTyped,
      searching_category: isSelect,
    });
  }, [renderValue]);

  return (
    <Fragment>
      <FilterContainer>
        <SearchFilter>
          <SelecterWrapper value={isSelect} onChange={handleSelecter}>
            <optgroup>
              <option value="" label="Select..."></option>
              <option value="1" label="주문번호"></option>
              <option value="2" label="주문상세번호"></option>
            </optgroup>
            <optgroup label="-------------">
              <option value="3" label="주문자명"></option>
              <option value="4" label="핸드폰 번호"></option>
            </optgroup>
            <optgroup label="-------------">
              <option value="5" label="셀러명"></option>
              <option value="6" label="상품명"></option>
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
              name="1"
              Clicked={isBtnClicked === "전체"}
            />
            <DateButton
              type="button"
              value="오늘"
              name="2"
              onClick={handleBtnClicked}
              Clicked={isBtnClicked === "오늘"}
            />
            <DateButton
              type="button"
              value="3일"
              name="3"
              onClick={handleBtnClicked}
              Clicked={isBtnClicked === "3일"}
            />
            <DateButton
              type="button"
              value="1주일"
              name="4"
              onClick={handleBtnClicked}
              Clicked={isBtnClicked === "1주일"}
            />
            <DateButton
              type="button"
              value="1개월"
              name="5"
              onClick={handleBtnClicked}
              Clicked={isBtnClicked === "1개월"}
            />
            <DateButton
              type="button"
              value="3개월"
              name="6"
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
              name="1"
              onClick={handlePropertyBtn}
              Clicked={isProperty.find((e) => e === "1")}
            />
            <PropertyBtns
              type="button"
              value="쇼핑몰"
              name="2"
              onClick={handlePropertyBtn}
              Clicked={isProperty.find((e) => e === "2")}
            />
            <PropertyBtns
              type="button"
              value="마켓"
              name="3"
              onClick={handlePropertyBtn}
              Clicked={isProperty.find((e) => e === "3")}
            />
            <PropertyBtns
              type="button"
              value="로드샵"
              name="4"
              onClick={handlePropertyBtn}
              Clicked={isProperty.find((e) => e === "4")}
            />
            <PropertyBtns
              type="button"
              value="디자이너브랜드"
              name="5"
              onClick={handlePropertyBtn}
              Clicked={isProperty.find((e) => e === "5")}
            />
            <PropertyBtns
              type="button"
              value="제너럴브랜드"
              name="6"
              onClick={handlePropertyBtn}
              Clicked={isProperty.find((e) => e === "6")}
            />
            <PropertyBtns
              type="button"
              value="내셔널브랜드"
              name="7"
              onClick={handlePropertyBtn}
              Clicked={isProperty.find((e) => e === "7")}
            />
            <PropertyBtns
              type="button"
              value="뷰티"
              name="8"
              onClick={handlePropertyBtn}
              Clicked={isProperty.find((e) => e === "8")}
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
