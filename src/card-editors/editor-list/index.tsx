import { Card } from 'cards/model'
import React from 'react'

export type TCardEditorListProps = React.HTMLAttributes<HTMLUListElement>

export default function CardEditorList({ children, className, ...props }: TCardEditorListProps) {
  return (
    <ul className={"editor-list" + className} {...props}>
      {children}
    </ul>
  )
}
