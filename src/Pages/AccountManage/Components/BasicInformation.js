import React, { useState, useEffect } from "react";
import styled from "styled-components";

function BasicInformation({ sellerDetail, register, setProfile }) {
  const [imgBase64, setImgBase64] = useState(""); // 미리보기를 위한 base64 인코딩 할 값

  const handleChangeFile = (event) => {
    let reader = new FileReader();

    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 파일을 읽어 버퍼에 저장
      setProfile(event.target.files[0]); // 파일을 저장함
    }

    reader.onloadend = () => {
      // 파일 읽기가 완료되면 아래 코드가 실행됌
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };
  };

  return (
    <Fragment>
      <Title>
        <i className="fas fa-user" /> 기본 정보
      </Title>
      <Content>
        <Table>
          <tbody>
            <Tr>
              <Td>
                셀러 프로필 <ImportantStar>*</ImportantStar>
              </Td>
              <Td className="infoData">
                <Thumbnail>
                  {sellerDetail.seller_image && (
                    <ThumbnailImg src={sellerDetail.seller_image} />
                  )}
                  {imgBase64 && <ThumbnailImg src={imgBase64} />}
                </Thumbnail>
                <ChangeThumbnailBtn>
                  <label htmlFor="thumbnail">업로드</label>
                  <input
                    type="file"
                    id="thumbnail"
                    name="thumbnail"
                    onChange={handleChangeFile}
                  />
                </ChangeThumbnailBtn>
                <WarningMsg>
                  <i className="fas fa-exclamation-circle" />
                  셀러 프로필 확장자는 <Bold>jpg, jpeg, png</Bold> 만 가능하며,
                  허용 가능한 최대 파일사이즈 크기는 <Bold>5MB</Bold> 입니다.
                </WarningMsg>
              </Td>
            </Tr>
            <Tr>
              <Td>셀러 상태</Td>
              <Td className="infoData">
                {sellerDetail && sellerDetail.status_name}
              </Td>
            </Tr>
            <Tr>
              <Td>
                셀러 속성 <ImportantStar>*</ImportantStar>
              </Td>
              <Td className="infoData">
                <RadioButton
                  type="radio"
                  id={sellerDetail.category_name}
                  name="category_name"
                  value={sellerDetail && sellerDetail.category_name}
                  defaultChecked
                  ref={register({
                    required: "required",
                  })}
                />
                <Label htmlFor="{sellerDetail.category_name}">
                  {sellerDetail && sellerDetail.category_name}
                </Label>
              </Td>
            </Tr>
            <Tr>
              <Td className="infoData" colSpan="2">
                <WarningMsg warningMsgMargin="false">
                  <i className="fas fa-exclamation-circle" />
                  셀러명(한글, 영문) 변경시 셀러명과 동일하게 등록된 브랜드
                  정보는 자동으로 변경되지 않습니다. 관리자께서는 이점
                  유의해주시기 바라며, 브랜드 정보 수정은 [이전 버전 관리 &#62;
                  브랜드관리] 에서 가능합니다.
                </WarningMsg>
              </Td>
            </Tr>
            <Tr>
              <Td>셀러 한글명</Td>
              <Td className="infoData">
                <InputBox>
                  <i className="fas fa-user" />
                  <Input
                    type="text"
                    autoComplete="off"
                    name="kor_name"
                    defaultValue={sellerDetail && sellerDetail.kor_name}
                    placeholder="셀러 한글명"
                    ref={register({
                      required: true,
                    })}
                  />
                </InputBox>
              </Td>
            </Tr>
            <Tr>
              <Td>셀러 영문명</Td>
              <Td className="infoData">
                <InputBox>
                  <i className="fas fa-user" />
                  <Input
                    type="text"
                    autoComplete="off"
                    name="eng_name"
                    defaultValue={sellerDetail && sellerDetail.eng_name}
                    placeholder="셀러 영문명"
                    ref={register({
                      required: true,
                    })}
                  />
                </InputBox>
              </Td>
            </Tr>
            <Tr>
              <Td>셀러 계정</Td>
              <Td className="infoData">
                {sellerDetail && sellerDetail.account}
              </Td>
            </Tr>
          </tbody>
        </Table>
      </Content>
    </Fragment>
  );
}

export default BasicInformation;

const Fragment = styled.div``;

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
  padding: 8px;
  vertical-align: middle;
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  :first-child {
    width: 20%;
  }
`;

const ImportantStar = styled.label`
  margin-left: 3px;
  font-size: 14px;
  color: red;
`;

const Thumbnail = styled.div`
  margin-bottom: 5px;
  width: 130px;
  height: 100px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ChangeThumbnailBtn = styled.div`
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

const WarningMsg = styled.div`
  margin-top: ${({ warningMsgMargin }) => (warningMsgMargin ? "0px" : "10px")};
  color: #1e90ff;
  font-size: 13px;

  i {
    margin-right: 3px;
  }
`;

const Bold = styled.span`
  font-weight: bolder;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
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
`;

const Input = styled.input`
  position: absolute;
  top: 3px;
  left: 35px;
  width: 80%;
  height: 25px;
  font-size: 14px;
`;
