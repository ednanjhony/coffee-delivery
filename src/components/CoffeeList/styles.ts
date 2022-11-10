import styled from 'styled-components';

export const Coffee = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;

`;

export const ListCoffee = styled.ul`
  list-style: none;
  display: grid;
  grid-row: auto;
  width: 1440px;

  > div {
    display: flex;
    margin-top: 5rem;


`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  width: 256px;
  height: 310px;
  margin: 0 auto;
  background-color: #F3F2F2;
  border-radius: 0 20px 0 20px;  
`

export const CoffeeImage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  width: 100%
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  > p {
    align-items: center;
  }
  
  > div {
    display: flex;
    justify-content: space-between
  }
`

export const PriceInfo = styled.div`
  margin: 5px auto;
`;

export const CartInfo = styled.div`
  display: flex;
`;

export const AmountInfo = styled.div`
  display: flex;
  margin:0 10px;
`;

export const Negative = styled.button`
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 8px 0 0 8px;
  background-color: #E6E5E5;
  cursor: pointer;

`;

export const Amount = styled.div`
  display: flex;
  height: 38px;
  width: 38px;
  justify-content: center;
  align-items: center;
  background-color: #E6E5E5;

`;

export const Plus = styled.button`
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 0 8px 8px 0;
  background-color: #E6E5E5;
  cursor: pointer;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  color: #574F4D;
`;

export const CartButton = styled.button`
  background: #4B2995;
  border: 0;
  border-radius: 8px;
  height: 38px;
  width: 38px;
  cursor: pointer;
`;

export const Tag = styled.p`
  font-weight: bold;
  background: #F1E9C9;
  color: #C47F17;
  width: 90px;
  border-radius: 9px;
  margin: 1rem auto;
`;

export const CoffeeName = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: bold;
`;

export const DescriptionCoffee = styled.p`
  display: flex;
  text-align: center;
  width: 100%;
  color: #8D8686;
`;
