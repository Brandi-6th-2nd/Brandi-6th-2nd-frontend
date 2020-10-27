import React, { Fragment, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "./DatePicker.css";

function DatePick() {
  const [date, setDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleChange = (date) => setDate(date);
  return (
    <Fragment>
      <PickerWrapper>
        <NewDatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholder="클릭해주세요....."
        />
        <span>~</span>
        <NewDatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholder="클릭해주세요....."
        />
      </PickerWrapper>
    </Fragment>
  );
}

export default DatePick;

const PickerWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  background-color: white;
  span {
    display: table-cell;
    padding: 8px 12px;
    text-align: center;
    background-color: #e5e5e5;
  }
`;

const NewDatePicker = styled(DatePicker)`
  text-align: center;
  font-size: 14px;
  padding: 6px 0;
  width: 100%;
`;
