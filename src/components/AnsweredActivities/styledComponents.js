import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  width: 100%;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-top: none;
  padding: 10px;
`

export const Question = styled.p`
  width: 33%;
  @media screen and (max-width: 460px) {
    font-size: 12px;
  }
  height: 100%;
`

export const Separator = styled.hr`
  border: 1px solid black;
`

export const Name = styled.p`
  width: 33%;
  @media screen and (max-width: 460px) {
    font-size: 12px;
  }
`

export const Answer = styled.p`
  width: 33%;
  @media screen and (max-width: 460px) {
    font-size: 12px;
  }
`
