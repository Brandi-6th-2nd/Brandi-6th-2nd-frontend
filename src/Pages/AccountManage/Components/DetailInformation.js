import React, { useState } from "react";
import MaskedInput from "react-input-mask";
import PostModal from "./PostModal";
import styled from "styled-components";

function DetailInformation({
  register,
  errors,
  setBackground,
  sellerDetail,
  isZoneCode,
  setIsZoneCode,
  isAddress,
  setIsAddress,
}) {
  const [openModal, setOpenModal] = useState(false);
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setIsZoneCode(data.zonecode);
    setIsAddress(fullAddress);
    setOpenModal(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [imgBase64, setImgBase64] = useState(""); // 파일 base64

  const handleChangeFile = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 파일을 읽어 버퍼에 저장.
      setBackground(event.target.files[0]); // 파일 상태 업데이트
    }
  };

  return (
    <Fragment>
      <Title>
        <i className="fas fa-user" /> 상세 정보
      </Title>
      <Content>
        <Table>
          <tbody>
            <Tr>
              <Td shortWidth="true">셀러페이지 배경이미지</Td>
              <Td className="infoData">
                <Background>
                  {sellerDetail.background_image && (
                    <BackgroundImg src={sellerDetail.background_image} />
                  )}
                  {imgBase64 && <BackgroundImg src={imgBase64} />}
                </Background>
                <ChangeBackgroundBtn>
                  <label htmlFor="backgroundImg">업로드</label>
                  <input
                    type="file"
                    id="backgroundImg"
                    name="backgroundImg"
                    onChange={handleChangeFile}
                  />
                </ChangeBackgroundBtn>
                <WarningMsg>
                  <i className="fas fa-exclamation-circle" />
                  브랜디 앱과 웹 사이트의 셀러 페이지에 보여질 배경이미지입니다.
                </WarningMsg>
                <WarningMsg>
                  <i className="fas fa-exclamation-circle" />
                  배경이미지는 <Bold>1200 * 850 </Bold>사이즈 이상으로
                  등록해주세요.
                </WarningMsg>
                <WarningMsg>
                  <i className="fas fa-exclamation-circle" />
                  확장자는 <Bold>jpg, jpeg, png </Bold>만 가능하며, 허용 가능한
                  최대 파일사이즈 크기는 <Bold>5MB </Bold>입니다.
                </WarningMsg>
              </Td>
            </Tr>
            <Tr>
              <Td shortWidth="true">
                셀러 한줄 소개 <ImportantStar>*</ImportantStar>
              </Td>
              <Td className="infoData">
                <InputBox>
                  <i className="fas fa-user" />
                  <Input
                    type="text"
                    autoComplete="off"
                    name="intro"
                    placeholder="셀러 한줄 소개"
                    defaultValue={sellerDetail && sellerDetail.intro}
                    ref={register({
                      required: true,
                    })}
                  />
                </InputBox>
                {errors.intro && errors.intro.type === "required" && (
                  <p>필수 입력항목입니다.</p>
                )}
              </Td>
            </Tr>
            <Tr>
              <Td shortWidth="true">
                셀러 상세 소개 <ImportantStar>*</ImportantStar>
              </Td>
              <Td className="infoData">
                <TextArea
                  name="detail_intro"
                  placeholder="셀러 상세 소개"
                  defaultValue={sellerDetail && sellerDetail.detail_intro}
                  ref={register({ minLength: 10 })}
                />
                {errors.detail_intro &&
                  errors.detail_intro.type === "minLength" && (
                    <p>셀러 상세 소개 글은 최소10자 이상 입니다.</p>
                  )}
                <WarningMsg>
                  <i className="fas fa-exclamation-circle" />
                  셀러 상세 소개 글은 최소10자 이상 입니다.
                </WarningMsg>
              </Td>
            </Tr>
            <Tr>
              <Td shortWidth="true">
                담당자 정보 <ImportantStar>*</ImportantStar>
              </Td>
              <Td className="infoData">
                <InputBox>
                  <i className="fas fa-user" />
                  <Input
                    type="text"
                    autoComplete="off"
                    name="manager_name"
                    placeholder="담당자명"
                    defaultValue={sellerDetail && sellerDetail.manager_name}
                    ref={register({
                      required: true,
                    })}
                  />
                </InputBox>
                {errors.manager_name &&
                  errors.manager_name.type === "required" && (
                    <p>필수 입력항목입니다.</p>
                  )}
                <InputBox>
                  <i className="fas fa-phone-alt" />
                  <Input
                    as={MaskedInput}
                    mask="999-9999-9999"
                    type="text"
                    autoComplete="off"
                    name="manager_phone"
                    value={sellerDetail && sellerDetail.manager_phone}
                    inputRef={register({
                      required: "required",
                    })}
                  />
                </InputBox>
                {errors.manager_phone &&
                  errors.manager_phone.type === "required" && (
                    <p>필수 입력항목입니다.</p>
                  )}
                <InputBox>
                  <i className="far fa-envelope" />
                  <Input
                    type="text"
                    autoComplete="off"
                    name="manager_email"
                    defaultValue={sellerDetail && sellerDetail.manager_email}
                    placeholder="담당자 이메일"
                    ref={register({
                      required: true,
                    })}
                  />
                </InputBox>
                {errors.manager_email &&
                  errors.manager_email.type === "required" && (
                    <p>필수 입력항목입니다.</p>
                  )}
              </Td>
            </Tr>
            <Tr>
              <Td shortWidth="true">
                고객센터 <ImportantStar>*</ImportantStar>
              </Td>
              <Td className="infoData">
                <InputBox>
                  <i className="fas fa-user" />
                  <Input
                    type="text"
                    autoComplete="off"
                    name="seller_reprsnt_telno"
                    defaultValue="1588-0000"
                    placeholder="고객센터 전화번호"
                    ref={register({
                      required: true,
                    })}
                  />
                </InputBox>
                {errors.seller_reprsnt_telno &&
                  errors.seller_reprsnt_telno.type === "required" && (
                    <p>필수 입력항목입니다.</p>
                  )}
              </Td>
            </Tr>
            <Tr>
              <Td shortWidth="true">
                택배주소 <ImportantStar>*</ImportantStar>
              </Td>
              <Td className="infoData">
                <InputBox className="zipCode">
                  <i className="fas fa-user" />
                  <Input
                    type="text"
                    autoComplete="off"
                    name="post_number"
                    placeholder="우편번호"
                    readOnly
                    value={isZoneCode || ""}
                    ref={register({
                      required: true,
                    })}
                    onChange={() => setIsZoneCode(isZoneCode)}
                  />
                </InputBox>
                <PostButton onClick={() => setOpenModal(true)}>
                  우편번호찾기
                </PostButton>
                <PostModal
                  handleComplete={handleComplete}
                  openModal={openModal}
                  handleCloseModal={handleCloseModal}
                />
                <InputBox>
                  <i className="fas fa-map-marker-alt" />
                  <Input
                    type="text"
                    autoComplete="off"
                    name="post_address"
                    value={isAddress || ""}
                    placeholder="주소 (택배 수령지)"
                    readOnly
                    ref={register({
                      required: true,
                    })}
                    onChange={() => setIsAddress(isAddress)}
                  />
                </InputBox>
                <InputBox>
                  <i className="fas fa-map-marker-alt" />
                  <Input
                    type="text"
                    autoComplete="off"
                    name="post_detail_address"
                    placeholder="상세주소 (택배 수령지)"
                    defaultValue={
                      sellerDetail && sellerDetail.post_detail_address
                    }
                    ref={register({
                      required: true,
                    })}
                  />
                </InputBox>
              </Td>
            </Tr>
          </tbody>
        </Table>
      </Content>
    </Fragment>
  );
}

export default DetailInformation;

const Fragment = styled.div`
  margin-top: 25px;
`;

const Title = styled.div`
  padding: 10px 10px 2px 20px;
  height: 38px;
  font-size: 16px;
  background-color: #eee;
  border-top: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  border-radius: 4px 4px 0 0;

  i {
    margin-right: 5px;
    font-size: 14px;
    vertical-align: center;
  }
`;

const Content = styled.div`
  padding: 10px;
  width: 100%;
  background-color: #fff;
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  border-radius: 0px 0px 4px 4px;
`;

const Table = styled.table`
  width: 100%;
  font-size: 13px;

  .infoData {
    border-right: 1px solid #ddd;
  }
`;

const Tr = styled.tr``;

const Td = styled.td`
  width: ${({ shortWidth }) => (shortWidth ? "20%" : "140px")};
  padding: 8px;
  vertical-align: middle;
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  .zipCode {
    display: inline-block;
  }
`;

const ImportantStar = styled.label`
  margin-left: 3px;
  font-size: 14px;
  color: red;
`;

const Background = styled.div`
  margin-bottom: 5px;
  padding: 4px;
  width: 130px;
  height: 100px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

// const ThumbnailImg = styled.img`
//   margin: 0 15px;
// `;

// const ChangeThumbnailBtn = styled.div`
//   padding: 6px 12px;
//   width: 96.35px;
//   border: 1px solid #ddd;
//   border-radius: 4px;

//   :hover {
//     background-color: #ddd;
//     border: 1px solid #333;
//     cursor: pointer;
//   }
// `;

const WarningMsg = styled.div`
  margin-top: 10px;
  color: #1e90ff;
  font-size: 13px;

  i {
    margin-right: 3px;
  }
`;

const Bold = styled.span`
  font-weight: bolder;
`;

const InputBox = styled.div`
  position: relative;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 266px;
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
  top: 3px;
  left: 35px;
  width: 80%;
  height: 25px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: 266px;
  height: 100px;
  padding: 6px 12px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  :focus {
    outline: none;
  }
`;

const PostButton = styled.div`
  margin-left: 10px;
  display: inline-block;
  position: absolute;
  margin-top: 7px;
  margin-bottom: 5px;
  width: 110px;
  height: 30px;
  padding: 6px 12px;
  color: #fff;
  background-color: #5cb85c;
  border: 1px solid #4cae4c;
  border-radius: 4px;

  cursor: pointer;
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ChangeBackgroundBtn = styled.div`
  label {
    display: inline-block;
    padding: 0.5em 0.75em;
    color: #999;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: 0.25em;
  }

  /* 파일 필드 숨기기 */
  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
