import React from 'react';
import s from './Input2.module.css'
//
type InputPropsType = {
    value: number
    callback: (value: number) => void
    nameSpan: string
    incorrect: boolean

}
export const Input2: React.FC<InputPropsType> = ({value,callback,nameSpan,incorrect,...restProps}) => {

    return (
        <div className={s.inputContainer}>
            <span className={s.inputSpan}> {nameSpan}</span>
            <input
                //вынести класс и onChange
                onChange={(e) => callback(+e.currentTarget.value)}
                value={value}
                className={`${s.inputInput} ${incorrect ? s.colorRed : ''}`}
                type="number"
            />
        </div>
    );
};

