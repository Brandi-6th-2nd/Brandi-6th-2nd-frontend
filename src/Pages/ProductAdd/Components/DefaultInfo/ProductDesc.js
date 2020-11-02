import React, { Fragment, useContext } from "react";
import styled from "styled-components";

import { GlobalContext } from "../../../../contexts/globalContext";

export default function ProductDesc() {
  const { state, dispatch } = useContext(GlobalContext);
  const { productDesc } = state.productAdd;

  const handleProductDesc = (e) => {
    dispatch({ type: "setProductDesc", value: e.target.value });
  };

  return (
    <Fragment>
      <Td>한줄 상품 설명</Td>
      <Td>
        <Input type="text" value={productDesc} onChange={handleProductDesc} />
      </Td>
    </Fragment>
  );
}

const Td = styled.td`
  ${({ theme }) => theme.td()}
`;

const Input = styled.input`
  ${({ theme }) => theme.input()}
`;
