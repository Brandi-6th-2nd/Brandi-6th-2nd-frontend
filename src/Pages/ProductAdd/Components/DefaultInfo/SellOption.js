import React, { Fragment, useContext } from "react";
import styled from "styled-components";

import { GlobalContext } from "../../../../contexts/globalContext";

export default function SellOption() {
  const { state, dispatch } = useContext(GlobalContext);
  const { sellOption } = state.productAdd;

  // productAddContext.js 에 있는 상태값 중 sellOption의 값을 현재 선택된 값으로 변경해주기 위한 함수
  const handleSellOption = (e) => {
    dispatch({ type: "setSellOption", value: e.target.value });
  };

  return (
    <Fragment>
      <Td>판매 여부</Td>
      <Td>
        <InputGroup>
          <InputItem>
            {/* InputRadio에서 name의 의미: 여러개의 radio type input들이 있을 때 같은 그룹으로 묶겠다는 뜻임 */}
            {/* name을 radio마다 다르게 설정하면 중복선택이 되어버림 */}
            {/* id는 Label에서 받아 글자만 클릭해도 해당 아이템이 선택되도록 하는 역할 */}
            <InputRadio
              type="radio"
              name="sell"
              id="sell"
              value="1"
              checked={sellOption === "1"}
              onChange={handleSellOption}
            />
            <Label htmlFor="sell">판매</Label>
          </InputItem>
          <InputItem>
            <InputRadio
              type="radio"
              name="sell"
              id="noSell"
              value="0"
              checked={sellOption === "0"}
              onChange={handleSellOption}
            />
            <Label htmlFor="noSell">미판매</Label>
          </InputItem>
        </InputGroup>
        <WarnMsg>
          <i className="fas fa-exclamation-triangle"></i>
          <span>미판매 선택시 앱에서 Sold Out으로 표시됩니다.</span>
        </WarnMsg>
      </Td>
    </Fragment>
  );
}

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
