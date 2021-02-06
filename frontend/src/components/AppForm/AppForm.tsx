import { ChangeEvent, Component, FormEvent } from 'react';
import './AppForm.css';

interface Form {
    model: string;
    power: string;
    price: string;
}

class AppForm extends Component <{}, { form: Form }> {
    /* REMEMBER IT! */
    constructor(props: any) {
        super(props)
        this.state = {
            form: {
                model: '',
                power: '',
                price: ''
            }
        }
    }

    /* Shorter Way! */
    // state = {
    //     form: {
    //         model: '',
    //         power: '',
    //         price: ''
    //     }
    // }

    submitForm(event: FormEvent) {
        event.preventDefault();
        console.log(this.state.form);
    }

    handleInputs(name: string, event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        const inputName = name;
        this.setState((prevState) => ({
            form: { ...prevState.form, [inputName]: event.target.value }
        }))
    }

    render() {
        return(
            <div className="app-form-wrapper container">
                <form className="app-form" onSubmit={this.submitForm.bind(this)}>
                     <div className="app-form__control">
                         <label>Model </label>
                         <input type="text" onChange={ this.handleInputs.bind(this, 'model') } />
                     </div>
                     <div className="app-form__control">
                         <label>Price </label>
                         <input type="text" onChange={ this.handleInputs.bind(this, 'price') } />
                     </div>
                     <div className="app-form__control">
                         <label>Power </label>
                         <input type="text" onChange={ this.handleInputs.bind(this, 'power') } />
                     </div>
                     <button className="app-form__submit-btn" type="submit">CREATE</button>
                </form>
            </div>
        )
    }   
}

export default AppForm;
