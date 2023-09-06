import React from 'react';
import s from './Window2.module.css'
type WindowType={
    count:number
    disabledStatus:boolean
    incorrectMax:boolean
    incorrectMin:boolean
    max:number
}
export const Window2:React.FC<WindowType> = ({count,disabledStatus,incorrectMin,incorrectMax,max}) => {
    return (
        <div className={s.window}>
            <span
                className={`${s.number} ${count===max?s.numberRed:''} ${disabledStatus?'':s.string} ${incorrectMin?s.numberRed:incorrectMax?s.numberRed:''}` }>
                {incorrectMin?'Incorrect value!':incorrectMax?'Incorrect value!':disabledStatus?count:'enter values and press \'set\''}
            </span>
        </div>
    );
};

