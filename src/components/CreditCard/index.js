import {useState} from 'react'
import {
  MainContainer,
  LeftContainer,
  Heading,
  Horizantal,
  Card,
  ContentInsideCard,
  CardHolderName,
  CardNumber,
  Name,
  RightContainer,
  InputConatiner,
  PaymentMethod,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [showCardNumber, updateCardNumber] = useState('')

  const [showCardName, updateCardName] = useState('')
  const changingCardNumber = event => {
    updateCardNumber(event.target.value)
  }

  const changingCardName = event => {
    updateCardName(event.target.value)
  }

  return (
    <MainContainer>
      <LeftContainer>
        <Heading>CREDIT CARD</Heading>
        <Horizantal />
        <Card data-testid="creditCard">
          <ContentInsideCard>
            <CardNumber>{showCardNumber}</CardNumber>
            <CardHolderName>CARDHOLDER NAME</CardHolderName>
            <Name>{showCardName}</Name>
          </ContentInsideCard>
        </Card>
      </LeftContainer>
      <RightContainer>
        <InputConatiner>
          <PaymentMethod>Payment Method</PaymentMethod>
          <Input
            placeholder="Card Number"
            onChange={changingCardNumber}
            type="text"
            value={showCardNumber.num}
          />
          <Input
            placeholder="Cardholder Name"
            type="text"
            onChange={changingCardName}
            value={showCardName.name}
          />
        </InputConatiner>
      </RightContainer>
    </MainContainer>
  )
}

export default CreditCard
