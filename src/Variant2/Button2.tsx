import React from 'react';
import s from './App2.module.css';
//кидать вместе с дефолтными пропсами
type ButtonType = {
    name: string
    callback: () => void
    disabled: boolean

}

export const Button2:React.FC<ButtonType> = ({name, callback, disabled,...restProps}) => {
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

