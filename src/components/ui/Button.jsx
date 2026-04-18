//импорт react
import React from 'react';

//компонент кнопки
const Button = ({children, onClick}) => {
  //возвращаю кнопку
  return (
    <button
      //обработка клика
      onClick={onClick}
    >
      {/*текст кнопки*/}
      {children}
    </button>
  );
};

//экспорт компонента
export default Button;