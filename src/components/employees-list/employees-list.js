import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp, onUpdateEmpSalary}) => {

    const elems = data.map(el => {
        const {id, ...elProps} = el
        return (
            <EmployeesListItem key={id} {...elProps}
                               onDelete={() => onDelete(id)}
                               onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                               onUpdateEmpSalary={(salary) => onUpdateEmpSalary(id, salary)}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elems}
        </ul>
    )
}

export default EmployeesList