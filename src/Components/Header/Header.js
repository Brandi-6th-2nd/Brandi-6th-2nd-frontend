import React, { Fragment } from "react";
import styled from "styled-components";

function Header() {
  return (
    <Fragment>
      <HeaderContainer>
        <HeaderInner>
          <HeaderLogo>
            <LogoDrop>
              <img
                src="/public/Images/Header/logo_2.png"
                alt="LogoImage"
                className="Logo"
              />
              <i className="fas fa-angle-down"></i>
            </LogoDrop>
            <Status>staging (staging)</Status>
          </HeaderLogo>
          <HeaderDropDown>
            <li className="UserDrop">Intern_master</li>
            <i className="fas fa-angle-down"></i>
          </HeaderDropDown>
        </HeaderInner>
      </HeaderContainer>
    </Fragment>
  );
}

export default Header;

const HeaderContainer = styled.div`
  background-color: #873b53;
  height: 45px;
  width: 100%;
  position: fixed;
`;

const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
  min-height: 45px;
`;

const HeaderLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LogoDrop = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 100px;
    height: 21.47px;
    margin: 0px;
  }
  i {
    padding: 0.5em;
    color: #ccc;
    font-size: 13px;
  }
`;

const Status = styled.span`
  color: #fff;
  display: inline-block;
  vertical-align: bottom;
  margin-bottom: 2px;
  position: absolute;
  left: 150px;
  top: 15px;
  line-height: 1em;
  font-size: 13px;
`;

const HeaderDropDown = styled.div`
  display: flex;
  padding: 12px 8px;
  /* margin-left: 20px; */
  border-left: 1px solid #484a4f;
  align-items: center;
  li {
    color: #cecfd3;
    list-style: none;
    font-size: 13px;
    margin-right: 8px;
  }
  i {
    font-size: 13px;
    color: #cecfd3;
  }
`;
