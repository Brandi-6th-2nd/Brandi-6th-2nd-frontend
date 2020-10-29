import React, { Fragment } from "react";
import styled from "styled-components";

function ProductDesc() {
  return (
    <Fragment>
      <Td>한줄 상품 설명</Td>
      <Td>
        <Input type="text" />
      </Td>
    </Fragment>
  );
}

export default ProductDesc;

const Td = styled.td`
  ${({ theme }) => theme.td()}
`;

const Input = styled.input`
  ${({ theme }) => theme.input()}
`;
