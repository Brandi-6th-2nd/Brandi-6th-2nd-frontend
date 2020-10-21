import React from 'react';
import styled from 'styled-components';
import LoginFooter from '../../Components/LoginFooter/LoginFooter';

function Login() {
  return (
    <Fragment>
      <Content>
        <Logo
          src="public/Images/Login/admin_logo.png"
          alt="브랜디 어드민 로고"
        />
        <LoginArea>
          <AdminText>브랜디 어드민 로그인</AdminText>
          <InputBox>
            <UserName id="username" name="username" placeholder="셀러 아이디" />
            <UserPassword
              id="userpassword"
              name="userpassword"
              placeholder="셀러 비밀번호"
            />
          </InputBox>
          <LoginButton>로그인</LoginButton>
          <JoinArea>
            <Text>아직 셀러가 아니신가요?</Text>
            <GoToSignUp>회원가입하기</GoToSignUp>
          </JoinArea>
        </LoginArea>
      </Content>
      <LoginFooter />
    </Fragment>
  );
}

export default Login;

const Fragment = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 100vh;
  margin: auto;
  padding: 65px 0px 50px;
`;

const Logo = styled.img`
  width: 130px;
  height: 45px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 400px;
  padding: 64px 30px 64px 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 31px 0 rgba(0, 0, 0, 0.1);
`;

const AdminText = styled.p`
  margin-bottom: 25px;
  font-size: 24px;
  font-weight: bolder;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: auto;
  height: 110px;
`;

const UserName = styled.input`
  width: 320px;
  height: 45.6px;
  padding: 13px 16px;
  font-size: 12px;
  border: 1px solid #e5e5e5;
  border-radius: 7px;
`;

const UserPassword = styled(UserName.withComponent('input'))``;

const LoginButton = styled.button`
  width: 320px;
  height: 44.8px;
  margin-top: 20px;
  color: white;
  font-size: 12px;
  border-radius: 8px;
  background-color: black;
  cursor: pointer;
`;

const JoinArea = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Text = styled.span`
  color: #929292;
  font-size: 12px;
`;

const GoToSignUp = styled.a`
  margin-left: 4px;
  color: #3c72ff;
  font-size: 12px;
  cursor: pointer;
`;
