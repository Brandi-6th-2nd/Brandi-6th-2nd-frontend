import React, { Fragment, useContext, useState } from "react";
import styled from "styled-components";

import { GlobalContext } from "../../../../contexts/globalContext";

export default function ImageRegister() {
  const { dispatch } = useContext(GlobalContext);
  const [mainImageBase64, setMainImageBase64] = useState("");
  const [subFirstImageBase64, setSubFirstImageBase64] = useState("");
  const [subSecondImageBase64, setSubSecondImageBase64] = useState("");
  const [subThirdImageBase64, setSubThirdImageBase64] = useState("");
  const [subFourthImageBase64, setSubFourthImageBase64] = useState("");

  // 대표 이미지 업로드
  const uploadMainImage = (e) => {
    uploadImage(e, setMainImageBase64, "setProductImageFirst");
  };

  // 일반 이미지 업로드 ( 1 ~ 4 )
  const uploadSubFirstImage = (e) => {
    uploadImage(e, setSubFirstImageBase64, "setProductImageSecond");
  };

  const uploadSubSecondImage = (e) => {
    uploadImage(e, setSubSecondImageBase64, "setProductImageThird");
  };

  const uploadSubThirdImage = (e) => {
    uploadImage(e, setSubThirdImageBase64, "setProductImageFourth");
  };

  const uploadSubFourthImage = (e) => {
    uploadImage(e, setSubFourthImageBase64, "setProductImageFifth");
  };

  // 이미지 업로드 함수
  const uploadImage = (e, setImageBase64, setImage) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      base64 ? setImageBase64(base64.toString()) : setImageBase64("");
    };

    const [imgFile] = e.target.files;
    if (imgFile) {
      reader.readAsDataURL(imgFile);
      dispatch({
        type: setImage,
        value: imgFile,
      });
    }
  };

  return (
    <Fragment>
      <Td>이미지 등록</Td>
      <Td>
        <ImgContainer>
          {/* 대표 이미지 업로드 */}
          <ImgSelector>
            <InputImg
              type="file"
              accept="image/jpg"
              id="mainImageUpload"
              onChange={uploadMainImage}
            />
            <ImgWrapper>
              <DefaultImg
                alt="defaultImg"
                imageTrue={mainImageBase64}
                src={DefaultImgSrc}
              />
              <UploadedImg
                alt="uploadedImg"
                imageTrue={mainImageBase64}
                src={mainImageBase64}
              />
            </ImgWrapper>
            <SelectBtn htmlFor="mainImageUpload">
              <span>* 대표 이미지</span> 선택
            </SelectBtn>
          </ImgSelector>
          {/* 일반 이미지 업로드 1 */}
          <ImgSelector>
            <InputImg
              type="file"
              accept="image/jpg"
              id="subFirstImageUpload"
              onChange={uploadSubFirstImage}
            />
            <ImgWrapper>
              <DefaultImg
                alt="defaultImg"
                imageTrue={subFirstImageBase64}
                src={DefaultImgSrc}
              />
              <UploadedImg
                alt="uploadedImg"
                imageTrue={subFirstImageBase64}
                src={subFirstImageBase64}
              />
            </ImgWrapper>
            <SelectBtn htmlFor="subFirstImageUpload">이미지 선택</SelectBtn>
          </ImgSelector>
          {/* 일반 이미지 업로드 2 */}
          <ImgSelector>
            <InputImg
              type="file"
              accept="image/jpg"
              id="subSecondImageUpload"
              onChange={uploadSubSecondImage}
            />
            <ImgWrapper>
              <DefaultImg
                alt="defaultImg"
                imageTrue={subSecondImageBase64}
                src={DefaultImgSrc}
              />
              <UploadedImg
                alt="uploadedImg"
                imageTrue={subSecondImageBase64}
                src={subSecondImageBase64}
              />
            </ImgWrapper>
            <SelectBtn htmlFor="subSecondImageUpload">이미지 선택</SelectBtn>
          </ImgSelector>
          {/* 일반 이미지 업로드 3 */}
          <ImgSelector>
            <InputImg
              type="file"
              accept="image/jpg"
              id="subThirdImageUpload"
              onChange={uploadSubThirdImage}
            />
            <ImgWrapper>
              <DefaultImg
                alt="defaultImg"
                imageTrue={subThirdImageBase64}
                src={DefaultImgSrc}
              />
              <UploadedImg
                alt="uploadedImg"
                imageTrue={subThirdImageBase64}
                src={subThirdImageBase64}
              />
            </ImgWrapper>
            <SelectBtn htmlFor="subThirdImageUpload">이미지 선택</SelectBtn>
          </ImgSelector>
          {/* 일반 이미지 업로드 4 */}
          <ImgSelector>
            <InputImg
              type="file"
              accept="image/jpg"
              id="subFourthImageUpload"
              onChange={uploadSubFourthImage}
            />
            <ImgWrapper>
              <DefaultImg
                alt="defaultImg"
                imageTrue={subFourthImageBase64}
                src={DefaultImgSrc}
              />
              <UploadedImg
                alt="uploadedImg"
                imageTrue={subFourthImageBase64}
                src={subFourthImageBase64}
              />
            </ImgWrapper>
            <SelectBtn htmlFor="subFourthImageUpload">이미지 선택</SelectBtn>
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

const DefaultImg = styled.img`
  display: ${({ imageTrue }) => (imageTrue ? "none" : "block")};
`;

const UploadedImg = styled.img`
  display: ${({ imageTrue }) => (imageTrue ? "block" : "none")};
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

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
