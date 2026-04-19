//импортируем react для создания компонентов 
import React from 'react';
//импортируем styled-components для написания css внутри js
import styled from 'styled-components';

//стили для блока даты
const DateWrapper = styled.div`
  display: flex; //включаем flex для расположения элементов
  flex-direction: column; //располагаем элементы сверху вниз
  width: 5.5rem; //ширина блока даты
  height: 5.5rem; //высота блока даты
  border: 1px solid #ececec; //добавляем рамку вокруг блока
  background-color: #2a2a2a; //задаем темный фон
  color: white; //делаем текст белым
  border-radius: 12px; //скругляем углы блока
  align-items: center; //выравниваем элементы по горизонтали по центру
  justify-content: center; //выравниваем элементы по вертикали по центру
  margin: 1rem; //делаем внешний отступ
`;

//стили дня
const Day = styled.div`
  font-size: 1.5rem; //задаю размер шрифта
  font-weight: bold; //делаю текст жирным
`;

//стили месяца
const Month = styled.div`
  font-size: 0.75rem; //размер шрифта меньше
  font-weight: bold; //делаю текст жирным
`;

//стили года
const Year = styled.div`
  font-size: 0.75rem; //размер шрифта для года
`;

//создаем компонент ExpenseDate
const ExpenseDate = (props) => {
  //получаем дату из props
  const expenseDate = props.date;
  //получаем год
  const year = expenseDate.getFullYear();
  //получаем название месяца
  const month = expenseDate.toLocaleString("en-US", {
    month: "long" //показываю месяц словом
  });
  //получаем день
  const day = expenseDate.toLocaleString("en-US", {
    day: "2-digit" //показываем день двумя цифрами
  });

  //возвращаем интерфейс
  return (
    //отображаем блок даты
    <DateWrapper>
      {/*выводим день*/}
      <Day>
        {/*подставляем значение day*/}
        {day}
      </Day>
      {/*выводим месяц*/}
      <Month>
        {/*подставляем значение month*/}
        {month}
      </Month>
      {/*выводим год*/}
      <Year>
        {/*подставляем значение year*/}
        {year}
      </Year>
    </DateWrapper>
  );
};

//экспорт компонента
export default ExpenseDate;