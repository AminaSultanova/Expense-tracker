//импортируем useState для хранения выбранного года
import { useState } from 'react'
//импортируем styled-components для написания стилей
import styled from 'styled-components';
//импортируем карточку
import Card from "../ui/Card";
//импортируем фильтр по году
import ExpenseFilter from './ExpenseFilter';
//импортируем компонент одной траты
import ExpenseItem from "./ExpenseItem";

//создаем стилизованный компонент на основе Card
const StyledCard = styled(Card)`
  padding: 1rem; //добавляем внутренний отступ
  width: 50rem; //задаем ширину блока
  margin: 2rem auto; //делаем отступ сверху и центрируем блок
  background-color: rgb(22, 22, 21); //задаем темный фон
  max-width: 95%; //ограничиваем ширину для адаптива
`;

//создаем компонент expenses
const Expenses = (props) => {
  //создаем состояние для выбранного года
  const [filteredYear, setFilteredYear] = useState('all');
  //создаем функцию изменения фильтра
  const filterChangeHandler = (event) => {
    //получаем выбранный год и сохраняем в состояние
    setFilteredYear(event.target.value);
  };

  //создаем переменную отфильтрованных расходов
  const filteredExpenses =
    //если выбран all показываем все расходы
    filteredYear === 'all'
      ? props.expenses
      //иначе фильтруем массив расходов (тернарный оператор)
      : props.expenses.filter((expense) => {
          //сравниваем год расхода с выбранным годом
          return expense.date.getFullYear().toString() === filteredYear;
        });

  //возвращаем интерфейс
  return (
    //отображаем общую карточку расходов
    <StyledCard>
      {/*передаем функцию изменения фильтра*/}
      <ExpenseFilter onChange={filterChangeHandler} />
      {/*перебираем массив расходов*/}
      {filteredExpenses.map((el) => (
        //для каждого элемента создаем карточку расхода
        <ExpenseItem
          //передаем уникальный ключ
          key={el.id}
          //передаем объект расхода
          expense={el}
          //передаем функцию удаления
          onDelete={props.onDeleteExpense}
        />
      ))}
    </StyledCard>
  );
};


//экспортируем компонент
export default Expenses;