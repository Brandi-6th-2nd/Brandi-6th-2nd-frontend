import React, { Fragment, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import { GlobalContext } from "../../../../contexts/globalContext";

export default function Category({}) {
  const { state, dispatch } = useContext(GlobalContext);
  const {
    categoryData,
    currentFirstCategory,
    currentSecondCategory,
  } = state.productAdd;

  // 상품 등록 페이지에 필요한 데이터들을 서버에 요청하여 setData 함수 실행
  useEffect(() => {
    axios
      // .get(`public/Data/ProductAdd/mockData.json`)
      .get(`http://10.251.1.99:5000/product`)
      .then((res) => setData(res));
  }, []);

  // 서버에서 데이터를 받아온 뒤, productAddContext.js에서 설정한 상태값 categortData (first, second)에 저장
  const setData = (res) => {
    const categoryData = res.data.productAdd.categories;

    const firstCategory = categoryData.map((el) => {
      const firstCategoryObj = { id: el.id, name: el.name };
      return firstCategoryObj;
    });

    const secondCategory = categoryData.map((el) => {
      return el.childs;
    });

    dispatch({
      type: "setFirstCategoryData",
      value: firstCategory,
    });

    dispatch({
      type: "setSecondCategoryData",
      value: secondCategory,
    });
  };

  const handleCurrentFirstCategory = (e) => {
    dispatch({ type: "setCurrentFirstCategory", value: e.target.value });
    dispatch({ type: "setCurrentSecondCategory", value: 0 });
  };

  const handleCurrentSecondCategory = (e) => {
    dispatch({ type: "setCurrentSecondCategory", value: e.target.value });
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
                {/* 1차 카테고리 설정 */}
                <Select onChange={handleCurrentFirstCategory}>
                  <option value="0">1차 카테고리를 선택해주세요.</option>
                  {categoryData.first &&
                    categoryData.first.map((category) => {
                      return (
                        <option value={category.id} key={category.id}>
                          {category.name}
                        </option>
                      );
                    })}
                </Select>
              </InsideTd>
              <InsideTd>
                {/* 2차 카테고리 설정 */}
                <Select
                  value={currentSecondCategory}
                  onChange={handleCurrentSecondCategory}
                >
                  <option value="0">
                    {Number(currentFirstCategory) === 0
                      ? "1차 카테고리를 먼저 선택해주세요."
                      : "2차 카테고리를 선택해주세요"}
                  </option>
                  {/* 2차 카테고리 목록은 currentFirstCategory의 value(id 값)를 받아와서 map함수를 적용함. */}
                  {categoryData.second && currentFirstCategory >= 1
                    ? categoryData.second[
                        currentFirstCategory && currentFirstCategory - 1
                      ].map((category) => {
                        return (
                          <option value={category.id} key={category.id}>
                            {category.name}
                          </option>
                        );
                      })
                    : ""}
                </Select>
              </InsideTd>
            </tr>
          </Tbody>
        </Table>
      </Td>
    </Fragment>
  );
}

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
