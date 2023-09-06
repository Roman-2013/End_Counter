import React, {useEffect, useState} from 'react';
import s from './Settings.module.css'
import {Button} from './Button';
import {Input} from './Input';
import {useDispatch} from 'react-redux';
import {setDisabledStatusAC, setIncorrectMaxAC, setIncorrectMinAC, setMaxAC, setMinAC} from '../state/Variant1-reducer';

type SettingsPropsType = {
    min: number
    max: number
    disabledStatus: boolean
    incorrectMax: boolean
    incorrectMin:boolean

}

export const Settings = (props: SettingsPropsType) => {

    let {min, max, disabledStatus , incorrectMax,incorrectMin} = props
    const dispatch=useDispatch()

    const setMaxValueHandler = (value: number) => {
        dispatch(setMaxAC(value))
        dispatch(setDisabledStatusAC(false))
        dispatch(setIncorrectMaxAC(false))
        dispatch(setIncorrectMinAC(false))
        if (value < 0 ) {
            dispatch(setIncorrectMaxAC(true))
        }
         if(value <= min){
             dispatch(setIncorrectMaxAC(true))
             dispatch(setIncorrectMinAC(true))
        }
         if(min<0){
             dispatch(setIncorrectMinAC(true))
        }
    }


    const setMinValueHandler = (value: number) => {
        dispatch(setMinAC(value))
        dispatch(setDisabledStatusAC(false))
        dispatch(setIncorrectMinAC(false))
        dispatch(setIncorrectMaxAC(false))

        if (value < 0 ) {
            dispatch(setIncorrectMinAC(true))
        }
        if( value >= max){
            dispatch(setIncorrectMinAC(true))
            dispatch(setIncorrectMaxAC(true))
        }
        if(max<0){
            dispatch(setIncorrectMaxAC(true))
        }
    }


    const buttonHandler = () => {
        dispatch(setDisabledStatusAC(true))
        // localStorage.setItem('minimal', min.toString())
        // localStorage.setItem('maximal', max.toString())
    }

    return (
        <div className={s.counter}>
            <div className={s.settingsWindow}>
                <Input
                    incorrect={incorrectMax}
                    nameSpan={'max value'}
                    callback={setMaxValueHandler}
                    value={max}
                />
                <Input
                    incorrect={incorrectMin}
                    nameSpan={'min value'}
                    callback={setMinValueHandler}
                    value={min}
                />
            </div>
            <div className={s.buttonsWindow}>
                <Button
                    disabled={incorrectMax || disabledStatus || incorrectMin}
                    name={'Set'}
                    callback={buttonHandler}
                />
            </div>
        </div>
    );
};

