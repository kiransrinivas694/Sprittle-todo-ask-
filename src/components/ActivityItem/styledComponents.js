import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  width: 32%;
  border: 1px;
  margin-right: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 460px) and (max-width: 700px) {
    width: 48%;
  }
  @media screen and (max-width: 460px) {
    width: 100%;
  }
`

export const Content = styled.h1`
  color: black;
  font-size: 25px;
  margin-right: 10px;
`
export const Delete = styled.button`
  background-color: blue;
  border: none;
  padding: 10px 20px 10px 20px;
  color: white;

  margin-right: 10px;
`
