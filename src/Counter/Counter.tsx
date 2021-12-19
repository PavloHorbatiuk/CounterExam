import React, {ChangeEvent, useState} from 'react' ;
import s from './Counter.module.css'
import NewDate from "../Date/NewDate";


function Counter() {
    let [maxValue, setMaxValue] = useState(0)
    let [count, setCount] = useState(0)
    let [error, setError] = useState(false)

    const setNumber = () => {

    }
    const maxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value

    }
    const minValueChange = (e: ChangeEvent<HTMLInputElement>) => {

    }
    const incCallback = () => {

        if (count < 5) {
            setCount(count + 1)
        } else {
            setError(true)
        }
    }
    const resetCallback = () => {
        setCount(0)
    }
    return (
        <div className={s.maincontainer}>
          <div className={s.NewDate}> <h1> <NewDate/></h1></div>
            <div className={s.item}>
            <div className={s.block1}>
                <div className={s.inputStyle1}>
                    max value: <input type={"number"}
                                      value={""}
                                      onChange={maxValueChange}/>
                    min value:<input type='number'
                                     onChange={minValueChange}/>
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