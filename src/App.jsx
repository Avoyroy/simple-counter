import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incNum, decNum } from "./action"
const App = () => {
    const [inpVal, setInpVal] = useState('')
    const initialval = useSelector(state => state.IncDec);
    const dispatch = useDispatch();
    const decrement = () => {
        dispatch(decNum(inpVal));
    }
    const increment = () => {
        dispatch(incNum(inpVal));
    }


    return (
        <div>
            <h1>{initialval}</h1>
            <div className='container'>
                <button onClick={decrement}>-</button>
                <input type='text' onChange={e => setInpVal(e.target.value)} />
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default App