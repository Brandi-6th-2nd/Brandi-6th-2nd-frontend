import React, { Fragment } from "react";
import styled from "styled-components";

function DisplayOption({ displayOption, setDisplayOption }) {
  // ProductAdd.js에 있는 displayOption의 state값을 현재 선택된 진열 여부 옵션의 값으로 변경해주기 위한 함수
  const handleDisplayOption = (e) => {
    setDisplayOption(e.target.value);
  };

  return (
    <Fragment>
      <Td>진열 여부</Td>
      <Td>
        <InputGroup>
          <InputItem>
            <InputRadio
              type="radio"
              name="display"
              id="display"
              value="1"
              checked={displayOption === "1"}
              onChange={handleDisplayOption}
            />
            <Label htmlFor="display">진열</Label>
          </InputItem>
          <InputItem>
            <InputRadio
              type="radio"
              name="display"
              id="noDisplay"
              value="0"
              checked={displayOption === "0"}
              onChange={handleDisplayOption}
            />
            <Label htmlFor="noDisplay">미진열</Label>
          </InputItem>
        </InputGroup>
        <WarnMsg>
          <i className="fas fa-exclamation-triangle"></i>
          <span>미진열 선택시 앱에서 노출되지 않습니다.</span>
        </WarnMsg>
      </Td>
    </Fragment>
  );
}

export default DisplayOption;

const Td = styled.td`
  ${({ theme }) => theme.td()}
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

const WarnMsg = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: none;
  color: #1e90ff;

  i {
    margin-right: 3px;
    color: #1e90ff;
  }
`;
