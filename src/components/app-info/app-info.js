import './app-info.css';

const AppInfo = ({data}) => {
    const getIncrease = data.filter(el=>el.increase === true);

    return (
        <div className="app-info">
            <h1>Accounting for employees in the company</h1>
            <p>Total number of employees: {data.length}</p>
            <p>The award will be given to: {getIncrease.length}</p>
        </div>
    );
}

export default AppInfo;