import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {

    const {dispatch, payload} = useContext(AppContext);
    const {budget} = useContext(AppContext);
    const {expenses} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item)=> {
        return (total += item.cost);
    }, 0);

    const onChange = (value) => {
        const localVal = Number(value);
        if (localVal < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            dispatch({
                type: "UPDATE_BUDGET",
                payload: totalExpenses,
            })
            return;
        }
        if (localVal > 20000) {
            alert("The value cannot exceed 20000");
            dispatch({
                type: "UPDATE_BUDGET",
                payload: 20000,
            })
            return;
        }
        dispatch({
            type: "UPDATE_BUDGET",
            payload: localVal,
        })
        
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
                value={budget}
                onChange = {(event)=> {
                    onChange(event.target.value);
                    }
                }
                
                
               >
            </input>

        </div>
    );
};

export default Budget;
