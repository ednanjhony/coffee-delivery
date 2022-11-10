import { Container, Message, ImageMessage, List, Content } from "./styles";
import coffee from '../../assets/coffee.svg';
import cartIcon from '../../assets/cartIcon.svg';
import boxIcon from '../../assets/boxIcon.svg';
import timeIcon from '../../assets/timeIcon.svg';
import coffeIcon from '../../assets/coffeIcon.svg';
import { CoffeeList } from "../CoffeeList";

export function Section() {
  return (
    <Container>
      <Content>
        <Message>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </p>

          <List>
            <div>
              <li>
                <img src={cartIcon} alt="" />
                Compra simples e segura
              </li>

              <li>
                <img src={boxIcon} alt="" />
                Embalagem mantém o café intacto
              </li>
            </div>

            <div>
              <li>
                <img src={timeIcon} alt="" />
                Entrega rápida e rastreada
              </li>

              <li>
                <img src={coffeIcon} alt="" />
                O café chega fresquinho até você
              </li>
            </div>
          </List>
        </Message>
        <ImageMessage>
          <img src={coffee} alt="" />
        </ImageMessage>
      </Content>


      <CoffeeList />
    </Container>
  )
}