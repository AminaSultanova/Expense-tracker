//импортируем react
import React from 'react';

//создаем компонент кнопки
const Button = ({children, onClick}) => {
  //возвращаем кнопку
  return (
    <button
      onClick={onClick} //передаем обработчик клика
    >
      {/*выводим текст кнопки*/}
      {children}
    </button>
  );
};

//экспортируем компонент
export default Button;