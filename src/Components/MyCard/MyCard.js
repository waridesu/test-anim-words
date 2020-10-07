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
                className={cl(s.wordWrap, {[s.anim]: done === true}, {[s.rev]: done === false})}>
        {done ? <div className={s.true}>{props.rus}</div> : <div className={s.false}>{props.eng}</div>}
    </div>
}
export default MyCard;