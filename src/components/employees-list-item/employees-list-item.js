// import {Component} from 'react';
import './employees-list-item.css';

const EmployeesListitem = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         increase: this.props.increase,
    //         like: false
    //     }
    // }

    // onIncrease = () => {
    //     this.setState(({increase})=>({
    //         increase: !increase
    //     }));
    //     this.props.onToggleIncrease();
    // }

    // onLike = () => {
    //     this.setState(({like})=>({
    //         like: !like
    //     }));
    // }

    // render() {
        const {name, salary, onDelete, onToggleProp, onSalaryChange, increase, like} = props;
        // const {increase, like} = this.state;

        let classNames = 'list-group-item d-flex justify-content-between';
        if(increase){
            classNames += ' increase';
        }

        if(like){
            classNames += ' like';
        }

        // const onSalaryChange = (e) =>{ 
        //     console.log(e.currentTarget.value.splice(0,1));
        // }

        return (
            <li className={classNames} >
                <span className="list-group-item-label"
                        data-toggle="like"
                        onClick={onToggleProp}
                >{name}</span>
                <input type="text" 
                        className="list-group-item-input"
                        defaultValue={salary + '$'}
                        onChange={(e)=> onSalaryChange(e.currentTarget.value)}
                        />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        data-toggle="increase"
                        onClick={onToggleProp}
                        >
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    // }
   
}

export default EmployeesListitem;