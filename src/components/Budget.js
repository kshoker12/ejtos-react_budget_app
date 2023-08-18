import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {

    // const {budget} = useContext(AppContext);
    const [budget, setBudget] = useState(2000);
    const {expenses} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item)=> {
        return (total += item.cost);
    }, 0);

    const onChange = (value) => {
        const localVal = Number(value);
        if (localVal <= totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            setBudget(totalExpenses);
            return;
        }
        if (localVal >= 20000) {
            alert("The value cannot exceed 20000");
            setBudget(20000)
            return;
        }
        dispatchEvent(setBudget(localVal));
        
    }

    const inRange = ()=> {
    
    }
    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: $
            </span>
            <input
                type='number'
                id='budget'
                step = "10"
                min = {totalExpenses}
                max = "20000"
                value={budget}
                onChange = {(event)=> {
                    onChange(event.target.value);
                    inRange();
                }
                }
                
                
               >
            </input>

        </div>
    );
};

export default Budget;
