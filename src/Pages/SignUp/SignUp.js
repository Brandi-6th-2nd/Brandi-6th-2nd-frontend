import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import MaskedInput from "react-input-mask";
import styled from "styled-components";
import LoginFooter from "../../Components/LoginFooter/LoginFooter";

function SignUp() {
  const { register, handleSubmit, errors, watch, reset } = useForm({
    mode: "onBlur",
  });

  // 비밀번호 재확인을 위해 비밀번호의 값을 관찰함
  const password = useRef({});
  password.current = watch("sellerPassword", "");

  // router로 관리하는 페이지로 넘어가기 위해 사용하는 useHistory()를 변수로 담음
  const history = useHistory();

  // 신청버튼 눌렀을 시, 데이터가 전송됨
  const onSubmit = (data) => {
    alert("회원가입이 되었습니다.");
    console.log(data);
    history.push("/");
  };

  // 취소버튼 눌렀을 시 뜨는 alert 창 처리
  const handleCancel = () => {
    if (confirm("브랜디 가입을 취소하시겠습니까?") == true) {
      reset();
      history.push("/");
    } else {
      return false;
    }
  };

  return (
    <Fragment>
      <WrapSignUp>
        <SignUpInfo>
          <Logo
            src="public/Images/Login/admin_logo.png"
            alt="브랜디 어드민 로고"
          />
          <SignUpText>셀러회원 가입</SignUpText>
          <InfoText>정보입력</InfoText>
        </SignUpInfo>
        {/* 가입 정보 시작 */}
        <WrapForm onSubmit={handleSubmit(onSubmit)}>
          <SignUpForm>
            <JoinText>가입 정보</JoinText>
            <InputBox borderColor={errors.sellerId}>
              <i className="fas fa-user" />
              <Input
                type="text"
                autoComplete="off"
                id="sellerId"
                name="sellerId"
                placeholder="아이디"
                ref={register({
                  required: true,
                  minLength: 5,
                })}
              />
            </InputBox>
            {errors.sellerId && errors.sellerId.type === "required" && (
              <p>필수 입력항목입니다.</p>
            )}
            {errors.sellerId && errors.sellerId.type === "minLength" && (
              <p>아이디의 최소 길이는 5글자입니다.</p>
            )}
            <InputBox borderColor={errors.sellerPassword}>
              <i className="fas fa-lock" />
              <Input
                type="password"
                autoComplete="off"
                id="sellerPassword"
                name="sellerPassword"
                placeholder="비밀번호"
                ref={register({
                  required: "required",
                  pattern: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/,
                })}
              />
            </InputBox>
            {errors.sellerPassword &&
              errors.sellerPassword.type === "required" && (
                <p>필수 입력항목입니다.</p>
              )}
            {errors.sellerPassword &&
              errors.sellerPassword.type === "pattern" && (
                <p>
                  비밀번호는 8~20글자의 영문대소문자, 숫자, 특수문자를 조합해야
                  합니다.
                </p>
              )}
            <InputBox borderColor={password.current && errors.sellerRePassword}>
              <i className="fas fa-check" />
              <Input
                type="password"
                autoComplete="off"
                id="sellerRePassword"
                name="sellerRePassword"
                placeholder="비밀번호 재입력"
                ref={register({
                  required: "required",
                  validate: (value) => value === password.current,
                })}
              />
            </InputBox>
            {password.current && errors.sellerRePassword && (
              <p>비밀번호가 일치하지 않습니다.</p>
            )}
          </SignUpForm>
          {/* 가입 정보 끝 */}
          {/* 담당자 정보 시작 */}
          <ManagerForm>
            <ManagerText>
              담당자 정보
              <ManagerInfoSpan>(*실제 샵을 운영하시는 분)</ManagerInfoSpan>
            </ManagerText>
            <InputBox borderColor={errors.sellerTel}>
              <i className="fas fa-phone-alt" />
              <Input
                as={MaskedInput}
                mask="999-9999-9999"
                type="text"
                autoComplete="off"
                id="sellerTel"
                name="sellerTel"
                placeholder="핸드폰번호"
                inputRef={register({
                  required: "required",
                })}
              />
            </InputBox>
            {errors.sellerTel && errors.sellerTel.type === "required" && (
              <p>올바른 정보를 입력해주세요.</p>
            )}
            <ManagerWarningSpan>
              <i className="fas fa-exclamation-circle" />
              &nbsp;입점 신청 후 브랜디 담당자가 연락을 드릴 수 있으니 정확한
              정보를 기입해주세요.
            </ManagerWarningSpan>
          </ManagerForm>
          {/* 담당자 정보 끝 */}
          {/* 셀러 정보 시작 */}
          <SellerInfoForm>
            <SellerInfoText>셀러 정보</SellerInfoText>
            <SellerInfoSelect>
              <input
                type="radio"
                name="shopInfo"
                value="쇼핑몰"
                defaultChecked
                ref={register({
                  required: "required",
                })}
              />
              쇼핑몰
              <input
                type="radio"
                name="shopInfo"
                value="마켓"
                ref={register({
                  required: "required",
                })}
              />
              마켓
              <input
                type="radio"
                name="shopInfo"
                value="로드샵"
                ref={register({
                  required: "required",
                })}
              />
              로드샵
              <input
                type="radio"
                name="shopInfo"
                value="디자이너브랜드"
                ref={register({
                  required: "required",
                })}
              />
              디자이너브랜드
              <input
                type="radio"
                name="shopInfo"
                value="제너럴브랜드"
                ref={register({
                  required: "required",
                })}
              />
              제너럴브랜드
              <input
                type="radio"
                name="shopInfo"
                value="내셔널브랜드"
                ref={register({
                  required: "required",
                })}
              />
              내셔널브랜드
              <input
                type="radio"
                name="shopInfo"
                value="뷰티"
                ref={register({
                  required: "required",
                })}
              />
              뷰티
            </SellerInfoSelect>
            <InputBox borderColor={errors.sellerName}>
              <i className="fas fa-font" />
              <Input
                type="text"
                autoComplete="off"
                id="sellerName"
                name="sellerName"
                placeholder="셀러명 (상호)"
                ref={register({
                  required: "required",
                })}
              />
            </InputBox>
            {errors.sellerName && errors.sellerName.type === "required" && (
              <p>필수 입력항목입니다.</p>
            )}
            <InputBox borderColor={errors.sellerEnName}>
              <i className="fas fa-font" />
              <Input
                type="text"
                autoComplete="off"
                id="sellerEnName"
                name="sellerEnName"
                placeholder="영문 셀러명 (영문상호)"
                ref={register({
                  required: "required",
                })}
              />
            </InputBox>
            {errors.sellerEnName && errors.sellerEnName.type === "required" && (
              <p>필수 입력항목입니다.</p>
            )}
            <InputBox borderColor={errors.sellerServiceCenterTel}>
              <i className="fas fa-phone-alt" />
              <Input
                type="text"
                autoComplete="off"
                id="sellerServiceCenterTel"
                name="sellerServiceCenterTel"
                placeholder="고객센터 전화번호"
                ref={register({
                  required: "required",
                })}
              />
            </InputBox>
            {errors.sellerServiceCenterTel &&
              errors.sellerServiceCenterTel.type === "required" && (
                <p>필수 입력항목입니다.</p>
              )}
          </SellerInfoForm>
          {/* 셀러 정보 끝 */}
          <WrapSubmit>
            <Submit type="submit" value="신청" />
            <Cancel onClick={handleCancel}>취소</Cancel>
          </WrapSubmit>
        </WrapForm>
      </WrapSignUp>
      <LoginFooter />
    </Fragment>
  );
}

export default SignUp;

const Fragment = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  overflow: hidden;
`;

const WrapSignUp = styled.div`
  position: relative;
  overflow: scroll;
  width: 500px;
  height: 800px;
  margin: auto;
  padding: 30px;
  padding-top: 20px;
  padding-bottom: 15px;
  border-radius: 4px;
  background-color: #fff;
  overflow: auto;
`;

const SignUpInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 130px;
  height: 45px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const SignUpText = styled.div`
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
  font-size: 24px;

  :after {
    content: "";
    display: block;
    margin-top: 20px;
    margin-bottom: 10px;
    width: 100%;
    border-bottom: 1px solid #cccccc;
  }
`;

const InfoText = styled.div`
  width: 90%;
  height: 45px;
  padding-top: 13px;
  text-align: center;
  font-size: 18px;
  color: white;
  background-color: #333333;
`;

const WrapForm = styled.form`
  p {
    margin-top: 3px;
    margin-bottom: 5px;
    color: #a94442;
    font-size: 12px;
    font-weight: bolder;
  }
`;

const SignUpForm = styled.div`
  margin-top: 30px;
  padding: 0px 15px;
  width: 100%;
  height: auto;
`;

const JoinText = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #222222;
  font-size: 20px;
`;

const InputBox = styled.div`
  position: relative;
  margin-top: 15px;
  width: 100%;
  height: 34px;
  border: 1px solid
    ${({ borderColor }) => (!borderColor ? "#e5e5e5" : "#a94442")};
  border-radius: 4px;

  i {
    display: block;
    position: absolute;
    top: 8px;
    left: 10px;
    width: 15px;
    height: 15px;
    color: ${({ borderColor }) => (!borderColor ? "#ccc" : "#a94442")};
    font-size: 16px;
    z-index: 1;
  }
`;

const Input = styled.input`
  position: absolute;
  top: 5px;
  left: 35px;
  width: 90%;
  height: 25px;
  font-size: 14px;
`;

const ManagerForm = styled.div`
  margin-top: 30px;
  padding: 0px 15px;
  width: 100%;
  height: auto;
`;

const ManagerText = styled(JoinText.withComponent("div"))``;

const ManagerInfoSpan = styled.span`
  margin-left: 10px;
  color: #1e90ff;
  font-size: 14px;
`;

const ManagerWarningSpan = styled.span`
  color: #1e90ff;
  font-size: 12px;
`;

const SellerInfoForm = styled(ManagerForm.withComponent("div"))``;

const SellerInfoText = styled(JoinText.withComponent("div"))``;

const SellerInfoSelect = styled.div`
  width: 100%;
  height: 43px;
  margin-bottom: 15px;
  padding-right: 50px;
  line-height: 25px;
`;

const WrapSubmit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 200px;
  width: 100%;
  height: 43px;
`;

const Submit = styled.input`
  width: 51px;
  height: 34px;
  color: #fff;
  font-weight: bolder;
  background-color: #5bc0de;
  border-color: #46b8da;
  border: 1px solid transparent;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #46b8da;
  }
`;

const Cancel = styled.div`
  width: 51px;
  height: 34px;
  color: #fff;
  padding-top: 9px;
  padding-left: 11px;
  font-size: 13px;
  font-weight: bold;
  background-color: #d9534f;
  border-color: #d43f3a;
  border: 1px solid transparent;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #d43f3a;
  }
`;
