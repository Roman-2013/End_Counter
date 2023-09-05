import React from 'react';
import s from './Window.module.css'
type WindowType={
    count:number
    disabledStatus:boolean
    incorrect:boolean
    max:number
}
export const Window = (props:WindowType) => {
    const {count,disabledStatus,incorrect,max}=props
    return (
        <div className={s.window}>
            <span
                className={`${s.number} ${count===max?s.numberRed:''} ${disabledStatus?'':s.string} ${incorrect?s.numberRed:''}` }>
                {incorrect?'Incorrect value!':disabledStatus?count:'enter values and press \'set\''}
            </span>
        </div>
    );
};

