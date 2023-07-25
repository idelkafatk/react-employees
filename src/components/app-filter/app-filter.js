import './app-filter.css'


const AppFilter = (props) => {
    const {onUpdateFilter} = props
    const btnsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'to-rise', label: 'На повышение'},
        {name: 'more-thousands', label: 'З/П больше 1000$'}
    ]
    const btns = btnsData.map(({name, label}) => {
        const active = props.filter === name
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button className={`btn ${clazz}`}
                    type="button"
                    key={name}
                    onClick={() => onUpdateFilter(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {btns}
        </div>
    )
}

export default AppFilter