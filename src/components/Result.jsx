import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Result({ inputValues }) {
    const investmentResult = calculateInvestmentResults(inputValues);
    const initialInvestment =
        investmentResult[0].valueEndOfYear -
        investmentResult[0].interest -
        investmentResult[0].annualInvestment;

    return (
        <div id="result">
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <td>Interest Value</td>
                        <td>Interest (Year)</td>
                        <td>Total Interest</td>
                        <td>Invested Capital</td>
                    </tr>
                </thead>
                <tbody>
                    {investmentResult.map((value) => {
                        const totalInterest =
                            value.valueEndOfYear -
                            value.annualInvestment * value.year -
                            initialInvestment;
                        const totalAmountInvested =
                            value.valueEndOfYear - totalInterest;
                        return (
                            <tr key={value.year}>
                                <td>{value.year}</td>
                                <td>
                                    {formatter.format(value.valueEndOfYear)}
                                </td>
                                <td>{formatter.format(value.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
