import Section from "components/section";
import React from "react";
import "./style.scss";
import MiniNameCardComponent from "cards/name_card";
import Container from "components/container";
import { Card, CardTypes, cardsList } from "cards/model";
import { MiniNameCard } from "cards/name_card/model";
import CustomSelect, { TCustomOption } from "components/select";
import CardEditor from "card-editors";

interface ISelectSectionProps {
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

export default function SelectSection({ setCards, cards }: ISelectSectionProps) {
  const [textareaValue, setTextareaValue] = React.useState<string>("");
  const [selectedOption, setSelectedOption] = React.useState<TCustomOption | null>(null);

  const textAreaHandler = (e: any) => {
    // localStorage.setItem("text",JSON.stringify(textareaValue))
    setTextareaValue(e.target.value);
  };

  const onClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const rows = textareaValue.split("\n");
    setCards([]);
    const cardArr: Card[] = [];
    for (let i = 0; i < rows.length; i++) {
      const fio = rows[i].split(";")[0] || "";
      const username = rows[i].split(";")[1] || "";
      const ldap = rows[i].split(";")[2] || "";

      cardArr.push(new MiniNameCard({ _id: i + "", FIO: fio, username, ldap }));
    }
    setCards(cardArr);
  };

  const selectHandler = (selected: TCustomOption["value"]) => {
    setSelectedOption(cardsList.find((e) => e.value == selected) || null);
  };

  return (
    <Section sectionName="select">
      <CustomSelect
        selected={selectedOption}
        placeholder="Выберите карточку"
        options={cardsList}
        onChange={selectHandler}
        status="default"
      />
      {selectedOption && <CardEditor cardType={selectedOption?.value} cards={cards} setCards={setCards} />}
    </Section>
  );
}
