import styled from 'styled-components'

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
  @media screen and (max-width: 470px) {
    font-size: 14px;
  }
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

export const Select = styled.select`
  width: 100%;
  margin-bottom: 10px;
  padding: 6px;
  border: none;
`

export const Option = styled.option`
  padding: 10px;
`

export const Input = styled.input`
  width: 100%;
  outline: none;
  margin-bottom: 10px;
  border: none;
  padding: 6px;
`

export const SignupButton = styled.button`
  padding: 10px 20px 10px 20px;
  border: none;
  background-color: blue;
  color: white;
`
