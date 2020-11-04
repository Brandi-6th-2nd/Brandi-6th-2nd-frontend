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
  return (
    <MappingContainer>
      <td>
        <input
          type={"checkbox"}
          onChange={(e) => handleChecked(e.target.checked, el.id)}
          checked={isChecked.includes(el.id) ? true : false}
        ></input>
      </td>
      <td>{el.postId}</td>
      <td>
        <Link to="/orderDetails">{el.name}</Link>
      </td>
      <td>{el.email}</td>
      <td>{el.body}</td>
      <td>{el.product_name}</td>
      <td>{el.option_info}</td>
      <td>{el.quantity}</td>
      <td>{el.orderer_name}</td>
      <td>{el.phone_number}</td>
      <td>{el.payment_amount}</td>
      <td>{el.order_status}</td>
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
