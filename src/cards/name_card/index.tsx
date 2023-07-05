import React from 'react'
// import styles from './style.module.scss'
import './style.scss'
// import 'imgs/card-name-logo.png'

export interface INameCardData {
    FIO?: string,
    username?: string,
    ldap?: string
}
export interface INameCardProps {
    data: INameCardData
}

export default function NameCard({data}: INameCardProps) {
  return (
    <div className={"card card__name"}>
        <div className={"card-header"}>
            {/* <h4 className="card-title">IT SERVICE DESK</h4> */}
            <img src="imgs/card-name-logo.png" alt="" />
        </div>
        <div className="card-body">
            <div id="fio">Ф.И.О.: {data.FIO}</div>
            <div id="username">User name: {data.username}</div>
            <div id="ldap">LDAP: {data.ldap}</div>
        </div>
    </div>
  )
}
