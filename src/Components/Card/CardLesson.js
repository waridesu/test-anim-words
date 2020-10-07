import React, {useState} from 'react';
import s from './Card.module.scss';
import  cl from  'classnames'

const Card = props => {
    let [done, setDone] = useState(false)
    const handleCardClick = () => setDone(done = true)
    const cardClass = [s.card]
    if (done) {
        cardClass.push(s.done)
    }
    return (
        <div onClick={handleCardClick} className={cl(s.card,{ [s.done]:done})}>
            <div className={s.cardInner}>
                <div className={s.cardFront}>
                    {props.eng}
                </div>
                <div className={s.cardBack}>
                    {props.rus}
                </div>
            </div>

        </div>
    );
}

export default Card;