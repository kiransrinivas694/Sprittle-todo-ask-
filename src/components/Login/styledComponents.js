import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fefbe9;
`
export const ContentContainer = styled.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'ROBOTO';

  background-color: #e1eedd;
  border-radius: 10px;
  @media screen and (max-width: 470px) {
    padding: 0px;
  }
`

export const Heading = styled.h1`
  color: black;
`

export const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 90%;
`

export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 2px;
`

export const Input = styled.input`
  width: 100%;
  outline: none;
  margin-bottom: 10px;
  padding: 5px;
`

export const Submit = styled.button`
  padding: 10px 20px 10px 20px;
  border: none;
  background-color: blue;
  color: white;
  margin-bottom: 10px;
`
export const ErrorMsg = styled.p`
  color: red;
  margin-top: 2px;
`
export const StyledLink = styled(Link)`
  @media screen and (max-width: 400px) {
    font-size: 10px;
  }
  margin-top: 10px;
`
