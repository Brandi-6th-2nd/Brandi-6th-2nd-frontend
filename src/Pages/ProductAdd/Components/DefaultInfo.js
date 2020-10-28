import React, { Fragment } from "react";
import styled from "styled-components";

function DefaultInfo({
  sellOption,
  setSellOption,
  displayOption,
  setDisplayOpiton,
  categoryData,
}) {
  // ProductAdd.js에 있는 sellOption의 state값을 현재 선택된 판매 여부 옵션의 값으로 변경해주기 위한 함수
  const handleSellOption = (e) => {
    setSellOption(e.target.value);
  };

  // ProductAdd.js에 있는 displayOption의 state값을 현재 선택된 진열 여부 옵션의 값으로 변경해주기 위한 함수
  const handleDisplayOption = (e) => {
    setDisplayOpiton(e.target.value);
  };
  // ProductAdd.js에서 받아온 1차, 2차 카테고리 데이터들을 key, value별로 변수에 담아 저장함.
  // firstCategory 출력 예시 : ["아우터", "상의", "바지" ...]
  const firstCategory = categoryData && Object.keys(categoryData);
  // secondCategory 출력 예시 : [["자켓", "가디건", ...], ...], ["티셔츠", "셔츠/블라우스", ...], ...]
  const secondCategory = categoryData && Object.values(categoryData);

  return (
    <Fragment>
      <Table>
        <Thead>
          <tr>
            <Th colSpan="2">
              <i className="fas fa-pencil-alt"></i> &nbsp;기본 정보
            </Th>
          </tr>
        </Thead>
        <Tbody>
          <tr>
            <Td>판매 여부</Td>
            <Td>
              <InputGroup>
                <InputItem>
                  {/* InputRadio에서 name의 의미: 여러개의 radio type input들이 있을 때 같은 그룹으로 묶겠다는 뜻임 */}
                  {/* name을 radio마다 다르게 설정하면 중복선택이 되어버림 */}
                  {/* id는 Label에서 받아 글자만 클릭해도 해당 아이템이 선택되도록 하는 역할 */}
                  <InputRadio
                    type="radio"
                    name="sell"
                    id="sell"
                    value="1"
                    checked={sellOption === "1"}
                    onChange={handleSellOption}
                  />
                  <Label htmlFor="sell">판매</Label>
                </InputItem>
                <InputItem>
                  <InputRadio
                    type="radio"
                    name="sell"
                    id="noSell"
                    value="0"
                    checked={sellOption === "0"}
                    onChange={handleSellOption}
                  />
                  <Label htmlFor="noSell">미판매</Label>
                </InputItem>
              </InputGroup>
              <WarnMsg>
                <i className="fas fa-exclamation-triangle"></i>
                <span>미판매 선택시 앱에서 Sold Out으로 표시됩니다.</span>
              </WarnMsg>
            </Td>
          </tr>
          <tr>
            <Td>진열 여부</Td>
            <Td>
              <InputGroup>
                <InputItem>
                  <InputRadio
                    type="radio"
                    name="display"
                    id="display"
                    value="1"
                    checked={displayOption === "1"}
                    onChange={handleDisplayOption}
                  />
                  <Label htmlFor="display">진열</Label>
                </InputItem>
                <InputItem>
                  <InputRadio
                    type="radio"
                    name="display"
                    id="noDisplay"
                    value="0"
                    checked={displayOption === "0"}
                    onChange={handleDisplayOption}
                  />
                  <Label htmlFor="noDisplay">미진열</Label>
                </InputItem>
              </InputGroup>
              <WarnMsg>
                <i className="fas fa-exclamation-triangle"></i>
                <span>미진열 선택시 앱에서 노출되지 않습니다.</span>
              </WarnMsg>
            </Td>
          </tr>
          <tr>
            <Td>
              카테고리 <mark>*</mark>
            </Td>
            <Td>
              <Table>
                <Thead>
                  <tr>
                    <Th insideTable>1차 카테고리</Th>
                    <Th insideTable>2차 카테고리</Th>
                  </tr>
                </Thead>
                <Tbody>
                  <tr>
                    <InsideTd>
                      <Select>
                        <option value="">1차 카테고리를 선택해주세요</option>
                        {firstCategory &&
                          firstCategory.map((category, index) => {
                            return (
                              <option value={category} key={index}>
                                {category}
                              </option>
                            );
                          })}
                      </Select>
                    </InsideTd>
                    <InsideTd>
                      <Select>
                        <option value="">
                          1차 카테고리를 먼저 선택해주세요
                        </option>
                        {secondCategory &&
                          // secondCategory[현재 state 혹은 value값]을 넣어 map을 사용해 조건별로 달리 출력되도록 작업 예정
                          secondCategory[0].map((category, index) => {
                            return (
                              <option value={category} key={index}>
                                {category}
                              </option>
                            );
                          })}
                      </Select>
                    </InsideTd>
                  </tr>
                </Tbody>
              </Table>
            </Td>
          </tr>
          <tr>
            <Td>
              상품 정보 고시 <mark>*</mark>
            </Td>
            <Td>
              <InputGroup>
                <InputItem>
                  <InputRadio
                    type="radio"
                    name="productInfo"
                    id="detailRefer"
                    value="Y"
                    defaultChecked
                  />
                  <Label htmlFor="detailRefer">상품 상세 참조</Label>
                </InputItem>
                <InputItem>
                  <InputRadio
                    type="radio"
                    name="productInfo"
                    id="inputDirect"
                    value="Y"
                  />
                  <Label htmlFor="inputDirect">직접 입력</Label>
                </InputItem>
              </InputGroup>
            </Td>
          </tr>
          <tr>
            <Td>
              상품명 <mark>*</mark>
            </Td>
            <Td>
              <Input type="text" />
              <WarnMsg>
                <i className="fas fa-exclamation-triangle"></i>
                <span>
                  상품명에는 쌍따옴표(") 또는 홑따옴표(')를 포함할 수 없습니다.
                </span>
              </WarnMsg>
              <WarnMsg second>
                <i className="fas fa-exclamation-triangle"></i>
                <span>상품명에는 4byte 이모지를 포함할 수 없습니다.</span>
              </WarnMsg>
            </Td>
          </tr>
          <tr>
            <Td>한줄 상품 설명</Td>
            <Td>
              <Input type="text" />
            </Td>
          </tr>
          <tr>
            {/* 추후 map 돌려서 한번에 관리할 예정 */}
            <Td>이미지 등록</Td>
            <Td>
              <ImgContainer>
                <ImgSelector>
                  <InputImg type="file" />
                  <ImgWrapper>
                    <DefaultImg alt="defaultImg" src={DefaultImgSrc} />
                  </ImgWrapper>
                  <SelectBtn>
                    <InputImg type="file" />
                    <span>* 대표 이미지</span> 선택
                  </SelectBtn>
                </ImgSelector>
                <ImgSelector>
                  <InputImg type="file" />
                  <ImgWrapper>
                    <DefaultImg alt="defaultImg" src={DefaultImgSrc} />
                  </ImgWrapper>
                  <SelectBtn>
                    <InputImg type="file" />
                    이미지 선택
                  </SelectBtn>
                </ImgSelector>
                <ImgSelector>
                  <InputImg type="file" />
                  <ImgWrapper>
                    <DefaultImg alt="defaultImg" src={DefaultImgSrc} />
                  </ImgWrapper>
                  <SelectBtn>
                    <InputImg type="file" />
                    이미지 선택
                  </SelectBtn>
                </ImgSelector>
                <ImgSelector>
                  <InputImg type="file" />
                  <ImgWrapper>
                    <DefaultImg alt="defaultImg" src={DefaultImgSrc} />
                  </ImgWrapper>
                  <SelectBtn>
                    <InputImg type="file" />
                    이미지 선택
                  </SelectBtn>
                </ImgSelector>
                <ImgSelector>
                  <InputImg type="file" />
                  <ImgWrapper>
                    <DefaultImg alt="defaultImg" src={DefaultImgSrc} />
                  </ImgWrapper>
                  <SelectBtn>
                    <InputImg type="file" />
                    이미지 선택
                  </SelectBtn>
                </ImgSelector>
              </ImgContainer>
              <WarnMsg allowableImg>
                <i className="fas fa-exclamation-triangle"></i>
                <span>
                  640 * 720 사이즈 이상 등록 가능하며 <b>확장자는 jpg</b> 만
                  등록 가능합니다.
                </span>
              </WarnMsg>
            </Td>
          </tr>
          <tr>
            <Td>
              상세 상품 정보 <mark>*</mark>
            </Td>
            <Td>
              <InputGroup detailInfo>
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
                  <InputRadio
                    type="radio"
                    name="upload"
                    id="useEditor"
                    value="Y"
                  />
                  <Label htmlFor="useEditor">에디터 사용 (html 가능)</Label>
                </InputItem>
                <span>
                  ( 에디터에 따라서 상세 내용 화면에 다소 차이가 있을 수
                  있습니다. )
                </span>
              </InputGroup>
              <ImgWarnMsg>
                <i className="fas fa-exclamation-triangle"></i>
                <span>
                  상품상세이미지의 권장 사이즈는 <b>가로사이즈 1000px</b>{" "}
                  이상입니다.
                </span>
              </ImgWarnMsg>
              <SelectBtn detailInfo>
                <InputImg type="file" />
                <i className="far fa-image"></i> 사진 삽입
              </SelectBtn>
              <span className="allowableImg">
                이미지 확장자는 JPG, PNG만 등록 가능합니다.
              </span>
              <PhotoArea />
            </Td>
          </tr>
        </Tbody>
      </Table>
    </Fragment>
  );
}

export default DefaultInfo;

const Table = styled.table`
  ${({ theme }) => theme.table()}
`;

const Thead = styled.thead``;

const Th = styled.th`
  ${({ theme }) => theme.th()}
  font-size: ${({ insideTable }) => (insideTable ? "14px" : "16px")};
  font-weight: ${({ insideTable }) => (insideTable ? "600" : "400")};
  background: ${({ insideTable }) => (insideTable ? "#ffffff" : "#eeeeee")};

  i {
    font-size: 12px;
    color: #666666;
  }
`;

const Tbody = styled.tbody`
  tr {
    td:nth-child(1) {
      width: 15%;
    }
  }
`;

const Td = styled.td`
  ${({ theme }) => theme.td()}

  mark {
    background: none;
    color: red;
  }

  .allowableImg {
    color: red;
    font-weight: bold;
    margin-left: -5px;
  }
`;

const InsideTd = styled.td`
  ${({ theme }) => theme.td()}

  width: 50% !important;
`;

const InputGroup = styled.div`
  display: flex;
  padding: ${({ detailInfo }) => (detailInfo ? "0 15px" : "0")};
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

const WarnMsg = styled.div`
  display: flex;
  margin-top: ${({ second }) => (second ? "5px" : "10px")};
  margin-left: ${({ allowableImg }) => (allowableImg ? "15px" : "none")};
  color: #1e90ff;

  i {
    margin-right: 3px;
    color: #1e90ff;
  }

  b {
    font-weight: bold;
  }
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

const Select = styled.select`
  ${({ theme }) => theme.select(`100%`, `34px`)}
`;

const Input = styled.input`
  ${({ theme }) => theme.input()}
`;

const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 15px;
`;

const InputImg = styled.input`
  display: none;
`;

const ImgSelector = styled.label`
  margin-right: 4px;
  margin-bottom: 10px;
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
