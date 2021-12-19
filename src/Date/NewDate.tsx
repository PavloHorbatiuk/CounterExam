import React, {useEffect, useState} from 'react' ;
import s from './NewDate.module.css'


function NewDate() {
    let [count, setCount] = useState(0)
    let newData = new Date();
    let houers = newData.getHours();
    let minutes = newData.getMinutes();
    let secundes = newData.getSeconds()
    count = secundes


    // useEffect(()=>{setTimeout(()=>{setCount(count+1,)},1000)},[count])

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000)
    }, [count]);

    // useEffect(() => {
    //     document.title=count.toString()
    // },[count])

    return (
        <div>
            <div>{houers}:{minutes}:{secundes}</div>
        </div>
    );
};
export default NewDate;