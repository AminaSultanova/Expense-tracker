//импортируем styled-components для создания стилей
import styled from 'styled-components';

//создаем универсальную карточку
const Card = styled.div`
  border-radius: 30px; //скругляем углы карточки
  box-shadow: 4px 4px 8px rgba(226, 7, 242, 0.25); //добавляем тень
`;

//экспортируем компонент Card
export default Card;