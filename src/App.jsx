//импорт useState для работы с состоянием
import { useState } from 'react';
//импорт styled-components для стилей
import styled from 'styled-components';
//импорт компонента со списком расходов
import Expenses from './components/expenses/Expenses';
//импорт формы добавления расходов
import NewExpenses from './components/newExpenses/NewExpenses';

//начальные данные рсходов
const DUMMY_EXPENSES = [
  //первый расход
  {
    //id расхода
    id: 1,
    //название покупки
    title: "Cola",
    //цена
    price: 100,
    //дата
    date: new Date(2025, 1, 12)
  },
  //второй расход
  {
    id: 2,
    title: "Carpet",
    price: 2500,
    date: new Date(2026, 10, 9)
  },
  //третий расход
  {
    id: 3,
    title: "Sofa",
    price: 10330,
    date: new Date(2024, 3, 6)
  },
];


//основной контейнер со стилями
const AppWrapper = styled.div`
  /* выравнивание по центру */
  text-align: center;
`;


//главный компонент
function App() {
  //создаю состояние для хранения расходов
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  //функция добавления новой траты
  const addExpenseHandler = (expense) => {
    //обнлвляю список расходов
    setExpenses((prevExpenses) => {
      //добавляю новую запись в начало массива
      return [expense, ...prevExpenses];
    });
  };

  //функция удаления расхода
  const deleteExpenseHandler = (id) => {
    //обновляю список после удаления
    setExpenses((prevExpenses) => {
      // оставляю только те расходы id которых не совпадает
      return prevExpenses.filter(
        (expense) => expense.id !== id
      );
    });
  };

  //возвращаю интерфейс
  return (
    <AppWrapper>
      {/*передаю функцию добавления */}
      <NewExpenses onAdd={addExpenseHandler} />
      {/*передаю список расходов и удаление */}
      <Expenses
        expenses={expenses}
        onDeleteExpense={deleteExpenseHandler}
      />
    </AppWrapper>
  );
}

//экспорт компонента
export default App;