import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBarContents from "./Components/SideBarContents";
import SellerMenuContent from "./Components/SellerMenuData";
import MasterMenuContent from "./Components/MasterMenuData";

function SideBar() {
  const [isOpen, setIsOpen] = useState(0);
  const [subIsOpen, setSubIsOpen] = useState(0);
  const [activateToggler, setActivateToggler] = useState(false);
  const handlePage = (tabName) => {
    setIsOpen(tabName);
    // 페이지 이동 함수 추가
  };
  console.log("clicked!!!>>>", activateToggler);

  return (
    <Fragment>
      <Header />
      <PageContentWrapper width={activateToggler}>
        <SideBarMenu>
          <SideBarToggler
            onClick={() => setActivateToggler(!activateToggler)}
            margin={activateToggler}
          >
            <i
              className={
                !activateToggler ? "fas fa-angle-left" : "fas fa-angle-right"
              }
            ></i>
          </SideBarToggler>
          {MasterMenuContent.map((el, idx) => (
            <SideBarContents
              setIsOpen={(e) => setIsOpen(e)}
              isOpen={isOpen}
              subIsOpen={subIsOpen}
              setSubIsOpen={setSubIsOpen}
              key={idx}
              currentIndex={el.id}
              tabIcon={el.tabIcon}
              tabName={el.tabName}
              arrowIcon={el.arrowIcon}
              subCategory={el.subCategory}
              handlePage={handlePage}
            />
          ))}
        </SideBarMenu>
      </PageContentWrapper>
      <Footer />
    </Fragment>
  );
}

export default SideBar;

const PageContentWrapper = styled.div`
  width: ${(props) => (props.width ? "40px" : "215px")};
  height: 980px;
  background-color: #35363a;
  color: #35363a;
`;

const SideBarMenu = styled.ul`
  display: flex;
  flex-direction: column;
`;

const SideBarToggler = styled.li`
  border-bottom: 1px solid transparent;
  border-radius: 4px 0px 0px 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: right;
  float: right;
  border: 0;
  margin: ${(props) =>
    props.margin ? "15px -1px 15px 16px" : "15px -1px 15px 191px"};
  width: 24px;
  height: 23px;
  background-color: #fcfcfc;
  i {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 2px 3px 8px;
    font-size: 18px;
    height: auto;
    text-shadow: none;
  }
`;
