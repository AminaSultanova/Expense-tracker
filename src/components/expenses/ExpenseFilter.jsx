//импорт react
import React from 'react';
//импорт styled-components
import styled from 'styled-components';

//стили внешнего блока фильтра
const FilterWrapper = styled.div`
  color: white;
  padding: 0 1rem;
`;

//стили внутреннего блока
const Control = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

//стили текста label
const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

//стили select
const Select = styled.select`
  font-size: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
`;

//компонент фильтра
const ExpenseFilter = (props) => {
  //возвращаю интерфейс
  return (
    <FilterWrapper>
      <Control>
        {/*текст фильтра*/}
        <Label>Select by year</Label>
        <Select
          //при выборе года вызываю функцию из props
          onChange={props.onChange}
        >
          {/*вариант 2023*/}
          <option value="2023">
            2023
          </option>
          {/*вариант 2024*/}
          <option value="2024">
            2024
          </option>
          {/*вариант 2025*/}
          <option value="2025">
            2025
          </option>
          {/*вариант 2026*/}
          <option value="2026">
            2026
          </option>
          {/*показать все расходы*/}
          <option value="all">
            All
          </option>
        </Select>
      </Control>
    </FilterWrapper>
  );
};

//экспорт компонента
export default ExpenseFilter;