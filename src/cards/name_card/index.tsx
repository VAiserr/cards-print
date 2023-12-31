import React from 'react'
// import styles from './style.module.scss'
import './style.scss'
import { INameCardData, MiniNameCard } from './model'
// import 'imgs/card-name-logo.png'

// export interface INameCardData {
//     FIO?: string,
//     username?: string,
//     ldap?: string
// }
// export interface INameCardProps {
//     card: MiniNameCard
//     key: React.Key
// }

export default function MiniNameCardComponent(card: MiniNameCard) {
    const data: INameCardData = card.getData()

  return (
    <div className={"card card__name"} key={data._id}>
        <div className={"card-header"}>
            {/* <h4 className="card-title">IT SERVICE DESK</h4> */}
            <img src="imgs/name-logo.png" alt="" />
        </div>
        <div className="card-body">
            <div id="fio">Ф.И.О.: {data.FIO}</div>
            <div id="username">User name: {data.username}</div>
            <div id="ldap">LDAP: {data.ldap}</div>
        </div>
    </div>
  )
}
