import React from 'react';
import s from './HeaderBlock.module.scss'
import logo from './img/logo192.png'
import {ReactComponent as ReactLogoSvg} from "./logo.svg";

console.log('###: s', s)

const HeaderBlock = ({title, hideBackground=false, decr}) => {
    const styleCover = hideBackground ? {backgroundImage:'none'}:{}
    return <div className={s.cover} style={styleCover}>
        <div className={s.wrap}>
            {title && <h1 className={s.header}>{title}</h1>}
            <img src={logo} alt="react logo"/>
            <ReactLogoSvg />
            {decr &&<p className={s.decr}>{decr}</p>}
        </div>
    </div>
}
export default HeaderBlock