import React, { Fragment, useState } from "react";
import styled from "styled-components";

function DefaultInfo({ categoryData }) {
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
                    value="Y"
                    defaultChecked
                  />
                  <Label htmlFor="sell">판매</Label>
                </InputItem>
                <InputItem>
                  <InputRadio type="radio" name="sell" id="noSell" value="Y" />
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
                    value="Y"
                    defaultChecked
                  />
                  <Label htmlFor="display">진열</Label>
                </InputItem>
                <InputItem>
                  <InputRadio
                    type="radio"
                    name="display"
                    id="noDisplay"
                    value="Y"
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
`;

const InsideTd = styled.td`
  ${({ theme }) => theme.td()}

  width: 50% !important;
`;

const InputGroup = styled.div`
  display: flex;
`;

const InputItem = styled.div`
  display: flex;
  align-items: center;
`;

const InputRadio = styled.input`
  margin: 0 5px 0 0;
  cursor: pointer;
`;

const Label = styled.label`
  margin-right: 30px;
  cursor: pointer;
`;

const WarnMsg = styled.div`
  display: flex;
  margin-top: ${({ second }) => (second ? "5px" : "10px")};
  color: #1e90ff;

  i {
    margin-right: 3px;
    color: #1e90ff;
  }
`;

const Select = styled.select`
  ${({ theme }) => theme.select(`100%`, `34px`)}
`;

const Input = styled.input`
  ${({ theme }) => theme.input()}
`;
