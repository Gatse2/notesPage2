import React, { useState, useMemo } from 'react';

const TestPage = () => {
    const [ valueInput1, setValueInput1 ] = useState(0);
    const [ valueInput2, setValueInput2 ] = useState(0);

    const number1 = valueInput1;
    const number2 = valueInput2;

    const handleInputChange = (event) => {
        setValueInput1(event.target.value)
    }
    const handleInputChange2 = (event) => {
        setValueInput2(event.target.value)
    }


    const memo = useMemo(() => {
        return parseInt(valueInput1) + parseInt(valueInput2);
    }, [valueInput1, valueInput2]);


  


    return(
        <div className='testPage'>
            <h1>Test Page</h1>
            <input type="text" value={valueInput1} onChange={handleInputChange}/>
            <div>
                <input type="text" value={valueInput2} onChange={handleInputChange2}/>
            </div>
            <div>
            <button className='testButton'> {memo} </button>
            </div>


        </div>
    )
}

export default TestPage
