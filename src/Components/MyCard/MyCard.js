import React, {useState} from 'react';
import s from './MyCard.module.scss'
import cl from 'classnames'

const MyCard = props => {
    let [done, setDone] = useState(null)
    const handleCardClick = () => {
        if (!done) setDone(done = true);
        else setDone(done = false);
    }
    return <div onClick={handleCardClick}
                className={s.wordWrap}>
        {done ? <div className={cl({[s.true]: done,[s.anim]: done === true})}>{props.rus}</div> : <div className={cl({[s.false]: !done,[s.anim]: done === false})}>{props.eng}</div>}
    </div>
}
export default MyCard;