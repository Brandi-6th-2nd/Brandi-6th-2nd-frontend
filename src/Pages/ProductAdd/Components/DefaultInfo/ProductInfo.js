import React, { Fragment } from "react";
import styled from "styled-components";

function ProductInfo() {
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
              value="Y"
              defaultChecked
            />
            <Label htmlFor="detailRefer">상품 상세 참조</Label>
          </InputItem>
          <InputItem>
            <InputRadio
              type="radio"
              name="productInfo"
              id="inputDirect"
              value="Y"
            />
            <Label htmlFor="inputDirect">직접 입력</Label>
          </InputItem>
        </InputGroup>
      </Td>
    </Fragment>
  );
}

export default ProductInfo;

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
