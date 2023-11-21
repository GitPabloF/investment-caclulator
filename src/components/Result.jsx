import { calculateInvestmentResults } from "../util/investment";

export default function Result({ inputValues }) {

    return (
        <div id="result">
            <table>
                <thead>
                    <tr>
                        <td>Year</td>
                        <td>Interest Value</td>
                        <td>Interest (Year)</td>
                        <td>Total Interest</td>
                        <td>Invested Capital</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>$10,850</td>
                        <td>$550</td>
                        <td>$550</td>
                        <td>$10,300</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>$10,850</td>
                        <td>$550</td>
                        <td>$550</td>
                        <td>$10,300</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
