import React, {useEffect, useState} from 'react';
import s from './App2.module.css'


import {Counter2} from './Counter2';
import {Settings2} from './Settings2';
import {Route, Routes} from 'react-router-dom';

function Variant2() {

    //let errors={1:'enter values and press \'set\'',2:'Incorrect value'}

    const [count, setCount] = useState(0)
    const [min, setMin] = useState(Number(localStorage.getItem('minimal')))
    const [max, setMax] = useState(Number(localStorage.getItem('maximal')))
    const [disabledStatus, setDisabledStatus] = useState(true)
    const [incorrectMax, setIncorrectMax] = useState(false)
    const [incorrectMin, setIncorrectMin] = useState(false)


    useEffect(() => {
        setCount(min)
    }, [min, incorrectMax, incorrectMin])


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
            <Routes>
                <Route path={'/Settings2'} element={<Settings2
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
                />}/>
                <Route path={'/Counter2'} element={<Counter2
                    disabledStatus={disabledStatus}
                    max={max}
                    count={count}
                    incHandler={incHandler}
                    resetHandler={resetHandler}
                    incorrectMax={incorrectMax}
                    incorrectMin={incorrectMin}
                />}/>
            </Routes>
        </div>
    );
}

export default Variant2;
