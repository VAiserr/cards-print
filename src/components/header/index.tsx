// import React from 'react'
import Container from 'components/container'
import Section from 'components/section'
import './style.scss'

export default function Header() {
  return (
    <Section sectionName='header'>
        <Container>
            <h1 className='title'>Cards Print</h1>
        </Container>
    </Section>
  )
}
