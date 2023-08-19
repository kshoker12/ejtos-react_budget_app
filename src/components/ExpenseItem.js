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
                    style = {{display: 'inline-flex', border: "1px", backgroundColor: "limegreen", fontWeight: "bolder", color:"white", borderColor:"white",width: "40px", height: "40px", borderRadius: "50%", textAlign: "center", alignItems:"center", justifyContent: "center", fontSize:"25px", padding:"1px"}}
                    onClick = {
                        event=> increaseAllocation(props.name)
                    }
                >+
                </button></td>

            <td>
                <button 
                    style = {{display: 'inline-flex', border: "1px", backgroundColor: "red", fontWeight: "bolder", color:"white", borderColor:"white",width: "40px", height: "40px", borderRadius: "50%", textAlign: "center", alignItems:"center", justifyContent: "center", fontSize:"25px", padding:"1px"}}
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

