import React from 'react';
import s from './App2.module.css';
import {Button2} from './Button2';
import {Window2} from './Window2';
import {NavLink} from 'react-router-dom';


type CounterPropsType = {
    count: number
    incHandler: () => void
    resetHandler: () => void
    max: number
    disabledStatus: boolean
    incorrectMin: boolean
    incorrectMax:boolean
}


export const Counter2 = (props: CounterPropsType) => {

    let {count, incHandler, resetHandler, max, disabledStatus, incorrectMin,incorrectMax} = props

    return (
        <div className={s.counter}>
            <Window2
                max={max}
                incorrectMax={incorrectMax}
                incorrectMin={incorrectMin}
                disabledStatus={disabledStatus}
                count={count}
            />
            <div className={s.buttonsWindow}>
                <Button2
                    disabled={count === max || !disabledStatus}
                    callback={incHandler}
                    name={'inc'}
                />
                <Button2
                    disabled={!disabledStatus}
                    callback={resetHandler}
                    name={'reset'}
                />
                <NavLink to={'/Settings2'}>
                    <Button2
                        disabled={false}
                        callback={()=>{}}
                        name={'set'}
                    />
                </NavLink>
            </div>
        </div>
    );
};

