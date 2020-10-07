import React, {useState} from 'react';
import s from './MyCard.module.scss'

const MyCard = props => {
    let [done, setDone] = useState(null)
    const handleCardClick = () => {
        if (!done) setDone(done = true);
        else setDone(done = false);
    }
    return <div onClick={handleCardClick} className={s.wordWrap}>
        <div className={`${done === true && s.anim} ${done ? s.true : s.false}`}>{done ? props.rus : props.eng}</div>
    </div>
}
export default MyCard;