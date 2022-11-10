import {
  Card,
  CoffeeImage,
  Coffee,
  Info,
  ListCoffee,
  Tag,
  CoffeeName,
  DescriptionCoffee,
  CartInfo,
  PriceInfo,
  Price,
  CartButton,
  AmountInfo,
  Negative,
  Plus,
  Amount
} from "./styles";

import { ShoppingCart } from 'phosphor-react';

import expressoTradicional from '../../assets/CoffeeListImg/expressoTradicional.svg'
import expressoAmericano from '../../assets/CoffeeListImg/expressoAmericano.svg'
import expressoCremoso from '../../assets/CoffeeListImg/expressoCremoso.svg'
import expressoGelado from '../../assets/CoffeeListImg/expressoGelado.svg'
import { useState } from "react";

export function CoffeeList() {
  const [amountCoffee, setAmountCoffee] = useState(0);

  return (
    <Coffee>
      <h2>Nossos cafés</h2>

      <ListCoffee>
        <div>
          <Card>
            <li>
              <CoffeeImage>
                <img src={expressoTradicional} alt="" />
              </CoffeeImage>

              <Info>
                <Tag>Tradicional</Tag>
                <CoffeeName>Expresso Tradicional</CoffeeName>
                <DescriptionCoffee>
                  O tradicional café feito com água quente e grãos moídos
                </DescriptionCoffee>

                <div>
                  <PriceInfo>R$ <Price>9,90</Price></PriceInfo>
                  <CartInfo>
                    <AmountInfo>
                      <Negative onClick={() => setAmountCoffee(amountCoffee - 1)}>-</Negative>
                      <Amount>{amountCoffee}</Amount>
                      <Plus onClick={() => setAmountCoffee(amountCoffee + 1)}>+</Plus>
                    </AmountInfo>
                    <CartButton>
                      <ShoppingCart size={24} />
                    </CartButton>
                  </CartInfo>
                </div>
              </Info>

            </li>
          </Card>

          <Card>
            <li>
              <CoffeeImage>
                <img src={expressoAmericano} alt="" />
              </CoffeeImage>

              <Info>
                <Tag>Tradicional</Tag>
                <CoffeeName>Expresso Americano</CoffeeName>
                <DescriptionCoffee>O tradicional café feito com água quente e grãos moídos</DescriptionCoffee>

                <div>
                  <PriceInfo>R$ <Price>9,90</Price></PriceInfo>
                  <CartInfo>
                    <AmountInfo>
                      <Negative onClick={() => setAmountCoffee(amountCoffee - 1)}>-</Negative>
                      <Amount>{amountCoffee}</Amount>
                      <Plus onClick={() => setAmountCoffee(amountCoffee + 1)}>+</Plus>
                    </AmountInfo>
                    <CartButton>
                      <ShoppingCart size={24} />
                    </CartButton>
                  </CartInfo>
                </div>
              </Info>
            </li>
          </Card>

          <Card>
            <li>
              <CoffeeImage>
                <img src={expressoCremoso} alt="" />
              </CoffeeImage>

              <Info>
                <Tag>Tradicional</Tag>
                <CoffeeName>Expresso Cremoso</CoffeeName>
                <DescriptionCoffee>O tradicional café feito com água quente e grãos moídos</DescriptionCoffee>

                <div>
                  <PriceInfo>R$ <Price>9,90</Price></PriceInfo>
                  <CartInfo>
                    <AmountInfo>
                      <Negative onClick={() => setAmountCoffee(amountCoffee - 1)}>-</Negative>
                      <Amount>{amountCoffee}</Amount>
                      <Plus onClick={() => setAmountCoffee(amountCoffee + 1)}>+</Plus>
                    </AmountInfo>
                    <CartButton>
                      <ShoppingCart size={24} />
                    </CartButton>
                  </CartInfo>
                </div>
              </Info>
            </li>
          </Card>

          <Card>
            <li>
              <CoffeeImage>
                <img src={expressoGelado} alt="" />
              </CoffeeImage>

              <Info>
                <Tag>Tradicional</Tag>
                <CoffeeName>Expresso Gelado</CoffeeName>
                <DescriptionCoffee>O tradicional café feito com água quente e grãos moídos</DescriptionCoffee>

                <div>
                  <PriceInfo>R$ <Price>9,90</Price></PriceInfo>
                  <CartInfo>
                    <AmountInfo>
                      <Negative onClick={() => setAmountCoffee(amountCoffee - 1)}>-</Negative>
                      <Amount>{amountCoffee}</Amount>
                      <Plus onClick={() => setAmountCoffee(amountCoffee + 1)}>+</Plus>
                    </AmountInfo>
                    <CartButton>
                      <ShoppingCart size={24} />
                    </CartButton>
                  </CartInfo>
                </div>
              </Info>
            </li>
          </Card>
        </div>


        <div>
          <Card>
            <li>
              <CoffeeImage>
                <img src={expressoTradicional} alt="" />
              </CoffeeImage>

              <Info>
                <Tag>Tradicional</Tag>
                <CoffeeName>Café com Leite</CoffeeName>
                <DescriptionCoffee>O tradicional café feito com água quente e grãos moídos</DescriptionCoffee>

                <div>
                  <PriceInfo>R$ <Price>9,90</Price></PriceInfo>
                  <CartInfo>
                    <AmountInfo>
                      <Negative onClick={() => setAmountCoffee(amountCoffee - 1)}>-</Negative>
                      <Amount>{amountCoffee}</Amount>
                      <Plus onClick={() => setAmountCoffee(amountCoffee + 1)}>+</Plus>
                    </AmountInfo>
                    <CartButton>
                      <ShoppingCart size={24} />
                    </CartButton>
                  </CartInfo>
                </div>
              </Info>
            </li>
          </Card>

          <Card>
            <li>
              <CoffeeImage>
                <img src={expressoAmericano} alt="" />
              </CoffeeImage>

              <Info>
                <Tag>Tradicional</Tag>
                <CoffeeName>Latte</CoffeeName>
                <DescriptionCoffee>O tradicional café feito com água quente e grãos moídos</DescriptionCoffee>

                <div>
                  <PriceInfo>R$ <Price>9,90</Price></PriceInfo>
                  <CartInfo>
                    <AmountInfo>
                      <Negative onClick={() => setAmountCoffee(amountCoffee - 1)}>-</Negative>
                      <Amount>{amountCoffee}</Amount>
                      <Plus onClick={() => setAmountCoffee(amountCoffee + 1)}>+</Plus>
                    </AmountInfo>
                    <CartButton>
                      <ShoppingCart size={24} />
                    </CartButton>
                  </CartInfo>
                </div>
              </Info>
            </li>
          </Card>

          <Card>
            <li>
              <CoffeeImage>
                <img src={expressoCremoso} alt="" />
              </CoffeeImage>

              <Info>
                <Tag>Tradicional</Tag>
                <CoffeeName>Capuccino</CoffeeName>
                <DescriptionCoffee>O tradicional café feito com água quente e grãos moídos</DescriptionCoffee>

                <div>
                  <PriceInfo>R$ <Price>9,90</Price></PriceInfo>
                  <CartInfo>
                    <AmountInfo>
                      <Negative onClick={() => setAmountCoffee(amountCoffee - 1)}>-</Negative>
                      <Amount>{amountCoffee}</Amount>
                      <Plus onClick={() => setAmountCoffee(amountCoffee + 1)}>+</Plus>
                    </AmountInfo>
                    <CartButton>
                      <ShoppingCart size={24} />
                    </CartButton>
                  </CartInfo>
                </div>
              </Info>
            </li>
          </Card>

          <Card>
            <li>
              <CoffeeImage>
                <img src={expressoGelado} alt="" />
              </CoffeeImage>

              <Info>
                <Tag>Tradicional</Tag>
                <CoffeeName>Macchiato</CoffeeName>
                <DescriptionCoffee>O tradicional café feito com água quente e grãos moídos</DescriptionCoffee>

                <div>
                  <PriceInfo>R$ <Price>9,90</Price></PriceInfo>
                  <CartInfo>
                    <AmountInfo>
                      <Negative onClick={() => setAmountCoffee(amountCoffee - 1)}>-</Negative>
                      <Amount>{amountCoffee}</Amount>
                      <Plus onClick={() => setAmountCoffee(amountCoffee + 1)}>+</Plus>
                    </AmountInfo>
                    <CartButton>
                      <ShoppingCart size={24} />
                    </CartButton>
                  </CartInfo>
                </div>
              </Info>
            </li>
          </Card>
        </div>

        <div>
          <Card>
            <li>
              <CoffeeImage>
                <img src={expressoTradicional} alt="" />
              </CoffeeImage>

              <Info>
                <Tag>Tradicional</Tag>
                <CoffeeName>Mocaccino</CoffeeName>
                <DescriptionCoffee>O tradicional café feito com água quente e grãos moídos</DescriptionCoffee>

                <div>
                  <PriceInfo>R$ <Price>9,90</Price></PriceInfo>
                  <CartInfo>
                    <AmountInfo>
                      <Negative onClick={() => setAmountCoffee(amountCoffee - 1)}>-</Negative>
                      <Amount>{amountCoffee}</Amount>
                      <Plus onClick={() => setAmountCoffee(amountCoffee + 1)}>+</Plus>
                    </AmountInfo>
                    <CartButton>
                      <ShoppingCart size={24} />
                    </CartButton>
                  </CartInfo>
                </div>
              </Info>
            </li>
          </Card>

          <Card>
            <li>
              <CoffeeImage>
                <img src={expressoAmericano} alt="" />
              </CoffeeImage>

              <Info>
                <Tag>Tradicional</Tag>
                <CoffeeName>Chocolate Quente</CoffeeName>
                <DescriptionCoffee>O tradicional café feito com água quente e grãos moídos</DescriptionCoffee>

                <div>
                  <PriceInfo>R$ <Price>9,90</Price></PriceInfo>
                  <CartInfo>
                    <AmountInfo>
                      <Negative onClick={() => setAmountCoffee(amountCoffee - 1)}>-</Negative>
                      <Amount>{amountCoffee}</Amount>
                      <Plus onClick={() => setAmountCoffee(amountCoffee + 1)}>+</Plus>
                    </AmountInfo>
                    <CartButton>
                      <ShoppingCart size={24} />
                    </CartButton>
                  </CartInfo>
                </div>
              </Info>
            </li>
          </Card>

          <Card>
            <li>
              <CoffeeImage>
                <img src={expressoCremoso} alt="" />
              </CoffeeImage>

              <Info>
                <Tag>Tradicional</Tag>
                <CoffeeName>Cubano</CoffeeName>
                <DescriptionCoffee>O tradicional café feito com água quente e grãos moídos</DescriptionCoffee>

                <div>
                  <PriceInfo>R$ <Price>9,90</Price></PriceInfo>
                  <CartInfo>
                    <AmountInfo>
                      <Negative onClick={() => setAmountCoffee(amountCoffee - 1)}>-</Negative>
                      <Amount>{amountCoffee}</Amount>
                      <Plus onClick={() => setAmountCoffee(amountCoffee + 1)}>+</Plus>
                    </AmountInfo>
                    <CartButton>
                      <ShoppingCart size={24} />
                    </CartButton>
                  </CartInfo>
                </div>
              </Info>
            </li>
          </Card>

          <Card>
            <li>
              <CoffeeImage>
                <img src={expressoGelado} alt="" />
              </CoffeeImage>

              <Info>
                <Tag>Tradicional</Tag>
                <CoffeeName>Havaiano</CoffeeName>
                <DescriptionCoffee>O tradicional café feito com água quente e grãos moídos</DescriptionCoffee>

                <div>
                  <PriceInfo>R$ <Price>9,90</Price></PriceInfo>
                  <CartInfo>
                    <AmountInfo>
                      <Negative onClick={() => setAmountCoffee(amountCoffee - 1)}>-</Negative>
                      <Amount>{amountCoffee}</Amount>
                      <Plus onClick={() => setAmountCoffee(amountCoffee + 1)}>+</Plus>
                    </AmountInfo>
                    <CartButton>
                      <ShoppingCart size={24} />
                    </CartButton>
                  </CartInfo>
                </div>
              </Info>
            </li>
          </Card>
        </div>

        <div>
          <Card>
            <li>
              <CoffeeImage>
                <img src={expressoTradicional} alt="" />
              </CoffeeImage>

              <Info>
                <Tag>Tradicional</Tag>
                <CoffeeName>Árabe</CoffeeName>
                <DescriptionCoffee>O tradicional café feito com água quente e grãos moídos</DescriptionCoffee>

                <div>
                  <PriceInfo>R$ <Price>9,90</Price></PriceInfo>
                  <CartInfo>
                    <AmountInfo>
                      <Negative onClick={() => setAmountCoffee(amountCoffee - 1)}>-</Negative>
                      <Amount>{amountCoffee}</Amount>
                      <Plus onClick={() => setAmountCoffee(amountCoffee + 1)}>+</Plus>
                    </AmountInfo>
                    <CartButton>
                      <ShoppingCart size={24} />
                    </CartButton>
                  </CartInfo>
                </div>
              </Info>
            </li>
          </Card>

          <Card>
            <li>
              <CoffeeImage>
                <img src={expressoAmericano} alt="" />
              </CoffeeImage>

              <Info>
                <Tag>Tradicional</Tag>
                <CoffeeName>Irlandês</CoffeeName>
                <DescriptionCoffee>O tradicional café feito com água quente e grãos moídos</DescriptionCoffee>

                <div>
                  <PriceInfo>R$ <Price>9,90</Price></PriceInfo>
                  <CartInfo>
                    <AmountInfo>
                      <Negative onClick={() => setAmountCoffee(amountCoffee - 1)}>-</Negative>
                      <Amount>{amountCoffee}</Amount>
                      <Plus onClick={() => setAmountCoffee(amountCoffee + 1)}>+</Plus>
                    </AmountInfo>
                    <CartButton>
                      <ShoppingCart size={24} />
                    </CartButton>
                  </CartInfo>
                </div>
              </Info>
            </li>
          </Card>
        </div>
      </ListCoffee>
    </Coffee >
  )
}