import React from 'react';
import s from './ContentBlock.module.scss'

const ContentBlock = props =>
    <div className={s.content}>
        <h1>{props.hOne}</h1>
        <p>{props.lor}</p>
        {props.children}
    </div>

export default ContentBlock