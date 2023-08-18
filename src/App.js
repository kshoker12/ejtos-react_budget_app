import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import AllocationForm from "./components/AllocationForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseItem from "./components/ExpenseItem";


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        <div className = "col-sm">
                            <Budget/>
                        </div>        

                        <div className='col-sm'>
                            <Remaining />
                        </div>       

                        <div className = "col-sm">
                            <ExpenseTotal />
                        </div>
                               
                       
                        <h3 className = "mt-3">Allocation</h3>
                        <div classname = "row">
                            <div className = "col-sm">
                                <ExpenseList/>
                            </div>
                        </div>

                        <h3 className = "mt-3">Change Allocation</h3>
                        <div className = "row mt-3">
                            <div className = "col-sm">
                                <AllocationForm/>
                            </div>
                        </div>       

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
