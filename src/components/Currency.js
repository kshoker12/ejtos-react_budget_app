import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Currency = () => {
    const {dispatch, payload} = useContext(AppContext);
    const {currency} = useContext(AppContext);

    return (
        <div className = "alert alert-secondary">
            <input>
            </input>
        </div>
    )
}
