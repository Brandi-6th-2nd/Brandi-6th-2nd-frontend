import React, { Fragment } from "react";
import styled from "styled-components";

function SubList({ subCategory, currentIndex, handlePage }) {
  return (
    <Fragment>
      <SubContainer>
        {subCategory.map((el) => (
          <SubCategories key={el.id} onClick={() => handlePage(currentIndex)}>
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
  display: block;
  margin: 0px 0px 0px 0px;
  padding: 5px 0px;
  padding-left: 35px !important;
  text-decoration: none;
  font-size: 14px;
  font-weight: 300;
  background: none;
  color: #cecfd3;
  cursor: pointer;
  &:hover {
    background-color: #222222;
  }
`;
