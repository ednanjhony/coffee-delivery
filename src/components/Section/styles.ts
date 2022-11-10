import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Message = styled.div`
  width: 30%;
  margin: 0 5rem;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem
  }

  ul {
    list-style: none;
    margin-top: 5rem;
  }
`;

export const List = styled.ul`
  width: 100%;

  div {
    display: flex;
    align-items: center;



    li {
      padding-right: 3rem;
      
    }

  }
`;

export const ImageMessage = styled.div``;