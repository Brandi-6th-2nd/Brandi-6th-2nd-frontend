import React, { Fragment, useState } from "react";
import { Route, Link } from "react-router-dom";
import SubList from "./SubList";
import styled, { css } from "styled-components";

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
  activateToggler,
  homeUrl,
}) {
  const currentSubOpen = currentIndex === subIsOpen;
  const currentOpen = currentIndex === isOpen;
  const [toggleActive, setToggleActive] = useState(0);
  const toggleSubList = (currentIndex) => {
    currentSubOpen ? setSubIsOpen(0) : setSubIsOpen(currentIndex);
  };
  const handleMouseEnter = (currentIndex) => {
    activateToggler && setToggleActive(currentIndex);
  };

  return (
    <Fragment>
      <MenuContents
        onClick={() => {
          toggleSubList(currentIndex);
        }}
        borderColor={currentSubOpen}
        changeColor={currentSubOpen}
        currentOpen={currentOpen}
        activateToggler={activateToggler}
        onMouseEnter={() => handleMouseEnter(currentIndex)}
        onMouseLeave={() => handleMouseEnter(0)}
        isToggleActive={toggleActive === currentIndex}
        smaller={activateToggler}
      >
        {activateToggler ? (
          <SmallCategory>
            <SpanWrapper>
              <i className={tabIcon} />
              <TabName smallTab={toggleActive === currentIndex}>
                <Link to={homeUrl && homeUrl}>{tabName}</Link>
              </TabName>
            </SpanWrapper>
            {subCategory && toggleActive === currentIndex && (
              <SubList
                subCategory={subCategory}
                currentIndex={currentIndex}
                handlePage={handlePage}
                activateToggler={activateToggler}
              />
            )}
          </SmallCategory>
        ) : (
          <Fragment>
            <SpanWrapper>
              <i className={tabIcon} />
              <span>
                <Link to={homeUrl && homeUrl}>{tabName}</Link>
              </span>
            </SpanWrapper>
            {subCategory && (
              <SubBtnIcon>
                <i
                  className={
                    currentSubOpen ? "fas fa-angle-down" : "fas fa-angle-left"
                  }
                />
              </SubBtnIcon>
            )}
          </Fragment>
        )}
      </MenuContents>
      {!activateToggler && currentSubOpen && subCategory && (
        <SubList
          subCategory={subCategory}
          currentIndex={currentIndex}
          handlePage={handlePage}
          activateToggler={activateToggler}
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
  padding-left: ${({ smaller }) => smaller && "10px"};
  width: 100%;
  border-bottom: 1px solid #414247;
  color: #eeeeee;
  cursor: pointer;
  border-right: ${(props) => (props.borderColor ? "4px solid #d12610" : "")};
  background-color: ${(props) => (props.changeColor ? "#222222" : "#35363a")};
  &:hover {
    background-color: #222222;
  }
  i {
    margin-right: 5px;
    display: ${(props) => (props.display ? "none" : "")};
  }
`;

const SubBtnIcon = styled.div`
  display: ${({ display }) => (display ? "none" : "")};
`;

const SpanWrapper = styled.div`
  i {
    font-size: 16px;
    margin-right: ${({ margin }) => (margin ? "5px" : "12px")};
  }
  span {
    color: #f1f1f1;
    font-size: 14px;
    font-weight: 300;
    display: ${(props) => (props.display ? "none" : "")};
    a:hover {
      color: #cecfd3;
      text-decoration: none;
    }
  }
`;

const TabName = styled.div`
  color: #f1f1f1;
  font-size: 14px;
  font-weight: 400;
  background: #35373a;
  padding-top: 13px;
  text-align: left;
  width: 178px;
  height: 37px;
  position: absolute;
  top: -10px;
  left: 25px;
  padding-left: 20px;
  display: ${(props) => (props.smallTab ? "block" : "none")};
  z-index: 10;
  a {
    display: block !important;
    width: 178px;
    height: 30px;
    line-height: 30px;
  }
  a:hover {
    color: #cecfd3;
  }
`;

const SmallCategory = styled.div`
  position: relative;
`;
