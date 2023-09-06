import React, {useEffect, useState} from 'react';
import s from './Settings2.module.css'


import {Button2} from './Button2';
import {Input2} from './Input2';
import {NavLink} from 'react-router-dom';

type SettingsPropsType = {
    min: number
    max: number
    setMax: (value: number) => void
    setMin: (value: number) => void
    disabledStatus: boolean
    setDisabledStatus: (disabledStatus: boolean) => void
    incorrectMax: boolean
    setIncorrectMax: (incorrectMax: boolean) => void
    incorrectMin:boolean
    setIncorrectMin:(incorrectMin:boolean)=>void

}

export const Settings2 = (props: SettingsPropsType) => {

    let {min, max, setMax, setMin, setDisabledStatus, disabledStatus, setIncorrectMax, incorrectMax,incorrectMin,setIncorrectMin} = props





    const setMaxValueHandler = (value: number) => {
        setMax(value)
        setDisabledStatus(false)
        setIncorrectMax(false)
        setIncorrectMin(false)


        if (value < 0 ) {
            setIncorrectMax(true)
        }
         if(value <= min){
            setIncorrectMax(true)
            setIncorrectMin(true)
        }
         if(min<0){
            setIncorrectMin(true)
        }
    }


    const setMinValueHandler = (value: number) => {
        setMin(value)
        setDisabledStatus(false)
        setIncorrectMin(false)
        setIncorrectMax(false)

        if (value < 0 ) {
            setIncorrectMin(true)
        }
        if( value >= max){
            setIncorrectMin(true)
            setIncorrectMax(true)
        }
        if(max<0){
            setIncorrectMax(true)
        }
    }


    const buttonHandler = () => {
        setDisabledStatus(true)
        localStorage.setItem('minimal', min.toString())
        localStorage.setItem('maximal', max.toString())
    }

    return (
        <div className={s.counter}>
            <div className={s.settingsWindow}>
                <Input2
                    incorrect={incorrectMax}
                    nameSpan={'max value'}
                    callback={setMaxValueHandler}
                    value={max}
                />
                <Input2
                    incorrect={incorrectMin}
                    nameSpan={'min value'}
                    callback={setMinValueHandler}
                    value={min}
                />
            </div>
            <div className={s.buttonsWindow}>
                <NavLink to={'/Counter2'}>
                    <Button2
                    disabled={false}
                    name={'Set'}
                    callback={buttonHandler}
                />
                </NavLink>
            </div>
        </div>
    );
};

