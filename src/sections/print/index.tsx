// import { INameCardData } from 'cards/name_card'
import Container from 'components/container'
import Section from 'components/section'
import React from 'react'
import './style.scss'

interface IPrintSectionProps {
  cards: React.ReactNode[]
}

export default function PrintSection({cards}: IPrintSectionProps) {
  return (
    <Section sectionName='print'>
        <Container className='container__print'>
          {cards != null ? cards : ""}
        </Container>
    </Section>
  )
}
