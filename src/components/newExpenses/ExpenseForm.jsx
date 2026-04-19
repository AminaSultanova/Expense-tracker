//импортируем react и useState для работы с компонентом и состоянием
import React, { useState } from 'react';
//импортируем styled-components для написания стилей
import styled from 'styled-components';
//импортируем кнопку
import Button from '../ui/Button';

//создаем стили для общего блока input полей
const Controls = styled.div`
  display: flex; //включаем flex
  flex-wrap: wrap; //разрешаем перенос строк
  gap: 1rem; //задаем расстояние между элементами
  margin-bottom: 1rem; //добавляем отступ снизу
  text-align: left; //выравниваем текст слева
`;

//создаем стили одного поля
const Control = styled.div`
  display: flex; //включаем flex
  flex-direction: column; //располагаем элементы колонкой
  label {
    font-weight: bold; //делаем текст жирным
    margin-bottom: 0.5rem; //добавляем отступ снизу
  }
  input {
    font: inherit; //наследуем шрифт
    padding: 0.5rem; //внутренний отступ
    border-radius: 6px; //скругляем углы
    border: 1px solid #ccc; //добавляем границу
    width: 20rem; //задаем ширину поля
    max-width: 100%; //ограничиваем ширину
  }
`;

//создаем стили блока кнопки
const Actions = styled.div`
  text-align: right; //выравниваем кнопку справа
  width: 100%; //задаем ширину на всю строку
`;

//создаем компонент формы
const ExpenseForm = ({ onGet }) => {
  //создаем состояние для input полей
  const [userInputs, setUserInputs] = useState({
    title: '', //начальное значение title
    price: '', //начальное значение price
    date: '' //начальное значение date
  });

  //создаем функцию изменения input
  const InputChangeHandler = (e) => {
    //получаем name и value поля
    const { name, value } = e.target;

    //обновляем состояние
    setUserInputs((prev) => ({
      ...prev, //оставляем старые значения
      [name]: value //обновляем только измененное поле
    }));
  };

  //создаем функцию отправки формы
  const submitHandler = (e) => {
    //отменяем перезагрузку страницы
    e.preventDefault();

    //передаем данные в родительский компонент
    onGet({
      title: userInputs.title, //передаем название
      price: +userInputs.price, //преобразуем цену в число
      date: new Date(userInputs.date) //создаем объект даты
    });

    //очищаем форму после отправки
    setUserInputs({
      title: '',
      price: '',
      date: ''
    });
  };

  //возвращаем интерфейс
  return (
    //создаем форму и привязываем submit
    <form onSubmit={submitHandler}>
      <Controls>
        <Control>
          {/*выводим подпись title*/}
          <label>Title</label>
          <input
            name="title" //имя поля
            type="text" //тип поля
            value={userInputs.title} //связываем со state
            onChange={InputChangeHandler} //обрабатываем ввод
          />
        </Control>

        <Control>
          {/*выводим подпись price*/}
          <label>Price</label>
          <input
            name="price"
            type="number"
            value={userInputs.price}
            onChange={InputChangeHandler}
          />
        </Control>

        <Control>
          {/*выводим подпись date*/}
          <label>Date</label>
          <input
            name="date"
            type="date"
            value={userInputs.date}
            onChange={InputChangeHandler}
          />
        </Control>

        <Actions>
          {/*отображаем кнопку отправки*/}
          <Button>
            Add Expense
          </Button>
        </Actions>
      </Controls>
    </form>
  );
};

//экспортируем компонент
export default ExpenseForm;