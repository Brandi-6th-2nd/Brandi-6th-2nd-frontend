import React, { Fragment } from "react";
import styled from "styled-components";

function ProductDetailInfo() {
  return (
    <Fragment>
      <Td>
        상세 상품 정보 <mark>*</mark>
      </Td>
      <Td>
        <InputGroup>
          <InputItem>
            <InputRadio
              type="radio"
              name="upload"
              id="simpleUpload"
              value="Y"
              defaultChecked
            />
            <Label htmlFor="simpleUpload">간편 업로드</Label>
          </InputItem>
          <InputItem>
            <InputRadio type="radio" name="upload" id="useEditor" value="Y" />
            <Label htmlFor="useEditor">에디터 사용 (html 가능)</Label>
          </InputItem>
          <span>
            ( 에디터에 따라서 상세 내용 화면에 다소 차이가 있을 수 있습니다. )
          </span>
        </InputGroup>
        <ImgWarnMsg>
          <i className="fas fa-exclamation-triangle"></i>
          <span>
            상품상세이미지의 권장 사이즈는 <b>가로사이즈 1000px</b> 이상입니다.
          </span>
        </ImgWarnMsg>
        <SelectBtn>
          <InputImg type="file" accept="image/jpg, image/png" />
          <i className="far fa-image"></i> 사진 삽입
        </SelectBtn>
        <span className="allowableImg">
          이미지 확장자는 JPG, PNG만 등록 가능합니다.
        </span>
        <PhotoArea />
      </Td>
    </Fragment>
  );
}

export default ProductDetailInfo;

const Td = styled.td`
  ${({ theme }) => theme.td()}

  mark {
    background: none;
    color: red;
  }

  .allowableImg {
    color: red;
    font-weight: bold;
  }
`;

const InputGroup = styled.div`
  display: flex;
  padding: 0 15px;
`;

const InputItem = styled.div`
  display: flex;
  align-items: center;
`;

const InputRadio = styled.input`
  margin: 0 5px 0 0;
  cursor: pointer;
  &:checked {
    color: gray;
  }
`;

const Label = styled.label`
  margin-right: 30px;
  cursor: pointer;
`;

const ImgWarnMsg = styled.div`
  position: relative;
  display: flex;
  margin-top: 16px;
  padding: 0 15px;
  color: #1e90ff;

  &::after {
    content: "";
    position: absolute;
    top: 30px;
    bottom: 0;
    left: 15px;
    right: 15px;
    height: 0.5em;
    border-top: 1px solid #e0dfdf;
    z-index: 1;
  }

  i {
    margin-right: 3px;
    color: #1e90ff;
  }

  b {
    font-weight: bold;
  }
`;

const SelectBtn = styled.label`
  display: inline-block;
  font-size: 14px;
  color: #000000;
  background: #ffffff;
  padding: 9px 12px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  margin: 38px 15px 10px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
    border: 0.5px solid #adb3af;
  }

  span {
    color: #2a96ff;
  }
`;

const InputImg = styled.input`
  display: none;
`;

const PhotoArea = styled.textarea`
  width: 95%;
  height: 400px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 6px 12px;
  text-align: center;
  outline: none;
  resize: none;
  margin: 0 15px;
`;
