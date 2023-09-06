import React, {useEffect, useState} from 'react';
import s from './App.module.css';

import Variant1 from './Variant1';
import Variant2 from './Variant2/Variant2';
import {NavLink} from 'react-router-dom';
import {Button} from './Component/Button';

function App() {
    const[example,setExample]=useState('Variant1')
return (
    <div className={s.appContainer}>
        <NavLink to={'/'}><button className={s.appButton} onClick={()=>setExample('Variant1')}>Variant1</button></NavLink>
        <NavLink to={'/Counter2'}><button className={s.appButton} onClick={()=>setExample('Variant2')}>Variant2</button></NavLink>


        {example==='Variant1'?<Variant1/>:example==='Variant2'?<Variant2/>:''}
    </div>
)

}

export default App;
