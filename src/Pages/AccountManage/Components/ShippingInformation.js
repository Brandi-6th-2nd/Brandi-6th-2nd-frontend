import React from "react";
import styled from "styled-components";

function ShippingInformation({ register, errors }) {
  return (
    <Fragment>
      <Title>
        <i className="fas fa-user" /> 배송정보 및 교환/환불 정보
      </Title>
      <Content>
        <Table>
          <tbody>
            <Tr>
              <Td className="infoData">
                배송 정보 <ImportantStar>*</ImportantStar>
              </Td>
              <Td className="infoData">
                <TextArea
                  name="delivery_info"
                  placeholder="ex)
                  도서산간 지역은 배송비가 추가비용이 발생할 수 있습니다.
                  결제 완료 후 1~3일 후 출고됩니다."
                  ref={register({
                    required: true,
                  })}
                />
                {errors.delivery_info &&
                  errors.delivery_info.type === "required" && (
                    <p>필수 입력항목입니다.</p>
                  )}
                <WarningMsg>
                  <i className="fas fa-exclamation-circle" />
                  문장이 끝나면 엔터로 줄바꿈을 해주세요.
                </WarningMsg>
              </Td>
            </Tr>
            <Tr>
              <Td className="infoData">
                교환/환불 정보 <ImportantStar>*</ImportantStar>
              </Td>
              <Td className="infoData">
                <TextArea
                  name="exchange_info"
                  placeholder="ex)
                  브랜디는 소비자보호법 및 전자상거래법을 기반한 환불보장제를 운영 중에 있습니다.
                  정당하지 않은 사유로 인한 환불 거부 등은 제재 사유가 될 수 있는 점 참고 부탁드립니다."
                  ref={register({
                    required: true,
                  })}
                />
                {errors.exchange_info &&
                  errors.exchange_info.type === "required" && (
                    <p>필수 입력항목입니다.</p>
                  )}
                <WarningMsg>
                  <i className="fas fa-exclamation-circle" />
                  문장이 끝나면 엔터로 줄바꿈을 해주세요.
                </WarningMsg>
              </Td>
            </Tr>
          </tbody>
        </Table>
      </Content>
    </Fragment>
  );
}

export default ShippingInformation;

const Fragment = styled.div`
  margin-top: 25px;
`;

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

const TextArea = styled.textarea`
  width: 90%;
  height: 100px;
  padding: 6px 12px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  :focus {
    outline: none;
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
