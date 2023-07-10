import { Card, CardTypes, ICardData } from "cards/model";

export interface INameCardData extends ICardData {
    FIO?: string,
    username?: string,
    ldap?: string
}

export class MiniNameCard extends Card {

    constructor(data: INameCardData) {
        const _data: INameCardData = {
            _id: data._id,
            FIO: data.FIO || "",
            username: data.username || "",
            ldap: data.ldap || ""
        }
        super(CardTypes.NAME_CARD_MINI, _data);
    }

    override getData(): INameCardData {
        return this.cardData as INameCardData;
    }

    override setData(data: INameCardData): void {
        this.cardData = data;
    }
}