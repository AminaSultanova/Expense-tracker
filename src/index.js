//импортируем react
import React from 'react';
//импортируем react dom для рендера приложения
import ReactDOM from 'react-dom/client';
//импортируем глобальные стили
import './index.css';
//импортируем главный компонент App
import App from './App';

//находим root элемент в html
const root = ReactDOM.createRoot(
  document.getElementById('root') //получаем элемент root
);

//запускаем рендер приложения
root.render(
  <React.StrictMode>
    {/*запускаем главный компонент*/}
    <App />
  </React.StrictMode>
);