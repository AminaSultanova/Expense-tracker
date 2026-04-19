//импортируем react для создания компонента
import React from 'react';
//импортируем styled-components для написания стилей
import styled from 'styled-components';

//создаем внешний блок фильтра
const FilterWrapper = styled.div`
  color: white; //задаем белый цвет текста
  padding: 0 1rem; //добавляем внутренние отступы слева и справа
`;

//создаем внутренний блок для label и select
const Control = styled.div`
  display: flex; //включаем flex
  width: 100%; //задаем ширину на всю строку
  align-items: center; //выравниваем элементы по центру по вертикали
  justify-content: space-between; //раздвигаем элементы по сторонам
  margin: 1rem 0; //добавляем внешний отступ
`;

//стили текста label
const Label = styled.label`
  font-weight: bold; //делаем текст жирным
  margin-bottom: 0.5rem; //добавляем отступ снизу
`;

//стили select
const Select = styled.select`
  font-size: inherit; //наследуем размер шрифта
  padding: 0.5rem 3rem; //задаем внутренние отступы
  font-weight: bold; //делаем текст жирным
  border-radius: 6px; //скругляем углы
`;

//компонент фильтра
const ExpenseFilter = (props) => {
  //возвращаем интерфейс
  return (
    <FilterWrapper> {/*отображаем внешний блок*/}
      <Control> {/*отображаем внутренний блок*/}
        {/*текст фильтра*/}
        <Label>Select by year</Label> {/*выводим текст фильтра*/}
        <Select onChange={props.onChange}>
          {/*вариант 2023*/}
          <option value="2023">2023</option>
          {/*вариант 2024*/}
          <option value="2024">2024</option>
          {/*вариант 2025*/}
          <option value="2025">2025</option>
          {/*вариант 2026*/}
          <option value="2026">2026</option>
          {/*показать все расходы*/}
          <option value="all">All</option>
        </Select>
      </Control>
    </FilterWrapper>
  );
};

//экспорт компонента
export default ExpenseFilter;