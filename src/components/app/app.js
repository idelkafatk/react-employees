import {Component, StrictMode} from "react";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import './app.css'

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Max', salary: 1000, increase: true, rise: false, id: 2},
                {name: 'Alan', salary: 8000, increase: false, rise: false, id: 3},
            ],
            term: '',
            filterCond: 'all'
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {data: data.filter(item => item.id !== id)}
        })
    }

    addItem = (name, salary) => {
        const newItem = ({
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.maxId++
        })

        this.setState(({data}) => {
            return {data: [...data, newItem]}
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, [prop]: !item[prop]}
                    }
                    return item
                })
            }))
    }

    searchEmp = (items, term, filterCond) => {
        if (term === 0) {
            return items
        }

        const filteredItems = this.filterBy(items, filterCond)
        return filteredItems.filter(el => el.name.toLowerCase().startsWith(term.toLowerCase()))
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterBy = (items, cond) => {
        switch (cond) {
            case 'to-rise':
                return items.filter(item => item.rise)
            case 'more-thousands':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onUpdateFilter = (filterCond) => {
        this.setState({filterCond})
    }

    onUpdateEmpSalary = (id, slry) => {
        console.log(slry)
        this.setState(({data}) => ({
           data: data.map((item) => {
               if (item.id === id) {
                   return {...item, salary: +slry}
               }
               return item;
           })
        }))
    }

    render() {
        const countEmployees = this.state.data.length
        const countIncreaseEmployees = this.state.data.reduce((sum, cur) => cur.increase ? sum + 1 : sum, 0)
        const {data, term, filterCond} = this.state
        const visibleData = this.searchEmp(data, term, filterCond)
        return (
            <div className="app">
                <AppInfo employees={countEmployees}
                    increaseEmployees={countIncreaseEmployees}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={this.state.filterCond}
                               onUpdateFilter={this.onUpdateFilter}
                    />
                </div>
                <StrictMode>
                    <EmployeesList data={visibleData} onDelete={this.deleteItem}
                                   onToggleProp={this.onToggleProp}
                                   onUpdateEmpSalary={this.onUpdateEmpSalary}
                    />
                    <EmployeesAddForm onAdd={this.addItem}/>
                </StrictMode>
            </div>
        )
    }
}

export default App