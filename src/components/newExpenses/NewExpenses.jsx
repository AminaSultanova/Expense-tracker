//импорт формы добавления расходов
import ExpenseForm from './ExpenseForm';
//импорт css модуля
import styles from './NewExpenses.module.css';
//импорт карточки
import Card from '../ui/Card';

//компонент добавления расходов
const NewExpenses = (props) => {
  //функция получает новый расход из формы
  const getExpenseHandler = (expense) => {
    //создаю новый объект и добавляю id
    const expenseWithId = {
      ...expense,
      id: Math.random().toString()
    };
    //передаю новый расход в App
    props.onAdd(expenseWithId);
  };

  //возвращаю интерфейс
  return (
    <Card className={styles['new-expense']}>
      {/*передаю функцию в форму*/}
      <ExpenseForm onGet={getExpenseHandler} />
    </Card>
  );
};

//экспорт компонента
export default NewExpenses;