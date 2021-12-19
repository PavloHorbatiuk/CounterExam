import React, {ChangeEvent, useState} from 'react' ;
import s from './Counter.module.css'


function Counter() {
    const [maxvalue, setMaxvalue] = useState(0);
    const [count, setCount] = useState(0);
    const [startNumber, setStartNumber] = useState(0);
    const [error, setError] = useState(false)

    const setNumber = () => {
        setMaxvalue(maxvalue)
        setCount(startNumber)
    }
    const maxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let inputValue = parseInt(e.currentTarget.value)
        setMaxvalue(inputValue)
    };
    const startValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let startValue = parseInt(e.currentTarget.value)
        setStartNumber(startValue)
        setError(false)

    }
    const incCallback = () => {
        if (count < maxvalue) {
            setCount(count + 1)
        } else {
            setError(true)
        }
    }
    const resetCallback = () => {
        setCount(0)
        setError(false)

    }
    return (
        <div className={s.maincontainer}>
            {/*<div className={s.NewDate}><h1><NewDate/></h1></div>*/}
            <div className={s.item}>
                <div className={s.block1}>
                    <div className={s.inputStyle1}>
                        max value: <input
                        // value="0"
                        type="number"
                        onChange={maxValueChange}
                    />
                        start value:<input
                        type='number'
                        // value="0"
                        onChange={startValueChange}/>
                    </div>
                    <div className={s.setButton}>
                        <button onClick={setNumber}>Set</button>
                    </div>
                </div>
                <div className={s.block2}>
                    <div className={`${s.sValue} ${error ? s.redNumber : ''}`}>{count}</div>
                    <div className={s.inc_reset}>
                        <button disabled={error} onClick={incCallback}>Inc</button>
                        <button onClick={resetCallback}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Counter