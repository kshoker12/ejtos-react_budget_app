import React, {useContext} from 'react';
import {TiDelete} from "react-icons/ti";
import {AppContext} from "../context/AppContext";

const ExpenseItem = (props) => {
    const {dispatch} = useContext(AppContext);
    const {currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id,
        });
    };

    const decreaseAllocation = (name)=> {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense
        });

    }

    const increaseAllocation = (name)=> {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button 
                    style = {{display: "flex", border: "1px", borderRadius: "50%", backgroundColor: "limegreen", fontSize:"15px", fontWeight: "bold", color:"white", borderColor:"white", textAlign: "center"}}
                    onClick = {
                        event=> increaseAllocation(props.name)
                    }
                >+
                </button></td>

            <td>
                <button 
                    style = {{display: "flex", border: "1px", borderRadius: "50%", backgroundColor: "red", fontSize:"15px", fontWeight: "bold", color:"white", borderColor:"white", textAlign: "center"}}
                    onClick = {
                        event=> decreaseAllocation(props.name)
                    }
                >-
                </button></td>
            <td><TiDelete 
                size = "1.5em" 
                onClick = {handleDeleteExpense}>
                </TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;

