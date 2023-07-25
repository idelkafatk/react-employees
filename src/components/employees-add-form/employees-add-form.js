import './employees-add-form.scss';
import {Component} from "react";

class EmployeesAddForm extends Component{
    state= {
        name: '',
        salary: ''
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name, salary} = this.state

        if (name.length >= 3 && salary) {
            this.props.onAdd(name, salary);
            this.setState({
                name: '',
                salary: ''
            })

            e.target[0].classList.remove('error')
            e.target[1].classList.remove('error')
        }
        if (name.length < 3){
            e.target[0].classList.add('error')
        }

        if (!salary) {
            e.target[1].classList.add('error')
        }
    }

    render() {
        const {name, salary} = this.state
        let inputClass = "form-control new-post-label"
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                           className={inputClass}
                           name="name"
                           value={name}
                           placeholder="Как его зовут?" onChange={this.onValueChange}/>
                    <input type="number"
                           className={inputClass}
                           name="salary"
                           value={salary}
                           placeholder="З/П в $?" onChange={this.onValueChange}/>

                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;