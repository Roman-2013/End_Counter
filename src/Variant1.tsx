import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from './Component/Counter';
import {Settings} from './Component/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {setCountAC, StateType} from './state/Variant1-reducer';
import {Route, Routes} from 'react-router-dom';

function Variant1() {

    const stateVariant1 = useSelector<AppRootStateType, StateType>(state => state.variant1)
    const dispatch = useDispatch()
    const {min, max, incorrectMin, incorrectMax, disabledStatus, count} = stateVariant1


    useEffect(() => {
        dispatch(setCountAC(min))

    }, [min, incorrectMax, incorrectMin])


    const incHandler = () => {
        if (count < max) {
            dispatch(setCountAC(count + 1))
        }
    }
    const resetHandler = () => {
        dispatch(setCountAC(min))
    }


    return (
        <Routes>
            <Route path={'//Counter1'} element={<div className={s.basic}>
                <Settings
                    min={min}
                    max={max}
                    disabledStatus={disabledStatus}
                    incorrectMax={incorrectMax}
                    incorrectMin={incorrectMin}
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
            </div>}/>

        </Routes>
    );
}

export default Variant1;
