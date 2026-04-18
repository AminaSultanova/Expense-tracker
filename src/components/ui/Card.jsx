//импорт styled-components для создания стилей
import styled from 'styled-components';

//создаю универсальную карточку
const Card = styled.div`
  //делаю скругленные углы
  border-radius: 30px;
  //добавляю тень карточке
  box-shadow: 4px 4px 8px rgba(226, 7, 242, 0.25);
`;

//экспортирую компонент card
export default Card;