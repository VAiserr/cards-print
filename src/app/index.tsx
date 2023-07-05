import PageTemplate from 'components/template'
import './styles/App.scss'
import SelectSection from 'sections/select'
import PrintSection from 'sections/print'
import React from 'react'

export default function App() {
  const [cards, setCards] = React.useState<React.ReactNode[]>([])

  const generateCards = (cards: React.ReactNode[]) => {
    setCards(cards)
  }
  return (
    <PageTemplate>
      <SelectSection generateCards={generateCards}/>
      <PrintSection cards={cards}/>
    </PageTemplate>
  )
}
