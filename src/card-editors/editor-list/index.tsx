import { Card, CardTypes } from 'cards/model'
import React from 'react'

export interface TCardEditorListProps extends React.HTMLAttributes<HTMLUListElement> {
  type: CardTypes,
  cards: Card[]
}

export default function CardEditorList({ cards, type, ...props }: TCardEditorListProps) {
  return (
    <div className="editor-list">
            <ul className='list' {...props}>

            </ul>
        </div>
  )
}
