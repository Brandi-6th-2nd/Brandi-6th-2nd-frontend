import React, { Fragment } from "react";
import styled from "styled-components";

function Category({
  categoryData,
  currentIndex,
  setCurrentIndex,
  currentSubIndex,
  setCurrentSubIndex,
}) {
  // ProductAdd.js에서 받아온 1차, 2차 카테고리 데이터들을 key, value별로 변수에 담아 저장함.
  const firstCategory = categoryData && Object.keys(categoryData);
  // firstCategory 출력 예시 : ["아우터", "상의", "바지" ...]
  console.log(firstCategory);
  const secondCategory = categoryData && Object.values(categoryData);
  // secondCategory 출력 예시 : [["자켓", "가디건", ...], ...], ["티셔츠", "셔츠/블라우스", ...], ...]
  console.log(secondCategory);

  const handleCurrentIndex = (e) => {
    console.log(e.target.value);
    setCurrentIndex(e.target.value);
    setCurrentSubIndex(0);
  };

  const handleCurrentSubIndex = (e) => {
    console.log(e.target.value);
    setCurrentSubIndex(e.target.value);
  };

  return (
    <Fragment>
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
                {/* 1차 카테고리가 선택되면 onChange 이벤트를 통해 handleCurrentIndex 함수가 실행됨.
                      이 함수는 ProductAdd.js의 currentIndex라는 state의 값을 현재 선택된 option의 value로 설정함.
                      그리고 ProductAdd.js의 currentSubIndex라는 state의 값을 0으로 설정함. */}
                <Select onChange={handleCurrentIndex}>
                  {firstCategory &&
                    firstCategory.map((category, index) => {
                      return (
                        <option value={index} key={index}>
                          {category}
                        </option>
                      );
                    })}
                </Select>
              </InsideTd>
              <InsideTd>
                {/* 1차 카테고리를 선택했을 때 실행되었던 handleCurrentIndex 함수에서 currentSubIndex라는 
                      state의 값을 0으로 설정하였으며, 그 값을 초기 value로 받아옴.
                      2차 카테고리 선택에 변화가 생길 때마다 onChange 이벤트를 통해 handleCurrentSubIndex 함수가 실행됨.
                      1차 카테고리 선택시와 마찬가지로 이 함수는 ProductAdd.js의 currentSubIndex라는 state의 값을 
                      현재 선택된 option의 value로 설정함. */}
                <Select
                  value={currentSubIndex}
                  onChange={handleCurrentSubIndex}
                >
                  {secondCategory &&
                    secondCategory[currentIndex].map((category, index) => {
                      return (
                        <option value={index} key={index}>
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
    </Fragment>
  );
}

export default Category;

const Table = styled.table`
  ${({ theme }) => theme.table()}
`;

const Thead = styled.thead``;

const Th = styled.th`
  ${({ theme }) => theme.th()}
  font-size: 14px;
  font-weight: 600;
  background: #ffffff;

  i {
    font-size: 12px;
    color: #666666;
  }
`;

const Tbody = styled.tbody``;

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

const Select = styled.select`
  ${({ theme }) => theme.select(`100%`, `34px`)}
`;
