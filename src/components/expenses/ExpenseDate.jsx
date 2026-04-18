//импорт react
import React from 'react';
//импорт styled-components
import styled from 'styled-components';

//стили блока даты
const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

//стили дня
const Day = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

//стили месяца
const Month = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`;

//стили года
const Year = styled.div`
  font-size: 0.75rem;
`;

//компонент даты
const ExpenseDate = (props) => {
  //получаю дату из props
  const expenseDate = props.date;
  //получаю год
  const year = expenseDate.getFullYear();
  //получаю название месяца
  const month = expenseDate.toLocaleString("en-US", {
    month: "long"
  });
  //получаю день
  const day = expenseDate.toLocaleString("en-US", {
    day: "2-digit"
  });

  //возвращаю интерфейс
  return (
    <DateWrapper>
      {/*вывожу день*/}
      <Day>
        {day}
      </Day>
      {/*вывожу месяц*/}
      <Month>
        {month}
      </Month>
      {/*вывожу год*/}
      <Year>
        {year}
      </Year>
    </DateWrapper>
  );
};

//экспорт компонента
export default ExpenseDate;