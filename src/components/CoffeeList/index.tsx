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
} from "./styles"

import { api } from '../../api/axios'

import { ShoppingCart } from 'phosphor-react'

import expressoTradicional from '../../assets/CoffeeListImg/expressoTradicional.svg'
import expressoAmericano from '../../assets/CoffeeListImg/expressoAmericano.svg'
import expressoCremoso from '../../assets/CoffeeListImg/expressoCremoso.svg'
import expressoGelado from '../../assets/CoffeeListImg/expressoGelado.svg'
import { useEffect, useState } from "react"

interface Coffee {
  id: number;
  tag: string;
  name: string;
  description: string;
  price: number;
}

export function CoffeeList() {
  const [amountCoffee, setAmountCoffee] = useState(0);
  const [coffeeList, setCoffeeList] = useState<Coffee[]>([]);

  useEffect(() => {
    api.get('coffees').then((response) => {
      setCoffeeList(response.data)
    })
  })

  return (
    <Coffee>
      <h2>Nossos cafés</h2>

      <ListCoffee>
        {coffeeList.map((coffee) => (
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
          </div>
        ))}
      </ListCoffee>
    </Coffee >
  )
}