import React from "react";
import styled from "styled-components";

function SellerInfoButtons({ handleCancel, isDisabled }) {
  console.log("isDisabled", isDisabled);
  return (
    <Fragment>
      <ModifyButton
        type="submit"
        value="수정"
        disabled={isDisabled ? "disabled" : ""}
      ></ModifyButton>
      <CancelButton onClick={handleCancel}>취소</CancelButton>
    </Fragment>
  );
}

export default SellerInfoButtons;

const Fragment = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
`;

const ModifyButton = styled.input`
  padding: 6px 12px;
  width: 54px;
  height: 34px;
  color: #fff;
  background-color: #449d44;
  border: 1px solid #398439;
  border-radius: 4px;

  :hover {
    background-color: ${({ disabled }) => (disabled ? "#449d44" : "#398439")};
  }
`;

const CancelButton = styled.div`
  padding: 9px 12px;
  width: 54px;
  height: 34px;
  color: #333;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;

  :hover {
    background-color: #ccc;
  }
`;
