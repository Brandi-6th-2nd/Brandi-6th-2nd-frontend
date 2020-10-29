import React, { Fragment } from "react";
import styled from "styled-components";

function ImageRegister() {
  return (
    <Fragment>
      {/* 추후 map 돌려서 한번에 관리할 예정 */}
      <Td>이미지 등록</Td>
      <Td>
        <ImgContainer>
          <ImgSelector>
            <InputImg type="file" accept="image/jpg" />
            <ImgWrapper>
              <DefaultImg alt="defaultImg" src={DefaultImgSrc} />
            </ImgWrapper>
            <SelectBtn>
              <InputImg type="file" accept="image/jpg" />
              <span>* 대표 이미지</span> 선택
            </SelectBtn>
          </ImgSelector>
          <ImgSelector>
            <InputImg type="file" accept="image/jpg" />
            <ImgWrapper>
              <DefaultImg alt="defaultImg" src={DefaultImgSrc} />
            </ImgWrapper>
            <SelectBtn>
              <InputImg type="file" accept="image/jpg" />
              이미지 선택
            </SelectBtn>
          </ImgSelector>
          <ImgSelector>
            <InputImg type="file" accept="image/jpg" />
            <ImgWrapper>
              <DefaultImg alt="defaultImg" src={DefaultImgSrc} />
            </ImgWrapper>
            <SelectBtn>
              <InputImg type="file" accept="image/jpg" />
              이미지 선택
            </SelectBtn>
          </ImgSelector>
          <ImgSelector>
            <InputImg type="file" accept="image/jpg" />
            <ImgWrapper>
              <DefaultImg alt="defaultImg" src={DefaultImgSrc} />
            </ImgWrapper>
            <SelectBtn>
              <InputImg type="file" accept="image/jpg" />
              이미지 선택
            </SelectBtn>
          </ImgSelector>
          <ImgSelector>
            <InputImg type="file" accept="image/jpg" />
            <ImgWrapper>
              <DefaultImg alt="defaultImg" src={DefaultImgSrc} />
            </ImgWrapper>
            <SelectBtn>
              <InputImg type="file" accept="image/jpg" />
              이미지 선택
            </SelectBtn>
          </ImgSelector>
        </ImgContainer>
        <WarnMsg>
          <i className="fas fa-exclamation-triangle"></i>
          <span>
            640 * 720 사이즈 이상 등록 가능하며 <b>확장자는 jpg</b> 만 등록
            가능합니다.
          </span>
        </WarnMsg>
      </Td>
    </Fragment>
  );
}

export default ImageRegister;

const Td = styled.td`
  ${({ theme }) => theme.td()}
`;

const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 15px;
`;

const ImgSelector = styled.label`
  margin-right: 4px;
  margin-bottom: 10px;
`;

const InputImg = styled.input`
  display: none;
`;

const ImgWrapper = styled.div`
  width: 180px;
  height: 180px;
  border: 1px solid #dddddd;
  border-radius: 3px;
  padding: 4px;
  background: #ffffff;
  cursor: pointer;
`;

const DefaultImg = styled.img``;

const DefaultImgSrc = "https://sadmin.brandi.co.kr/include/img/no_image.png";

const SelectBtn = styled.label`
  display: inline-block;
  font-size: 14px;
  color: #000000;
  background: #ffffff;
  padding: 9px 12px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  margin: ${({ detailInfo }) => (detailInfo ? "38px 15px 10px" : "5px 0 0 0")};
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
    border: 0.5px solid #adb3af;
  }

  span {
    color: #2a96ff;
  }
`;

const WarnMsg = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 15px;
  color: #1e90ff;

  i {
    margin-right: 3px;
    color: #1e90ff;
  }

  b {
    font-weight: bold;
  }
`;
