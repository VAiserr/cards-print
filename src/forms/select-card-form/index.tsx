import CardForm from 'components/form'
import React from 'react'

export interface ISelectCardFormProps extends React.HTMLAttributes<HTMLDivElement> {
    selectForm: (CardName: string) => void
}

export default function SelectCardForm({selectForm}: ISelectCardFormProps) {
    // const [form, setForm] = React.useState<React.ReactNode>()

    const selectHandler = (e: React.FormEvent): void => {
        e.preventDefault()
        
    }
  return (
    <CardForm formName='select'>
        <select onSelect={selectHandler}>
            <option disabled selected>Выбирите карточку</option>
            <option value="nameCard">Именная карточка</option>
        </select>
    </CardForm>
  )
}
