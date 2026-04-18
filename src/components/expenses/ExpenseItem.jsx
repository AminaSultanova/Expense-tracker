//импорт styled-components для стилей
import styled from 'styled-components';
//импорт компонента даты
import ExpenseDate from './ExpenseDate';

//создаю стили для карточки расхода
const Item = styled.div`
  //flex для ррасположения элементов в строку
  display: flex;
  //раздвигаю элементы по сторонам
  justify-content: space-between;
  //выравнивание по центру
  align-items: center;
  //тень карточки
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  //внутренний отступ
  padding: 0.5rem;
  //отступ между карточками
  margin: 1rem 0;
  //скругление углов
  border-radius: 12px;
  //цвет фона карточки
  background-color: #4b4b4b;
`;

//стили для блока с названием ценой и кнопкой
const Description = styled.div`
  //использую flex
  display: flex;
  //на маленьких экранах элементы идут колонкой
  flex-direction: column;
  //расстояние между элементами
  gap: 1rem;
  //выравнивание вправо
  align-items: flex-end;
  //обратный порядок в колонке
  flex-flow: column-reverse;
  //выравнивание элементов
  justify-content: flex-start;
  //занимает доступное место
  flex: 1;

  //стили для заголовка
  h2 {
    //размер текста
    font-size: 1rem;
    //отступы
    margin: 0 1rem;
    //цвет текста
    color: white;
  }

  //стили для экранов от 580px
  @media (min-width: 580px) {
    //элементы снова в строку
    flex-direction: row;
    //выравнивание по центру
    align-items: center;
    //выравнивание слева
    justify-content: flex-start;

    h2 {
      //увеличиваю шрифт
      font-size: 1.25rem;
    }
  }
`;

//стили блока цены
const Price = styled.div`
  //размер шрифта
  font-size: 1rem;
  //жирный текст
  font-weight: bold;
  //цвет текста
  color: white;
  //фон цены
  background-color: #40005d;
  //граница
  border: 1px solid white;
  //внутренние отступы
  padding: 0.5rem;
  //скругление
  border-radius: 12px;

  @media (min-width: 580px) {
    //размер шрифта на больших экранах
    font-size: 1.25rem;
    //отступы больше
    padding: 0.5rem 1.5rem;
  }
`;

//стили кнопки удаления
const DeleteButton = styled.button`
  //цвет кнопки
  background-color: #5c0a0a;
  //цвет текста
  color: white;
  //граница
  border: 1px solid white;
  //внутренние отступы
  padding: 0.6rem 1.5rem;
  //скругление
  border-radius: 12px;
  //курсор
  cursor: pointer;
  //отступ слева
  margin-left: 2rem;

  //цвет при наведении
  &:hover {
    background-color: #7a1010;
  }

  //эффект нажатия
  &:active {
    transform: scale(0.98);
  }
`;


//компонент одной траты
const ExpenseItem = (props) => {
  //возвращаю карточку
  return (
    <Item>
      {/*передаю дату в компонент даты*/}
      <ExpenseDate date={props.expense.date} />
      <Description>
        {/*вывожу название*/}
        <h2>
          {props.expense.title}
        </h2>
        {/*вывожу цену*/}
        <Price>
          {props.expense.price} KGS
        </Price>
        {/*кнопка удаления*/}
        <DeleteButton
          //при клике удаляю по id
          onClick={() => props.onDelete(props.expense.id)}
        >
          Delete
        </DeleteButton>
      </Description>
    </Item>
  );
};

//экспорт компонента
export default ExpenseItem;