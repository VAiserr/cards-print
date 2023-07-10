// import { INameCardData } from 'cards/name_card'
import Container from 'components/container'
import Section from 'components/section'
import React from 'react'
import './style.scss'
import { Card } from 'cards/model'

interface IPrintSectionProps {
  cards: Card[]
}

export default function PrintSection({cards}: IPrintSectionProps) {
  const [cardElements, setCardElements] = React.useState<React.ReactNode[]>([] )

  React.useEffect(() => {
    document.addEventListener('keydown', printHandler);

    return () => {
      document.removeEventListener('keydown', printHandler)
    }
  }, [])
  

  const printHandler = (e: KeyboardEvent) => {
    // console.log(e.key)
    if (e.ctrlKey && e.key == 'p') {
      e.preventDefault();
      // e.stopPropagation();
    }
  }

  const print = () => {
    // console.log("first")
  }

  return (
    <Section sectionName='print'>
        <Container className='container__print'>
          {cardElements != null ? cardElements : ""}
        </Container>
    </Section>
  )
}
