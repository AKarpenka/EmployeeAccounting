import './app-filter.css'

const AppFilter = (props) => {

    const buttonsObj = [
        {name: 'all', label: 'All employees'},
        {name: 'riseEmployees', label: 'Employees for promotion'},
        {name: 'highSalary', label: 'Salary over $1000'}
    ]

    const buttons = buttonsObj.map(({name, label}) => {
        const active = props.type === name;
        const clazz = active ? 'btn-light':'btn-outline-light';
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilter(name)}
            >
                {label}
            </button>
        )
    });
    

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );

}

export default AppFilter;
