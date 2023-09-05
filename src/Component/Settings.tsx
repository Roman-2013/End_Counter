import React, {useEffect, useState} from 'react';
import s from './Settings.module.css'
import {Button} from './Button';
import {Input} from './Input';

type SettingsPropsType = {
    min: number
    max: number
    setMax: (value: number) => void
    setMin: (value: number) => void
    disabledStatus: boolean
    setDisabledStatus: (disabledStatus: boolean) => void
    incorrect: boolean
    setIncorrect: (incorrect: boolean) => void

}

export const Settings = (props: SettingsPropsType) => {

    let {min, max, setMax, setMin, setDisabledStatus, disabledStatus, setIncorrect, incorrect} = props
//  можно убрать
    const [minValue, setMinValue] = useState(min)
    const [maxValue, setMaxValue] = useState(max)

    useEffect(() => {
        setMax(maxValue)
        setMin(minValue)
    }, [minValue, maxValue])


    const setMaxValueHandler = (value: number) => {
        setMaxValue(value)
        setDisabledStatus(false)
        setIncorrect(false)

        if (value < 0 || value <= minValue) {
            setIncorrect(true)
        }
    }


    const setMinValueHandler = (value: number) => {
        setMinValue(value)
        setDisabledStatus(false)
        setIncorrect(false)

        if (value < 0 || value >= maxValue) {
            setIncorrect(true)
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
                <Input
                    incorrect={incorrect}
                    nameSpan={'max value'}
                    callback={setMaxValueHandler}
                    value={max}
                />
                <Input
                    incorrect={incorrect}
                    nameSpan={'min value'}
                    callback={setMinValueHandler}
                    value={min}
                />
            </div>
            <div className={s.buttonsWindow}>
                <Button
                    disabled={incorrect || disabledStatus}
                    name={'Set'}
                    callback={buttonHandler}
                />
            </div>
        </div>
    );
};

