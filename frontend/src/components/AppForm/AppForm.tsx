import React from 'react';
import './AppForm.css';

const AppForm = () => {
    return(
       <div className="app-form-wrapper container">
           <form className="app-form">
                <div className="app-form__control">
                    <label>Model </label>
                    <input type="text"/>
                </div>
                <div className="app-form__control">
                    <label>Price </label>
                    <input type="text"/>
                </div>
                <div className="app-form__control">
                    <label>Power </label>
                    <input type="text"/>
                </div>
                <button className="app-form__submit-btn" type="submit">Add Car</button>
           </form>
       </div>
    )
};

export default AppForm;
