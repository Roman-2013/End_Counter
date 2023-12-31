import React from 'react';
import s from './Window.module.css'
type WindowType={
    count:number
    disabledStatus:boolean
    incorrectMax:boolean
    incorrectMin:boolean
    max:number
}
export const Window = (props:WindowType) => {
    const {count,disabledStatus,incorrectMin,incorrectMax,max}=props
    return (
        <div className={s.window}>
            <span
                className={`${s.number} ${count===max && disabledStatus ?s.numberRed:''} ${disabledStatus?'':s.string} ${incorrectMin?s.numberRed:incorrectMax?s.numberRed:''}` }>
                {incorrectMin?'Incorrect value!':incorrectMax?'Incorrect value!':disabledStatus?count:'enter values and press \'set\''}
            </span>
        </div>
    );
};

