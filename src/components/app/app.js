import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    name: "Anastasiya Karpenka",
                    salary: 800,
                    increase: true,
                    like: true
                },
                {
                    id: 2,
                    name: "Ivan Ivanov",
                    salary: 3000,
                    increase: false,
                    like: false
                },
                {
                    id: 3,
                    name: "Andrey Andreev",
                    salary: 5000,
                    increase: false,
                    like: false
                }
            ],
            term: '',
            type: 'all'
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({data: data.filter(item => item.id !== id)}));
    };

    createEmployee = (name, salary) => {
        this.setState(({data})=> {
            const newArr = [...data];
            newArr.push({
                id: (new Date()).getTime(),
                name,
                salary,
                increase: false,
                like: false
            });
            return {data: newArr}
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data})=>({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }));
    }

    searchEmp = (items, term, type) => {
        let filterdItems = [];
        switch (type) {
            case 'riseEmployees':
                filterdItems = items.filter(el => el.like);
                break;
            case 'highSalary':
                filterdItems = items.filter(el => el.salary > 1000);
                break;
            default:
                filterdItems = items;
                break;
        }

        if(term.length === 0){
            return filterdItems;
        };

        return filterdItems.filter(el => {
            return el.name.toLowerCase().indexOf(term.toLowerCase()) >-1
        });
    }

    // onSalaryChange = (id, value) => {
    //     console.log(id, +value.slice(0, -1));
    // }

    onSalaryChange = (id, value) => {
        console.log(id, +value.slice(0, -1));
        this.setState(({data})=>({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, salary: +value.slice(0, -1)}
                }
                return item;
            })
        }))
    }

    onSearch = (term) => this.setState({term});

    onFilter = (type) => this.setState({type});
    

    render() {
        const {data, term, type} = this.state;
        const visibleData = this.searchEmp(data, term, type);

        return (
            <div className="app">
                <AppInfo data={data}/>
    
                <div className="search-panel">
                    <SearchPanel onSearch={this.onSearch}/>
                    <AppFilter 
                        onFilter={this.onFilter}
                        type={type}
                    />
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp = {(id, prop) => this.onToggleProp(id, prop)}
                    onSalaryChange = {(id, value) => this.onSalaryChange(id, value)}
                />
                <EmployeesAddForm onAdd={this.createEmployee}/>
            </div>
        );
    }
}

export default App;