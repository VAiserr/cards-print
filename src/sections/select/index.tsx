import Section from 'components/section'
import React from 'react'
import './style.scss'
import NameCard from 'cards/name_card'
import Container from 'components/container'
import { Card } from 'cards/model'
import { MiniNameCard } from 'cards/name_card/model'

interface ISelectSectionProps {
  setCards: React.Dispatch<React.SetStateAction<Card[]>>
}

export default function SelectSection({setCards}: ISelectSectionProps) {
  const [textareaValue, setTextareaValue] = React.useState<string>("")

  const textAreaHandler = (e: any) => {
    // localStorage.setItem("text",JSON.stringify(textareaValue))
    setTextareaValue(e.target.value)
  }

  const onClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    const rows = textareaValue.split("\n")
    setCards([])
    const cardArr: Card[] = []
    for (let i = 0; i < rows.length; i++) {
      const fio = rows[i].split(";")[0] || "";
      const username = rows[i].split(";")[1] || "";
      const ldap = rows[i].split(";")[2] || "";
      
      cardArr.push(new MiniNameCard({_id: i + "", FIO: fio, username, ldap}))
    }
    setCards(cardArr)
    
  }

  return (
    <Section sectionName="select">
      <Container className='container__select'>
        <div className="form">
          <textarea rows={5} cols={44} name="names" id="names" value={textareaValue} onChange={textAreaHandler}></textarea>
        </div>
        <div className="button" onClick={onClick}>

          <button>Create</button>
        </div>
      </Container>
    </Section>
  )
}
