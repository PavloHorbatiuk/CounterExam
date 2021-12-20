import React, {ChangeEvent, useEffect, useState} from 'react' ;
import s from './Counter.module.css'


function Counter() {
    const [startNumber, setStartNumber] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [count, setCount] = useState(0);
    const [error, setError] = useState(false)
    const [valueError, setValueError] = useState<number | string>(0)

    useEffect(() => {
        getLocalStorageValue();
    }, [])

    useEffect(() => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue));
        localStorage.setItem("startNumber", JSON.stringify(startNumber));
    }, [maxValue,startNumber]);

    const getLocalStorageValue = () => {
        let storageStartValueAsString = localStorage.getItem("startNumber")
        let storageMaxValueAsString = localStorage.getItem("maxValue")
        if (storageMaxValueAsString) {
            let newMaxValueFromStorage = JSON.parse(storageMaxValueAsString)
            setMaxValue(newMaxValueFromStorage)
            console.log(newMaxValueFromStorage)
        }
        if (storageStartValueAsString) {
            let newStartValueFromStorage = JSON.parse(storageStartValueAsString)
            setStartNumber(newStartValueFromStorage)
        }
    }

    const setNumber = () => {
        setMaxValue(maxValue)
        setCount(startNumber)
    }
    const maxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let inputValue = parseInt(e.currentTarget.value);
        (inputValue < 0) ? setValueError("incorrect value") : setValueError("Press set to install value");
        (inputValue < 0) ? setError(true) : setError(false)
        setMaxValue(inputValue)
    };
    const startValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let startValue = parseInt(e.currentTarget.value);
        (startValue < 0) ? setValueError("Incorrect value") : setValueError("Press set to install value");
        (startValue < 0) ? setError(true) : setError(false)
        setStartNumber(startValue)

    }
    const incCallback = () => {
        (count !== maxValue) ? setCount(count + 1) : setError(true)
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
                        Max value: <input
                       value={maxValue}
                        type="number"
                        onChange={maxValueChange}
                    />
                        Start value:<input
                        type='number'
                        value={startNumber}
                        onChange={startValueChange}/>
                    </div>
                    <div className={s.setButton}>
                        <button disabled={error} onClick={setNumber}>Set</button>
                    </div>
                </div>
                <div className={s.block2}>
                    <div className={error ? s.redNumber : s.sValue}>{count ? count : valueError}</div>
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