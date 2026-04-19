//импортируем styled-components для стилей
import styled from 'styled-components';
//импортируем компонент даты
import ExpenseDate from './ExpenseDate';


//создаем стили для карточки расхода
const Item = styled.div`
  display: flex; //включаем flex для расположения элементов
  justify-content: space-between; //раздвигаем элементы по сторонам
  align-items: center; //выравниваем элементы по центру
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25); //добавляем тень
  padding: 0.5rem; //добавляем внутренний отступ
  margin: 1rem 0; //отступ между карточками
  border-radius: 12px; //скругляем углы
  background-color: #4b4b4b; //цвет фона
`;


//создаем стили для блока описания
const Description = styled.div`
  display: flex; //включаем flex
  flex-direction: column; //на маленьких экранах элементы колонкой
  gap: 1rem; //расстояние между элементами
  align-items: flex-end; //выравниваем вправо
  flex-flow: column-reverse; //обратный порядок элементов
  justify-content: flex-start; //выравниваем элементы
  flex: 1; //занимаем доступное место

  h2 {
    font-size: 1rem; //размер текста
    margin: 0 1rem; //отступы
    color: white; //цвет текста
  }

  @media (min-width: 580px) {
    flex-direction: row; //на больших экранах элементы в строку
    align-items: center; //выравниваем по центру
    justify-content: flex-start; //выравниваем слева

    h2 {
      font-size: 1.25rem; //увеличиваем шрифт
    }
  }
`;

//создаем стили для цены
const Price = styled.div`
  font-size: 1rem; //размер текста
  font-weight: bold; //делаем текст жирным
  color: white; //цвет текста
  background-color: #40005d; //фон цены
  border: 1px solid white; //добавляем границу
  padding: 0.5rem; //внутренний отступ
  border-radius: 12px; //скругляем углы
  @media (min-width: 580px) {
    font-size: 1.25rem; //увеличиваем шрифт
    padding: 0.5rem 1.5rem; //увеличиваем отступы
  }
`;


//создаем стили кнопки удаления
const DeleteButton = styled.button`
  background-color: #5c0a0a; //цвет кнопки
  color: white; //цвет текста
  border: 1px solid white; //граница
  padding: 0.6rem 1.5rem; //внутренние отступы
  border-radius: 12px; //скругление
  cursor: pointer; //курсор при наведении
  margin-left: 2rem; //отступ слева
  &:hover {
    background-color: #7a1010; //цвет при наведении
  }
  &:active {
    transform: scale(0.98); //эффект нажатия
  }
`;

//создаем компонент одной траты
const ExpenseItem = (props) => {
  //возвращаем карточку
  return (
    <Item>
      {/*передаем дату в компонент даты*/}
      <ExpenseDate date={props.expense.date} />
      <Description>
        {/*выводим название*/}
        <h2>
          {props.expense.title}
        </h2>
        {/*выводим цену*/}
        <Price>
          {props.expense.price} KGS
        </Price>
        {/*создаем кнопку удаления*/}
        <DeleteButton
          //при нажатии удаляем по id
          onClick={() => props.onDelete(props.expense.id)}
        >
          Delete
        </DeleteButton>
      </Description>
    </Item>
  );

};


//экспортируем компонент
export default ExpenseItem;