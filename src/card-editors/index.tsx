import { Card, CardTypes } from 'cards/model'
import Container from 'components/container'
import './style.scss'
import React from 'react'
import MiniNameCardEditor from './mini-name-card'

export interface ICardEditorProps {
    cardType: CardTypes
    cards: Card[]
    setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}
export default function CardEditor({ cardType, cards, setCards }: ICardEditorProps) {
  return (
    <Container className="container__card-editor">
        <div className="card-editor">
            {(() => {
            switch (cardType) {
                case CardTypes.NAME_CARD_MINI:
                    return <MiniNameCardEditor />
                
                default:
                    return <h2>In Progress...</h2>
            }
            })()}
        </div>
      </Container>
  )
}
