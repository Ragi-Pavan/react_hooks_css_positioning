import styled from 'styled-components'

export const MainContainer = styled.div`
  border: 2px solid black;
  min-height: 100vh;
  display: flex;
`

export const LeftContainer = styled.div`
  height: 100vh;
  width: 40vw;
  background-color: #3b4b69;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  color: white;
  text-align: center;
  letter-spacing: 2px;
  margin: 0px;
  padding: 5px;
`

export const Horizantal = styled.hr`
  border: 2px solid #ffd773;
  margin: 0px;
  width: 170px;
  text-align: center;
  margin-right: 50px;
`

export const Card = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 100%;
  height: 50vh;
  border-radius: 25px;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const ContentInsideCard = styled.div`
  height: 70%;
  padding: 20px;
  color: white;
  text-align: start;
  position: relative;
`

export const CardHolderName = styled.p`
  color: #c3cad9;
  font-weight: 500;
  position: absolute;
  top: 70px;
`

export const CardNumber = styled.p`
  color: white;
  font-weight: 500;
  position: relative;
  top: 1px;
  margin: 0px;
  padding: 0px;
`

export const Name = styled.p`
  color: #c3cad9;
  font-weight: 700;
  position: absolute;
  font-size: 20px;
  top: 110px;
`

export const RightContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`

export const InputConatiner = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 1px #d3d9e0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const PaymentMethod = styled.h1`
  color: #344e7a;
  text-align: center;
  margin: 0px;
  padding: 0px;
`

export const Input = styled.input`
  height: 35px;
  width: 80%;
`
