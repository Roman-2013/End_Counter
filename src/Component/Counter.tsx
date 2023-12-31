import React from 'react';
import s from '../App.module.css';
import {Window} from './Window';
import {Button} from './Button';

type CounterPropsType = {
    count: number
    incHandler: () => void
    resetHandler: () => void
    max: number
    disabledStatus: boolean
    incorrectMin: boolean
    incorrectMax:boolean
}


export const Counter = (props: CounterPropsType) => {

    let {count, incHandler, resetHandler, max, disabledStatus, incorrectMin,incorrectMax} = props

    return (
        <div className={s.counter}>
            <Window
                max={max}
                incorrectMax={incorrectMax}
                incorrectMin={incorrectMin}
                disabledStatus={disabledStatus}
                count={count}
            />
            <div className={s.buttonsWindow}>
                <Button
                    disabled={count === max || !disabledStatus}
                    callback={incHandler}
                    name={'inc'}
                />
                <Button
                    disabled={!disabledStatus}
                    callback={resetHandler}
                    name={'reset'}
                />
            </div>
        </div>
    );
};

