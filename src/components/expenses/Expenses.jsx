//импорт useState для хранения выбранного года
import { useState } from 'react';
//импорт styled-components для стилей
import styled from 'styled-components';
//импорт карточки
import Card from "../ui/Card";
//импорт фильтра по году
import ExpenseFilter from './ExpenseFilter';
//импорт одной карточки расхода
import ExpenseItem from "./ExpenseItem";

//создаю компонент со стилями на основе Card
const StyledCard = styled(Card)`
  //внутренний отступ
  padding: 1rem;
  //ширина блока
  width: 50rem;
  //отступ сверху и по центру
  margin: 2rem auto;
  //цвет фона
  background-color: rgb(22, 22, 21);
  //максимальная ширина для адаптива
  max-width: 95%;
`;

//создаю компонент expenses
const Expenses = (props) => {
  //состояние для выбранного года
  const [filteredYear, setFilteredYear] = useState('all');
  //функция срабатывает когда меняется select
  const filterChangeHandler = (event) => {
    //беру выбранный год и сохраняю в состояние
    setFilteredYear(event.target.value);
  };

  //если выбран all показываю все расходы иначе фильтрую по выбранному году с помощью тернарного оператора
  const filteredExpenses =
    filteredYear === 'all'
      ? props.expenses
      : props.expenses.filter((expense) => {
          //сравниваю год расхода с выбранным годом
          return expense.date.getFullYear().toString() === filteredYear;
        });

  //возвращаю интерфейс
  return (
    //общая карточка для всех расходов
    <StyledCard>
      {/*передаю функцию изменения фильтра*/}
      <ExpenseFilter onChange={filterChangeHandler} />
      {/*перебираю массив расходов*/}
      {filteredExpenses.map((el) => (
        //для каждого объекта создаю карточку расхода
        <ExpenseItem
          //уникальный ключ для react
          key={el.id}
          //передаю весь объект расхода
          expense={el}
          //передаю функцию удаления
          onDelete={props.onDeleteExpense}
        />
      ))}
    </StyledCard>
  );
};

//экспорт компонента
export default Expenses;