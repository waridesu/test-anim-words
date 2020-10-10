import React from 'react';
import s from './HeaderBlock.module.scss'

const MyHeaderBlock = props => {
    const backColor = props.col && {backgroundColor: 'green', width: '100%', margin: 'auto', textAlign: 'center'}
    const Color = (props.col || props.cel) && {
        color: 'white',
        textDecoration: 'none',
        padding: '5px 15px',
        display: 'inline-block'
    }
    return <nav style={backColor}>
        <div className={s.headerLink}>
            <a style={Color} href={props.link}>{props.decr}{props.dat}</a>
            <a style={Color} href={props.link}>{props.dif}{props.dest}</a>
            <a style={Color} href={props.link}>{props.decr}{props.dat}</a>
            <a style={Color} href={props.link}>{props.dif}{props.dest}</a>
        </div>
    </nav>
}
export default MyHeaderBlock
