import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";

function SellerTable({ sellerList, filteredList, setFilteredList }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [inputs, setInputs] = useState({
    seller_no: "",
    seller_id: "",
    seller_en_name: "",
    seller_ko_name: "",
    seller_charger: "",
    seller_status: "",
    seller_telno: "",
    seller_email: "",
    seller_property: "",
  });

  const {
    seller_no,
    seller_id,
    seller_en_name,
    seller_ko_name,
    seller_charger,
    seller_status,
    seller_telno,
    seller_email,
    seller_property,
  } = inputs;

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [`${name}`]: value,
    });
  };

  const handleSearch = () => {
    setFilteredList(
      sellerList.filter((el) =>
        el.id ? el.id === seller_no : el.id === el.id
      ) &&
        sellerList.filter((el) =>
          el.account ? el.account === seller_id : el.account === el.account
        )
    );
  };

  const handleReset = () => {
    seller_no_input.reset();
    seller_id_input.reset();
    seller_en_name_input.reset();
    seller_ko_name_input.reset();
    seller_charger_input.reset();
    seller_telno_input.reset();
    seller_email_input.reset();
    setFilteredList(sellerList);

    setInputs({
      [`${name}`]: "",
    });
  };

  useEffect(() => {
    console.log(filteredList);
  }, [filteredList]);

  return (
    <Fragment>
      <Table id="table-to-xls">
        <tbody>
          <Tr>
            {/* 테이블 제목 부분 */}
            <Th>
              <input type="checkbox" />
            </Th>
            <Th>번호</Th>
            <Th>셀러아이디</Th>
            <Th>영문이름</Th>
            <Th>한글이름</Th>
            <Th>담당자이름</Th>
            <Th>셀러상태</Th>
            <Th>담당자연락처</Th>
            <Th>담당자이메일</Th>
            <Th>셀러속성</Th>
            <Th>등록일시</Th>
            <Th>Actions</Th>
          </Tr>
          {/* 필터 부분 */}
          <Tr>
            {/* 체크박스를 위한 빈 칸*/}
            <Td></Td>
            {/* 번호 필터 부분 */}
            <Td>
              <form id="seller_no_input">
                <Input
                  type="text"
                  autoComplete="off"
                  name="seller_no"
                  onChange={handleInput}
                />
              </form>
            </Td>
            {/* 셀러아이디 필터 부분 */}
            <Td>
              <form id="seller_id_input">
                <Input
                  type="text"
                  autoComplete="off"
                  name="seller_id"
                  onChange={handleInput}
                />
              </form>
            </Td>
            {/* 영문이름 필터 부분 */}
            <Td>
              <form id="seller_en_name_input">
                <Input
                  type="text"
                  autoComplete="off"
                  name="seller_en_name"
                  onChange={handleInput}
                />
              </form>
            </Td>
            {/* 한글이름 필터 부분 */}
            <Td>
              <form id="seller_ko_name_input">
                <Input
                  type="text"
                  autoComplete="off"
                  name="seller_ko_name"
                  onChange={handleInput}
                />
              </form>
            </Td>
            {/* 담당자이름 필터 부분 */}
            <Td>
              <form id="seller_charger_input">
                <Input
                  type="text"
                  autoComplete="off"
                  name="seller_charger"
                  onChange={handleInput}
                />
              </form>
            </Td>
            {/* 셀러상태 필터 부분 */}
            <Td>
              <Select name="seller_status" onChange={handleInput}>
                <option value="Select">Select</option>
                <option value="입점대기">입점대기</option>
                <option value="입점">입점</option>
                <option value="퇴점">퇴점</option>
                <option value="퇴점대기">퇴점대기</option>
                <option value="휴점">휴점</option>
              </Select>
            </Td>
            {/* 담당자 연락처 필터 부분 */}
            <Td>
              <form id="seller_telno_input">
                <Input
                  type="text"
                  autoComplete="off"
                  name="seller_telno"
                  onChange={handleInput}
                />
              </form>
            </Td>
            {/* 담당자 이메일 필터 부분 */}
            <Td>
              <form id="seller_email_input">
                <Input
                  type="text"
                  autoComplete="off"
                  name="seller_email"
                  onChange={handleInput}
                />
              </form>
            </Td>
            {/* 셀러속성 필터 부분*/}
            <Td>
              <Select name="seller_property" onChange={handleInput}>
                <option value="Select">Select</option>
                <option value="쇼핑몰">쇼핑몰</option>
                <option value="마켓">마켓</option>
                <option value="로드샵">로드샵</option>
                <option value="디자이너브랜드">디자이너브랜드</option>
                <option value="제너럴브랜드">제너럴브랜드</option>
                <option value="내셔널브랜드">내셔널브랜드</option>
                <option value="뷰티">뷰티</option>
              </Select>
            </Td>
            {/* 등록일시 캘린더 등록할 부분 */}
            <Td>
              <StartDate>
                <Calendar htmlFor="sellerTableStartDate">
                  <i className="far fa-calendar-alt" />
                </Calendar>
                <DatePicker
                  id="sellerTableStartDate"
                  className="startDatePicker"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="From"
                  popperModifiers={{ preventOverflow: { enabled: true } }}
                />
              </StartDate>
              <EndDate>
                <Calendar htmlFor="sellerTableEndDate">
                  <i className="far fa-calendar-alt" />
                </Calendar>
                <DatePicker
                  id="sellerTableEndDate"
                  className="endDatePicker"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="To"
                  popperModifiers={{ preventOverflow: { enabled: true } }}
                />
              </EndDate>
            </Td>
            {/* 액션 버튼 등록할 부분 */}
            <Td>
              <ButtonDiv>
                <SearchButton onClick={handleSearch}>
                  <i className="fas fa-search" />
                  Search
                </SearchButton>
              </ButtonDiv>
              <ButtonDiv>
                <ResetButton onClick={handleReset}>
                  <i className="fas fa-times" />
                  Reset
                </ResetButton>
              </ButtonDiv>
            </Td>
          </Tr>
          {/* 셀러 데이터 출력하는 부분 */}
          {filteredList &&
            filteredList.map((el) => (
              <Tr key={el.id}>
                <Td>
                  <input type="checkbox" />
                </Td>
                <Td>{el.id}</Td>
                <Td>{el.account}</Td>
                <Td>{el.eng_name}</Td>
                <Td>{el.kor_name}</Td>
                <Td>{el.manager_name}</Td>
                <Td>{el.status_name}</Td>
                <Td>{el.manager_phone_number}</Td>
                <Td>{el.manager_email}</Td>
                <Td>{el.seller_category}</Td>
                <Td>{el.register_date}</Td>
                <Td>
                  <button>{el.action[0]}</button>
                  <button>{el.action[1]}</button>
                  <button>{el.action[2]}</button>
                </Td>
              </Tr>
            ))}
        </tbody>
      </Table>
    </Fragment>
  );
}

export default SellerTable;

const Fragment = styled.div`
  margin: 10px 0px;
  width: 100%;
  overflow: auto;
  border-right: 1px solid #ddd;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

const Table = styled.table`
  white-space: nowrap;
  width: 100%;

  Tr:nth-child(2n + 1) {
    background-color: #f1f1f1;
  }
`;

const Tr = styled.tr`
  width: auto;
`;

const Th = styled.th`
  padding: 8px;
  width: auto;
  font-size: 14px;
  text-align: left;
  font-weight: bolder;
  border-left: 1px solid #ddd;
  background-color: #eee;
`;

const Td = styled.td`
  padding: 8px;
  width: auto;
  font-size: 14px;
  text-align: left;
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 56.6px;
  height: 30px;
  padding: 2px 10px;
  font-size: 13px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const StartDate = styled.div`
  position: relative;
  padding: 5px 10px;
  width: 123px;
  height: 30px;
  background-color: #eeeeee;
  border: 1px solid #e5e5e5;

  .startDatePicker {
    width: 80px;
  }

  .endDatePicker {
    width: 80px;
  }
`;

const EndDate = styled(StartDate.withComponent("div"))`
  margin-top: 5px;
`;

const Calendar = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 28px;
  padding: 6px 8px;
  background-color: white;
  border-left: 1px solid #e5e5e5;

  :hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

const SearchButton = styled.button`
  width: auto;
  height: 30px;
  padding: 2px 10px;
  font-size: 13px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;

  i {
    margin-right: 3px;
  }

  :hover {
    background-color: #eea236;
  }
`;

const ResetButton = styled.button`
  width: auto;
  height: 30px;
  padding: 2px 10px;
  font-size: 13px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;

  i {
    margin-right: 3px;
  }

  :hover {
    background-color: #ac2925;
  }
`;
