//импорт react и useState
import React, { useState } from 'react';
//импорт styled-components для стилей
import styled from 'styled-components';
//импорт кнопки
import Button from '../ui/Button';

//стили для общего блока inputs
const Controls = styled.div`
  //использую flex
  display: flex;
  //разрешаю перенос строк
  flex-wrap: wrap;
  //расстояние между элементами
  gap: 1rem;
  //отступ снизу
  margin-bottom: 1rem;
  //выравнивание текста
  text-align: left;
`;

//стили одного поля
const Control = styled.div`
  //делаю flex
  display: flex;
  //элементы колонкой
  flex-direction: column;

  label {
    //жирный текст
    font-weight: bold;
    //отступ снизу
    margin-bottom: 0.5rem;
  }

  input {
    //наследую шрифт
    font: inherit;
    //внутренний отступ
    padding: 0.5rem;
    //скругление
    border-radius: 6px;
    //граница
    border: 1px solid #ccc;
    //ширина поля
    width: 20rem;
    //максимальная ширина
    max-width: 100%;
  }
`;

//стили блока кнопки
const Actions = styled.div`
  //кнопка справа
  text-align: right;
  //занимает всю ширину
  width: 100%;
`;

//компонент формы
const ExpenseForm = ({ onGet }) => {
  //создаю состояние для input полей
  const [userInputs, setUserInputs] = useState({
    //начальное значение title
    title: '',
    //начальное значение price
    price: '',
    //начальное значение date
    date: ''
  });

  //обработка изменения input
  const InputChangeHandler = (e) => {
    //получаю name и value поля
    const { name, value } = e.target;

    //обновляю состояние
    setUserInputs((prev) => ({
      //оставляю старые значения
      ...prev,
      //обновляю только измененное поле
      [name]: value
    }));
  };

  //обработка отправки формы
  const submitHandler = (e) => {
    //отменяю перезагрузку страницы
    e.preventDefault();
    //передаю данные в родительский компонент
    onGet({
      //название
      title: userInputs.title,
      //цена
      price: +userInputs.price,
      //дата
      date: new Date(userInputs.date)
    });

    //очищаю форму после отправки
    setUserInputs({
      title: '',
      price: '',
      date: ''
    });
  };

  //возвращаю форму
  return (
    //обработка submit
    <form onSubmit={submitHandler}>
      <Controls>
        <Control>
          {/*подпись поля*/}
          <label>Title</label>
          <input
            //имя поля
            name="title"
            //тип input
            type="text"
            //связь со state
            value={userInputs.title}
            //обработка ввода
            onChange={InputChangeHandler}
          />
        </Control>
        <Control>
          <label>Price</label>
          <input
            name="price"
            type="number"
            value={userInputs.price}
            onChange={InputChangeHandler}
          />
        </Control>
        <Control>
          <label>Date</label>
          <input
            name="date"
            type="date"
            value={userInputs.date}
            onChange={InputChangeHandler}
          />
        </Control>
        <Actions>
          {/*кнопка отправки*/}
          <Button>
            Add Expense
          </Button>
        </Actions>
      </Controls>
    </form>
  );
};

//экспорт компонента
export default ExpenseForm;