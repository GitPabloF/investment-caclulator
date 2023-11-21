import UserImput from './components/UserInput';
import Header from './components/Header';
import Result from './components/Result';
import { useState } from 'react';

function App() {
    const initialInputValues = {
        initialInvestment: 1500,
        annualInvestment: 900,
        expectedReturn: 5.5,
        duration: 12
    };

    const [inputValues, setInputValue] = useState(initialInputValues);

    function handleInputChange(value, index) {
        const newInputValues = { ...inputValues };
        newInputValues[index] = parseFloat(value);
        setInputValue(newInputValues);
        console.log(inputValues);
    }

    return (
        <>
            <Header />
            <UserImput
                inputValues={inputValues}
                handleInputChange={handleInputChange}
            />
            <Result inputValues={inputValues} />
        </>
    );
}

export default App;
