import React, { useState, useEffect } from "react";
import styled from "styled-components";

function SellerTable() {
  const [sellerList, setSellerList] = useState([]);

  useEffect(() => {
    fetch(`public/Data/AccountManage/SellerList.json`)
      .then((response) => response.json())
      .then((response) => setSellerList(response.SellerList));
  }, []);

  return (
    <Fragment>
      <Table>
        <tbody>
          <Tr>
            <Th>
              <input type="checkbox" />
            </Th>
            <Th>번호</Th>
            <Th>셀러아이디</Th>
            <Th>영문이름</Th>
            <Th>한글이름</Th>
            <Th>셀러구분</Th>
            <Th>회원번호</Th>
            <Th>담당자이름</Th>
            <Th>셀러상태</Th>
            <Th>담당자연락처</Th>
            <Th>담당자이메일</Th>
            <Th>셀러속성</Th>
            <Th>상품개수</Th>
            <Th>URL</Th>
            <Th>등록일시</Th>
            <Th>Actions</Th>
          </Tr>
          <Tr>
            <Td></Td>
            <Td>
              <Input type="text" autoComplete="off" name="seller_no" />
            </Td>
            <Td>
              <Input type="text" autoComplete="off" name="seller_id" />
            </Td>
            <Td>
              <Input type="text" autoComplete="off" name="seller_en_name" />
            </Td>
            <Td>
              <Input type="text" autoComplete="off" name="seller_ko_name" />
            </Td>
            <Td>
              <Select name="셀러구분">
                <option value="셀러구분">셀러구분</option>
                <option value="일반셀러">일반셀러</option>
                <option value="헬피셀러">헬피셀러</option>
              </Select>
            </Td>
            <Td>
              <Input type="text" autoComplete="off" name="member_no" />
            </Td>
            <Td>
              <Input type="text" autoComplete="off" name="seller_charger" />
            </Td>
            <Td>
              <Select name="셀러상태">
                <option value="Select">Select</option>
                <option value="입점대기">입점대기</option>
                <option value="입점">입점</option>
                <option value="퇴점">퇴점</option>
                <option value="퇴점대기">퇴점대기</option>
                <option value="휴점">휴점</option>
              </Select>
            </Td>
            <Td>
              <Input type="text" autoComplete="off" name="seller_telno" />
            </Td>
            <Td>
              <Input type="text" autoComplete="off" name="seller_email" />
            </Td>
            <Td>
              <Select name="셀러속성">
                <option value="Select">Select</option>
                <option value="쇼핑몰">쇼핑몰</option>
                <option value="마켓">마켓</option>
                <option value="로드샵">로드샵</option>
                <option value="디자이너브랜드">디자이너브랜드</option>
                <option value="제너럴브랜드">제너럴브랜드</option>
                <option value="내셔널브랜드">내셔널브랜드</option>
                <option value="뷰티">뷰티</option>
              </Select>
            </Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td>
              {/* <SearchButton>Search</SearchButton>
              <ResetButton>Reset</ResetButton> */}
            </Td>
          </Tr>
          {sellerList.map((el) => (
            <Tr key={el.id}>
              <Td>
                <input type="checkbox" />
              </Td>
              <Td>{el.번호}</Td>
              <Td>{el.셀러아이디}</Td>
              <Td>{el.영문이름}</Td>
              <Td>{el.한글이름}</Td>
              <Td>{el.셀러구분}</Td>
              <Td>{el.회원번호}</Td>
              <Td>{el.담당자이름}</Td>
              <Td>{el.셀러상태}</Td>
              <Td>{el.담당자연락처}</Td>
              <Td>{el.담당자이메일}</Td>
              <Td>{el.셀러속성}</Td>
              <Td>{el.상품개수}</Td>
              <Td>{el.URL}</Td>
              <Td>{el.등록일시}</Td>
              <Td>{el.Actions}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
}

export default SellerTable;

const Fragment = styled.div`
  margin: 10px 0px;
  width: 100%;
  overflow: auto;
  border-right: 1px solid #ddd;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

const Table = styled.table`
  white-space: nowrap;
  width: 100%;

  Tr:nth-child(2n + 1) {
    background-color: #f1f1f1;
  }
`;

const Tr = styled.tr`
  width: auto;
`;

const Th = styled.th`
  padding: 8px;
  width: auto;
  font-size: 14px;
  text-align: left;
  font-weight: bolder;
  border-left: 1px solid #ddd;
  background-color: #eee;
`;

const Td = styled.td`
  padding: 8px;
  width: auto;
  font-size: 13px;
  text-align: left;
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 56.6px;
  height: 30px;
  padding: 2px 10px;
  font-size: 13px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  width: 56.6px;
  height: 30px;
  padding: 2px 10px;
  font-size: 13px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ResetButton = styled.button`
  width: 56.6px;
  height: 30px;
  padding: 2px 10px;
  font-size: 13px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
