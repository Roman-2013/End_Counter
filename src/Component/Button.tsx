import React from 'react';
import s from '../App.module.css';
//кидать вместе с дефолтными пропсами
type ButtonType = {
    name: string
    callback: () => void
    disabled: boolean
}

export const Button = (props: ButtonType) => {
    const {name, callback, disabled} = props
    return (
        <div>
            <button
                disabled={disabled}
                onClick={callback}
                className={s.button}
            >
                {name}
            </button>
        </div>
    );
};

