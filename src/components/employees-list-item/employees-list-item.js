import './employees-list-item.css';

const EmployeesListItem = (props) =>  {
    const {name, salary, onDelete, onToggleProp, increase, rise, onUpdateEmpSalary} = props
    let classNames = 'list-group-item d-flex justify-content-between'

    if (increase) {
        classNames += ' increase'
    }

    if (rise) {
        classNames += ' like'
    }

    const onUpdateSalary = (e) => {
        const salary = e.currentTarget.value
        onUpdateEmpSalary(salary.slice(0, salary.length - 1))
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label"
                  onClick={onToggleProp}
                  data-toggle="rise">{name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} onChange={onUpdateSalary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm " onClick={onToggleProp} data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash" onClick={onDelete}></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;