import React, {useState} from 'react';
import s from './MyCard.module.scss'

const MyCard = props => {
    let [isDone, setIsDone] = useState(null)
    const handleCardClick = () => {
        if (!isDone) setIsDone(isDone = true);
        else setIsDone(isDone = false);
    }
    return <div onClick={handleCardClick} className={s.wordWrap}>
        <div className={`${isDone && s.anim} ${isDone ? s.true : s.false}`}>{isDone ? props.rus : props.eng}</div>
    </div>
}
export default MyCard;