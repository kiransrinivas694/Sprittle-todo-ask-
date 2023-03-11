import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  width: 100%;
  border: 1px;
  margin-right: 2px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const Content = styled.h1`
  color: black;
  font-size: 25px;
  margin-right: 10px;
  width: 50%;
  @media screen and (max-width: 440px) {
    font-size: 15px;
  }
`
export const SubmitAnswer = styled.input`
  padding: 10px;
  margin-right: 20px;
  @media screen and (max-width: 400px) {
    width: 150px;
  }
  @media screen and (max-width: 340px) {
    width: 90px;
  }
  @media screen and (max-width: 300px) {
    width: 60px;
  }
`
export const Submit = styled.button`
  background-color: blue;
  border: none;
  padding: 10px 20px 10px 20px;
  color: white;
`
export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Success = styled.p`
  color: black;
  font-size: 12px;
`
