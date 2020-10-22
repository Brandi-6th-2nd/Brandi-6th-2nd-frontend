import React, { Fragment } from "react";
import SubList from "./SubList";
import styled from "styled-components";

function SideBarContents({
  setIsOpen,
  isOpen,
  subIsOpen,
  setSubIsOpen,
  tabIcon,
  tabName,
  arrowIcon,
  idx,
  currentIndex,
  subCategory,
  handlePage,
}) {
  const currentSubOpen = currentIndex === subIsOpen;
  const currentOpen = currentIndex === isOpen;
  const toggleSubList = (currentIndex) => {
    currentSubOpen ? setSubIsOpen(0) : setSubIsOpen(currentIndex);
  };
  return (
    <Fragment>
      <MenuContents
        onClick={() => {
          toggleSubList(currentIndex);
        }}
        color={currentSubOpen}
        currentOpen={currentOpen}
      >
        <SpanWrapper>
          <i className={tabIcon}></i>
          <span>{tabName}</span>
        </SpanWrapper>
        {subCategory && (
          <i
            className={
              currentSubOpen ? "fas fa-angle-down" : "fas fa-angle-left"
            }
          />
        )}
      </MenuContents>
      {currentSubOpen && subCategory && (
        <SubList
          subCategory={subCategory}
          currentIndex={currentIndex}
          handlePage={handlePage}
        />
      )}
    </Fragment>
  );
}

export default SideBarContents;

const MenuContents = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 13px 10px 15px;
  width: 100%;
  border-bottom: 1px solid #414247;
  color: #eeeeee;
  cursor: pointer;
  background-color: ${(props) => (props.color ? "#222222" : "#35363a")};
  &:hover {
    background-color: #222222;
  }
  i {
    margin-right: 5px;
  }
`;

const SpanWrapper = styled.div`
  i {
    margin-right: 5px;
    font-size: 16px;
  }
  span {
    color: #f1f1f1;
    font-size: 14px;
    font-weight: 300;
  }
`;
