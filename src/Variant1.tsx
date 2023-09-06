import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from './Component/Counter';
import {Settings} from './Component/Settings';

function Variant1() {

    //let errors={1:'enter values and press \'set\'',2:'Incorrect value'}

    const [count, setCount] = useState(0)
    const [min, setMin] = useState(Number(localStorage.getItem('minimal')))
    const [max, setMax] = useState(Number(localStorage.getItem('maximal')))
    const [disabledStatus,setDisabledStatus]=useState(true)
    const [incorrectMax,setIncorrectMax]=useState(false)
    const [incorrectMin,setIncorrectMin]=useState(false)


    useEffect(()=>{
       setCount(min)
    },[min,incorrectMax,incorrectMin])


    const incHandler = () => {
        if (count < max) {
            setCount(count + 1)
        }
    }
    const resetHandler = () => {
        setCount(min)
    }


    return (
        <div className={s.basic}>
            <Settings
                min={min}
                max={max}
                setMin={setMin}
                setMax={setMax}
                disabledStatus={disabledStatus}
                setDisabledStatus={setDisabledStatus}
                incorrectMax={incorrectMax}
                incorrectMin={incorrectMin}
                setIncorrectMax={setIncorrectMax}
                setIncorrectMin={setIncorrectMin}

            />
            <Counter
                disabledStatus={disabledStatus}
                max={max}
                count={count}
                incHandler={incHandler}
                resetHandler={resetHandler}
                incorrectMax={incorrectMax}
                incorrectMin={incorrectMin}
            />
        </div>
    );
}

export default Variant1;
