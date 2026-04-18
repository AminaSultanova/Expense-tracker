//импорт react
import React from 'react';
//импорт react dom
import ReactDOM from 'react-dom/client';
//импорт глобальных стилей
import './index.css';
//импорт главного компонента
import App from './App';

//нахожу root элемент в html
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

//рендер приложения
root.render(
  <React.StrictMode>
    {/*запускаю главный компонент*/}
    <App />
  </React.StrictMode>
);