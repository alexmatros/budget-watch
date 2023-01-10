import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { PieChart } from 'react-minimal-pie-chart';

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    const amountsTransactions = transactions.map(transaction => [transaction.amount, transaction.category]);

    const income = amountsTransactions.filter(item => item[0] > 0).reduce((acc, item) => (acc += item[0]), 0).toFixed(2);
    const expense = amountsTransactions.filter(item => item[0] < 0).reduce((acc, item) => (acc += Math.abs(item[0])), 0).toFixed(2);

    const salary = amountsTransactions.filter(item => item[1] === 'Salary').reduce((acc, item) => (acc += Math.abs(item[0])), 0).toFixed(2);
    const miscInc = amountsTransactions.filter(item => item[1] === "MiscInc").reduce((acc, item) => (acc += Math.abs(item[0])), 0).toFixed(2);

    const housing = amountsTransactions.filter(item => item[1] === "Housing").reduce((acc, item) => (acc += Math.abs(item[0])), 0).toFixed(2);
    const transportation = amountsTransactions.filter(item => item[1] === "Transportation").reduce((acc, item) => (acc += Math.abs(item[0])), 0).toFixed(2);
    const food = amountsTransactions.filter(item => item[1] === "Food").reduce((acc, item) => (acc += Math.abs(item[0])), 0).toFixed(2);
    const utilities = amountsTransactions.filter(item => item[1] === "Utilities").reduce((acc, item) => (acc += Math.abs(item[0])), 0).toFixed(2);
    const insurance = amountsTransactions.filter(item => item[1] === "Insurance").reduce((acc, item) => (acc += Math.abs(item[0])), 0).toFixed(2);
    const miscExp = amountsTransactions.filter(item => item[1] === "MiscExp").reduce((acc, item) => (acc += Math.abs(item[0])), 0).toFixed(2);
    
    var showCharts = (income > 0) || (expense > 0);

    const incChart = (
        <PieChart
            rounded
            lineWidth={40}
            radius={40}
            animate={true}
            totalValue={income}
            data = {[
                { title: 'Salary', value: salary, color: '#53C296' },
                { title: 'Misc.', value: miscInc, color: '#99D973' },
            ]}
        />
    )

    const expChart = (
        <PieChart
            rounded
            lineWidth={40}
            radius={40}
            animate={true}
            totalValue={expense}
            data = {[
                { title: 'Housing', value: housing, color: '#6A2135' },
                { title: 'Transportation', value: transportation, color: '#C13C37' },
                { title: 'Food', value: food, color: '#DC1C13' },
                { title: 'Utilities', value: utilities, color: '#EA4C46' },
                { title: 'Insurance', value: insurance, color: '#F07470' },
                { title: 'Misc.', value: miscExp, color: '#F1959B' },
            ]}
        />
    )

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${income}</p>
                {showCharts && incChart}
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense}</p>
                {showCharts && expChart}
            </div>
        </div>
    )
}