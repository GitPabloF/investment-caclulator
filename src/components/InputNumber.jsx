import { useState } from 'react';
export default function InputNumber({
    inputName,
    inputInitialValue,
    onInputChange
}) {
    const inputNameWithoutSpace = inputName.replaceAll(' ', '-');
    const [inputValue, setInputValue] = useState(inputInitialValue);

    function handleChange(event) {
        const newValue = event.target.value;
        setInputValue(newValue);
        onInputChange(newValue);
    }

    return (
        <>
            <p>
                <label htmlFor={inputNameWithoutSpace}>{inputName}</label>
                <input
                    type="number"
                    name={inputNameWithoutSpace}
                    id={inputNameWithoutSpace}
                    value={inputValue}
                    onChange={handleChange}
                    required
                />
            </p>
        </>
    );
}
