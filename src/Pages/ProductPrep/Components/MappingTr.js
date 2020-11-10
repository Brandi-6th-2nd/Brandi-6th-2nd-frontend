import React, { Fragment, useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

function MappingTr({
  isAllChecked,
  setIsAllChecked,
  isChecked,
  setIsChecked,
  el,
  handleChecked,
  data,
}) {
  const orderStatus = {
    1: "상품준비",
    2: "배송준비",
    3: "배송중",
    4: "배송완료",
    5: "구매확정",
  };
  return (
    <MappingContainer>
      <td>
        <input
          type={"checkbox"}
          onChange={(e) => handleChecked(e.target.checked, el.order_id)}
          checked={isChecked.includes(el.order_id) ? true : false}
        ></input>
      </td>
      <td>{el.paid_date}</td>
      <td>{el.order_number}</td>
      <td>
        <Link to="/orderDetails">{el.detailed_order_number}</Link>
      </td>
      <td>{el.seller_name}</td>
      <td>{el.product_name}</td>
      <td>{el.color + "/" + el.size}</td>
      <td>{el.quantity}</td>
      <td>{el.customer_name}</td>
      <td>{el.phone_number}</td>
      <td>{el.paid_total}</td>
      <td>{orderStatus[el.order_status_id]}</td>
    </MappingContainer>
  );
}

export default MappingTr;

const MappingContainer = styled.tr`
  td {
    border: 1px solid #ddd;
    border-collapse: collapse;
    font-size: 13px;
    padding: 8px;
    line-height: 1.42857143;
    /* width: 100%; */
    :first-child {
      text-align: center;
    }
  }
`;
