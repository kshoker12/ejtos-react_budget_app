import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Currency = () => {
    const {dispatch, payload} = useContext(AppContext);
    const {currency} = useContext(AppContext);

    const updateCurr = (value) => {
        dispatch({
            type: "UPDATE_CURRENCY",
            payload: value,
        })

    }

    return (
            <fieldset >
                <select 
                    className = "custom-select"
                    style = {{color: 'white', backgroundColor: 'lightgreen', width: "200px", height: "50px", textAlign: 'center'}}
                    id="select"
                    name = ""
                    onChange = {(event) => {
                        updateCurr(event.target.value);
                    }}>
                    <option value = "$" name = "$ Dollar">$ Dollar</option>
                    <option value = "£" name = "£ Pound">£ Pound</option>
                    <option value = "€" name = "€ Euro ">€ Euro</option>
                    <option value = "₹" name = "₹ Ruppee">₹ Ruppee</option>
                </select>
            </fieldset>
    )
}

export default Currency;
