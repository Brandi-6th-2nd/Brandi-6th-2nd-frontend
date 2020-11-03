import React from "react";
import styled from "styled-components";

function BasicInformation() {
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
                  <ThumbnailImg></ThumbnailImg>
                </Thumbnail>
                <ChangeThumbnailBtn>이미지 선택</ChangeThumbnailBtn>
                <WarningMsg>
                  <i className="fas fa-exclamation-circle" />
                  셀러 프로필 확장자는 <Bold>jpg, jpeg, png</Bold> 만 가능하며,
                  허용 가능한 최대 파일사이즈 크기는 <Bold>5MB</Bold> 입니다.
                </WarningMsg>
              </Td>
            </Tr>
            <Tr>
              <Td>셀러 상태</Td>
              <Td className="infoData">입점</Td>
            </Tr>
            <Tr>
              <Td>셀러 한글명</Td>
              <Td className="infoData">heeshop</Td>
            </Tr>
            <Tr>
              <Td>셀러 영문명</Td>
              <Td className="infoData">heeshop</Td>
            </Tr>
            <Tr>
              <Td>셀러 계정</Td>
              <Td className="infoData">
                juheetest
                <ChangePasswordBtn>비밀번호 변경하기</ChangePasswordBtn>
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
  padding: 4px;
  width: 130px;
  height: 100px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ThumbnailImg = styled.img`
  margin: 0 15px;
`;

const ChangeThumbnailBtn = styled.div`
  padding: 6px 12px;
  width: 96.35px;
  border: 1px solid #ddd;
  border-radius: 4px;

  :hover {
    background-color: #ddd;
    border: 1px solid #333;
    cursor: pointer;
  }
`;

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

const ChangePasswordBtn = styled.div`
  display: inline-block;
  margin-left: 5px;
  padding: 1px 5px;
  width: 110px;
  color: #fff;
  font-size: 12px;
  line-height: 1.5;
  background-color: #d9534f;
  border-color: #d43f3a;
  border-radius: 5px;

  :hover {
    background-color: #d43f3a;
  }
`;
