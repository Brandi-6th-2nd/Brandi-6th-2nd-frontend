import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import MaskedInput from "react-input-mask";
import styled from "styled-components";
import LoginFooter from "../../Components/LoginFooter/LoginFooter";
import { API } from "../../config";

function SignUp() {
  const { register, handleSubmit, errors, watch, reset } = useForm({
    mode: "onBlur",
  });

  // 비밀번호 재확인을 위해 비밀번호의 값을 관찰함
  const password = useRef({});
  password.current = watch("sellerPassword", "");

  // router로 관리하는 페이지로 넘어가기 위해 사용하는 useHistory()를 변수로 담음
  const history = useHistory();

  // 신청버튼 눌렀을 시, 데이터가 서버로 전송됨
  const onSubmit = (data) => {
    fetch(`${API}/sign_up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account: data.sellerId,
        password: data.sellerPassword,
        kor_name: data.sellerName,
        eng_name: data.sellerEnName,
        center_phone: data.sellerServiceCenterTel,
        seller_category: data.shopInfo,
        phone_number: data.sellerTel,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message === "REGISTER_SUCCESS") {
          alert("회원가입이 되었습니다.");
          history.push("/");
        } else {
          alert("다시 한 번 확인해주세요!");
        }
      });
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
            <InputBox className={errors.sellerId && "errBorder"}>
              <i className="fas fa-user" />
              <Input
                type="text"
                autoComplete="off"
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
            <InputBox className={errors.sellerPassword && "errBorder"}>
              <i className="fas fa-lock" />
              <Input
                type="password"
                autoComplete="off"
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
            <InputBox className={errors.sellerRePassword && "errBorder"}>
              <i className="fas fa-check" />
              <Input
                type="password"
                autoComplete="off"
                name="sellerRePassword"
                placeholder="비밀번호 재입력"
                ref={register({
                  required: "required",
                  validate: (value) =>
                    value === password.current ||
                    "비밀번호가 일치하지 않습니다.",
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
            <InputBox className={errors.sellerTel && "errBorder"}>
              <i className="fas fa-phone-alt" />
              <Input
                as={MaskedInput}
                mask="999-9999-9999"
                type="text"
                autoComplete="off"
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
              <RadioButton
                type="radio"
                id="쇼핑몰"
                name="shopInfo"
                value="쇼핑몰"
                defaultChecked
                ref={register({
                  required: "required",
                })}
              />
              <Label htmlFor="쇼핑몰">쇼핑몰</Label>
              <RadioButton
                type="radio"
                id="마켓"
                name="shopInfo"
                value="마켓"
                ref={register({
                  required: "required",
                })}
              />
              <Label htmlFor="마켓">마켓</Label>
              <RadioButton
                type="radio"
                id="로드샵"
                name="shopInfo"
                value="로드샵"
                ref={register({
                  required: "required",
                })}
              />
              <Label htmlFor="로드샵">로드샵</Label>
              <RadioButton
                type="radio"
                id="디자이너브랜드"
                name="shopInfo"
                value="디자이너브랜드"
                ref={register({
                  required: "required",
                })}
              />
              <Label htmlFor="디자이너브랜드">디자이너브랜드</Label>
              <RadioButton
                type="radio"
                id="제너럴브랜드"
                name="shopInfo"
                value="제너럴브랜드"
                ref={register({
                  required: "required",
                })}
              />
              <Label htmlFor="제너럴브랜드">제너럴브랜드</Label>
              <RadioButton
                type="radio"
                id="내셔널브랜드"
                name="shopInfo"
                value="내셔널브랜드"
                ref={register({
                  required: "required",
                })}
              />
              <Label htmlFor="내셔널브랜드">내셔널브랜드</Label>
              <RadioButton
                type="radio"
                id="뷰티"
                name="shopInfo"
                value="뷰티"
                ref={register({
                  required: "required",
                })}
              />
              <Label htmlFor="뷰티">뷰티</Label>
            </SellerInfoSelect>
            <InputBox className={errors.sellerName && "errBorder"}>
              <i className="fas fa-font" />
              <Input
                type="text"
                autoComplete="off"
                name="sellerName"
                placeholder="셀러명 (상호)"
                ref={register({
                  required: "required",
                  pattern: /^[a-zA-Z0-9가-힣]*$/,
                })}
              />
            </InputBox>
            {errors.sellerName && errors.sellerName.type === "required" && (
              <p>필수 입력항목입니다.</p>
            )}
            {errors.sellerName && errors.sellerName.type === "pattern" && (
              <p>한글,영문,숫자만 입력해주세요.</p>
            )}
            <InputBox className={errors.sellerEnName && "errBorder"}>
              <i className="fas fa-font" />
              <Input
                type="text"
                autoComplete="off"
                name="sellerEnName"
                placeholder="영문 셀러명 (영문상호)"
                ref={register({
                  required: "required",
                  pattern: /^[a-z]*$/,
                })}
              />
            </InputBox>
            {errors.sellerEnName && errors.sellerEnName.type === "required" && (
              <p>필수 입력항목입니다.</p>
            )}
            {errors.sellerEnName && errors.sellerEnName.type === "pattern" && (
              <p>셀러 영문명은 소문자만 입력가능합니다.</p>
            )}
            <InputBox className={errors.sellerServiceCenterTel && "errBorder"}>
              <i className="fas fa-phone-alt" />
              <Input
                type="text"
                autoComplete="off"
                name="sellerServiceCenterTel"
                placeholder="고객센터 전화번호"
                ref={register({
                  required: "required",
                  pattern: /^[0-9-]*$/,
                })}
              />
            </InputBox>
            {errors.sellerServiceCenterTel &&
              errors.sellerServiceCenterTel.type === "required" && (
                <p>필수 입력항목입니다.</p>
              )}
            {errors.sellerServiceCenterTel &&
              errors.sellerServiceCenterTel.type === "pattern" && (
                <p>고객센터 전화번호는 숫자와 하이픈만 입력가능합니다.</p>
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
  height: 100vh;
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
  border: 1px solid #e5e5e5;
  border-radius: 4px;

  i {
    display: block;
    position: absolute;
    top: 8px;
    left: 10px;
    width: 15px;
    height: 15px;
    color: #ccc;
    font-size: 16px;
    z-index: 1;
  }

  &.errBorder {
    color: #a94442;
    border: 1px solid #a94442;

    i {
      color: #a94442;
    }
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
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 43px;
  font-size: 14px;
  margin-bottom: 15px;
  padding-right: 50px;
  line-height: 25px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const RadioButton = styled.input`
  margin-top: 6px;
  margin-right: 5px;
`;

const WrapSubmit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 150px;
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
