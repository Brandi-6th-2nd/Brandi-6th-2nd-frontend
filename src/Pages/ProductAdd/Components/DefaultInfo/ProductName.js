import React, { Fragment } from "react";
import styled from "styled-components";

function ProductName() {
  return (
    <Fragment>
      <Td>
        상품명 <mark>*</mark>
      </Td>
      <Td>
        <Input type="text" />
        <WarnMsg>
          <i className="fas fa-exclamation-triangle"></i>
          <span>
            상품명에는 쌍따옴표(") 또는 홑따옴표(')를 포함할 수 없습니다.
          </span>
        </WarnMsg>
        <WarnMsg second>
          <i className="fas fa-exclamation-triangle"></i>
          <span>상품명에는 4byte 이모지를 포함할 수 없습니다.</span>
        </WarnMsg>
      </Td>
    </Fragment>
  );
}

export default ProductName;

const Td = styled.td`
  ${({ theme }) => theme.td()}

  mark {
    background: none;
    color: red;
  }
`;

const Input = styled.input`
  ${({ theme }) => theme.input()}
`;

const WarnMsg = styled.div`
  display: flex;
  margin-top: ${({ second }) => (second ? "5px" : "10px")};
  color: #1e90ff;

  i {
    margin-right: 3px;
    color: #1e90ff;
  }
`;
