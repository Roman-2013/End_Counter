import React, {useState} from 'react';
import s from './App.module.css';

import Variant1 from './Variant1';
import Variant2 from './Variant2/Variant2';
import {NavLink} from 'react-router-dom';


function App() {
    const [example, setExample] = useState('Variant1 (with Redux)')
    return (
        <div className={s.appContainer}>
            <NavLink to={'/Counter1'}><button
                    className={s.appButton}
                    onClick={() => setExample('Variant1 (with Redux)')}>
                    Variant 1<br/> (with Redux)
                </button>
            </NavLink>
            <NavLink to={'/Counter2'}><button
                    className={s.appButton}
                    onClick={() => setExample('Variant2 (without Redux)')}>
                    Variant 2 (without Redux)
                </button>
            </NavLink>

            {example === 'Variant1 (with Redux)' ? <Variant1/> : example === 'Variant2 (without Redux)' ?
                <Variant2/> : ''}
        </div>
    )

}

export default App;
