export enum CardTypes {
    NAME_CARD,
    NAME_CARD_MINI,
    WIFI_CARD,
    SERVICE_DESK_CARD,
}

export const cardsList = [
    { title: "Маленькая именная карта", value: CardTypes.NAME_CARD_MINI },
    { title: "Именная карта", value: CardTypes.NAME_CARD },
    { title: "WiFi карта", value: CardTypes.WIFI_CARD },
    { title: "Карта Servise Desk", value: CardTypes.SERVICE_DESK_CARD }
]

export interface ICardData {
    _id: string
}

export abstract class Card {
    cardType: CardTypes;
    cardData: ICardData;

    constructor(cardType: CardTypes, cardData: ICardData) {
        this.cardType = cardType;
        this.cardData = cardData;
    }

    getData(): ICardData {
        return this.cardData;
    }

    setData(data: ICardData): void {
        this.cardData = data;
    }

    stringify(): string {
        return JSON.stringify({
            type: this.cardType,
            data: this.cardData
        })
    }

    static parse(str: string): {type: CardTypes, data: ICardData} {
        return JSON.parse(str);
    }
}

// class NameCard extends Card {
// }
// const cardObject = Card.parse("{}")
// const card = new NameCard(cardObject.type, cardObject.data)