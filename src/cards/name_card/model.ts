import { Card, CardTypes, ICardData } from "cards/model";

export interface INameCardData extends ICardData {
    FIO?: string,
    username?: string,
    ldap?: string
}

export class MiniNameCard extends Card {
    constructor(data: INameCardData) {
        super(CardTypes.NAME_CARD_MINI, data)
    }
}