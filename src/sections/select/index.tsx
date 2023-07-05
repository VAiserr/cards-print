import Section from 'components/section'
import React from 'react'
import './style.scss'
import NameCard, { INameCardData } from 'cards/name_card'
import Container from 'components/container'

interface ISelectSectionProps {
  generateCards: (cards: React.ReactNode[]) => void
}

export default function SelectSection({generateCards}: ISelectSectionProps) {
  const [cardsData, setCardsData] = React.useState<INameCardData[]>([])
  const [textareaValue, setTextareaValue] = React.useState<string>("")

  const textAreaHandler = (e: any) => {
    setTextareaValue(e.target.value)
  }

  const getText = async (): Promise<string> => {
    return await textareaValue
  }

  const onClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    const rows = textareaValue.split("\n")
    setCardsData([])
    const data: INameCardData[] = []
    for (const row of rows) {
      const fio = row.split(";")[0] || "";
      const username = row.split(";")[1] || "";
      const ldap = row.split(";")[2] || "";
      
      data.push({
        FIO: fio,
        username,
        ldap
      })
    }
    setCardsData(data)
    
  }
  React.useEffect(() => {
    console.log(cardsData)
    generateCards(cardsData.map(e => <NameCard data={e}/>))
  },[cardsData])

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
