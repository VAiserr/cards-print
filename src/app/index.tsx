import PageTemplate from 'components/template'
import './styles/App.scss'
import SelectSection from 'sections/select'
import PrintSection from 'sections/print'
import React from 'react'
import { Card } from 'cards/model'

export default function App() {
  const [cards, setCards] = React.useState<Card[]>([])

  return (
    <PageTemplate>
      <SelectSection setCards={setCards}/>
      <PrintSection cards={cards}/>
    </PageTemplate>
  )
}
