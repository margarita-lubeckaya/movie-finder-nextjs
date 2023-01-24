import styled from 'styled-components'

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 2rem;
`

export const CardItem = styled.li`
  min-width: 0;
`

export const CardsFooter = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: flex-end;
`

export const Test = styled.div`
  background-color: pink;
`
