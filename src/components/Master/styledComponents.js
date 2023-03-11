import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-family: roboto;
  background-color: #ffe5ec;
`
export const ContentContainer = styled.div`
  width: 100%;
  border: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Heading = styled.h1`
  color: black;
  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`

export const Separator = styled.hr`
  border: 1px solid black;
  width: 100%;
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffc2d1;
  padding: 10px;
`

export const Activity = styled.div`
  width: 100%;
  display: flex;
`
export const AddActivity = styled.button`
  background-color: blue;
  border: none;
  padding: 10px 20px 10px 20px;
  color: white;
  align-self: flex-start;
  margin-top: 20px;
`

export const Input = styled.input`
  width: 40%;
  outline: none;
  background-color: transparent;
  border: 1px solid;
  @media screen and (max-width: 300px) {
    width: 33%;
  }
`

export const Select = styled.select`
  width: 20%;
  padding: 10px;
  outline: none;
  background-color: transparent;
  @media screen and (max-width: 300px) {
    width: 34%;
  }
`

export const Option = styled.option`
  padding: 10px;
  outline: none;
`
export const NullContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Activities = styled.ul`
  width: 100%;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  background-color: #ffb3c6;
  padding: 10px;
`
export const Logout = styled.button`
  background-color: blue;
  border: none;
  padding: 10px 20px 10px 20px;
  color: white;
  align-self: flex-end;
  cursor: pointer;
`
export const Head = styled.div`
  width: 100%;
  border: 1px solid black;
  background-color: white;
  display: flex;
  padding: 10px;
`

export const Headings = styled.p`
  color: black;
  font-size: 20px;
  width: 33%;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 460px) {
    font-size: 12px;
  }
`

export const ActivitiesAnswered = styled.ul`
  padding-left: 0px;
  width: 100%;
  margin-top: 0px;
`
