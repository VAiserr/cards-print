import Container from 'components/container'
import React from 'react'

export interface ICardFormProps extends React.HTMLAttributes<HTMLDivElement> {
    formName: string;
}

export default function CardForm({formName, className, ...props}: ICardFormProps) {
  return (
    <Container className={`container__${formName}-card-form` + (className || "")} {...props} />
  )
}
