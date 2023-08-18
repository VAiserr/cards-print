import { Card, CardTypes } from 'cards/model'
import React from 'react'
import MiniNameCardEditorList from './mini-name-card'

export interface TCardEditorListProps extends React.HTMLAttributes<HTMLUListElement> {
  type: CardTypes,
  cards: Card[]
}

export default function CardEditorList({ children, className, type, ...props }: TCardEditorListProps) {
  return (
    <div className="editor-list">
            {(() => {
            switch (type) {
                case CardTypes.NAME_CARD_MINI:
                    return <MiniNameCardEditorList />
                
                default:
                    return <h2>In Progress...</h2>
            }
            })()}
        </div>
  )
}
