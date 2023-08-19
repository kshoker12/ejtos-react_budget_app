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
            <div
                >
                <label 
                    style = {{position: "absolute",color:"white", marginTop: "12px", marginLeft: "20px", marginRight: "10px"}}>Currency: </label>
                <select 
                    className = "custom-select"
                    style = {{color: 'white', backgroundColor: 'lightgreen', width: "100%", height: "50px", textAlign: 'center'}}
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
            </div>
    )
}

export default Currency;
