import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-family: roboto;
  background-color: #bee9e8;
  min-height: 100vh;
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

export const HeadingActivities = styled(Heading)`
  margin-bottom: 2px;
`

export const Separator = styled.hr`
  border: 1px solid black;
  width: 100%;
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
`
export const Calculator = styled.div`
  width: 100%;
`
export const Input = styled.input`
  width: 40%;
  outline: none;
  padding: 10px;
  @media screen and (max-width: 300px) {
    width: 33%;
  }
`

export const Select = styled.select`
  width: 20%;
  padding: 10px;
  outline: none;
  @media screen and (max-width: 300px) {
    width: 34%;
  }
`

export const Option = styled.option`
  padding: 10px;
  outline: none;
`
export const GetButton = styled.button`
  background-color: blue;
  border: none;
  padding: 10px 20px 10px 20px;
  color: white;
  margin-top: 10px;
`
export const Logout = styled.button`
  background-color: blue;
  border: none;
  padding: 10px 20px 10px 20px;
  color: white;
  align-self: flex-end;
  cursor: pointer;
`
