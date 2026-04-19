//импортируем форму добавления расходов
import ExpenseForm from './ExpenseForm';
//импортируем css модуль
import styles from './NewExpenses.module.css';
//импортируем карточку
import Card from '../ui/Card';

//создаем компонент добавления расходов
const NewExpenses = (props) => {
  //создаем функцию получения нового расхода из формы
  const getExpenseHandler = (expense) => {
    //создаем новый объект расхода
    const expenseWithId = {
      ...expense, //копируем все свойства объекта expense
      id: Math.random().toString() //создаем уникальный id
    };

    //передаем новый расход в App
    props.onAdd(expenseWithId);
  };

  //возвращаем интерфейс
  return (
    //отображаем карточку со стилями
    <Card className={styles['new-expense']}>
      {/*передаем функцию в форму*/}
      <ExpenseForm onGet={getExpenseHandler} />
    </Card>
  );
};

//экспортируем компонент
export default NewExpenses;