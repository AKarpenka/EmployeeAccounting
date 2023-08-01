import './employees-list.css';
import EmployeesListitem from '../employees-list-item/employees-list-item';

const EmployeesList = ({data, onDelete, onToggleProp, onSalaryChange}) => {

    const elements = data.map(employee => {
        const {id, ...employeeItem} = employee;
        return <EmployeesListitem 
                    key={id} 
                    {...employeeItem}
                    onDelete={() => onDelete(id)}
                    onToggleProp={(e)=>onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                    onSalaryChange={(value)=>onSalaryChange(id, value)}
                />
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;