import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  div {
    display: flex;
    padding: 32px 160px;
  }
`;

export const MenuRight = styled.div`
  display: flex;
  align-items: center;

  svg {
    height: 20px;
    margin-left: 1rem;
    background-color: #F1E9C9;
    border-radius: 5px;
    padding: 5px;
  }
`;

export const Location = styled.p`
  background-color: #EBE5F9;
  border-radius: 5px;
  padding: 5px;
`;