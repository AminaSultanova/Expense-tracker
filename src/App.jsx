//импортируем useState для работы с состоянием
import { useState } from 'react';
//импортируем styled-components для написания стилей
import styled from 'styled-components';
//импортируем компонент списка расходов
import Expenses from './components/expenses/Expenses';
//импортируем форму добавления расходов
import NewExpenses from './components/newExpenses/NewExpenses';

//создаем начальный массив расходов
const DUMMY_EXPENSES = [
  //создаем первый объект расхода
  {
    id: 1, //задаем id
    title: "Cola", //задаем название
    price: 100, //задаем цену
    date: new Date(2025, 1, 12) //создаем дату
  },

  //создаем второй объект расхода
  {
    id: 2,
    title: "Carpet",
    price: 2500,
    date: new Date(2026, 10, 9)
  },

  //создаем третий объект расхода
  {
    id: 3,
    title: "Sofa",
    price: 10330,
    date: new Date(2024, 3, 6)
  },
];

//создаем основной контейнер со стилями
const AppWrapper = styled.div`
  text-align: center; //выравниваем содержимое по центру
`;

//создаем главный компонент
function App() {
  //создаем состояние списка расходов
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //создаем функцию добавления расхода
  const addExpenseHandler = (expense) => {
    //обновляем список расходов
    setExpenses((prevExpenses) => {
      //добавляем новую запись в начало массива
      return [expense, ...prevExpenses];
    });
  };

  //создаем функцию удаления расхода
  const deleteExpenseHandler = (id) => {
    //обновляем список после удаления
    setExpenses((prevExpenses) => {
      //фильтруем массив и исключаем удаляемый объект
      return prevExpenses.filter(
        (expense) => expense.id !== id
      );
    });
  };

  //возвращаем интерфейс
  return (
    <AppWrapper>
      {/*передаем функцию добавления*/}
      <NewExpenses onAdd={addExpenseHandler} />

      {/*передаем список расходов и функцию удаления*/}
      <Expenses
        expenses={expenses} //передаем массив расходов
        onDeleteExpense={deleteExpenseHandler} //передаем удаление
      />
    </AppWrapper>
  );
}

//экспортируем компонент
export default App;