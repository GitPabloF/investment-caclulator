import InputNumber from './InputNumber';
import { useState } from 'react';

export default function UserImput({ inputValues, handleInputChange }) {
    return (
        <form action="" id="user-input">
            <div className="input-group">
                <InputNumber
                    inputName={'inital investment'}
                    inputInitialValue={inputValues.initialInvestment}
                    onInputChange={(value) =>
                        handleInputChange(value, 'initialInvestment')
                    }
                />

                <InputNumber
                    inputName={'annual investment'}
                    inputInitialValue={inputValues.annualInvestment}
                    onInputChange={(value) =>
                        handleInputChange(value, 'annualInvestment')
                    }
                />
            </div>

            <div className="input-group">
                <InputNumber
                    inputName={'expected return'}
                    inputInitialValue={inputValues.expectedReturn}
                    onInputChange={(value) =>
                        handleInputChange(value, 'expectedReturn')
                    }
                />
                <InputNumber
                    inputName={'duration'}
                    inputInitialValue={inputValues.duration}
                    onInputChange={(value) =>
                        handleInputChange(value, 'duration')
                    }
                />
            </div>
        </form>
    );
}
