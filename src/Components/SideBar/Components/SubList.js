import React, { Fragment } from "react";
import styled, { css } from "styled-components";

function SubList({ subCategory, currentIndex, handlePage, activateToggler }) {
  return (
    <Fragment>
      <SubContainer activateToggler={activateToggler}>
        {subCategory.map((el) => (
          <SubCategories
            key={el.id}
            onClick={() => handlePage(currentIndex)}
            activateToggler={activateToggler}
          >
            {el.subName}
          </SubCategories>
        ))}
      </SubContainer>
    </Fragment>
  );
}

export default SubList;

const SubContainer = styled.ul``;

const SubCategories = styled.li`
  display: flex;
  align-content: center;
  margin: 0px 0px 0px 0px;
  padding: 5px 0px;
  padding-left: 35px !important;
  text-decoration: none;
  font-size: 14px;
  font-weight: 300;
  background: none;
  height: 37px;
  color: #cecfd3;
  cursor: pointer;
  ${({ activateToggler }) =>
    activateToggler &&
    css`
      background: #35373a;
      position: absolute;
      top: 27px;
      left: 30px;
      width: 173px;
      z-index: 10;
    `}

  &:hover {
    background-color: #222222;
  }
`;
