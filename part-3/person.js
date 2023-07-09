const nameLength = 6;

const Person = (props) => {


    return (
        <div>
            <p>{props.info}</p>
            <p>
                Name: {props.name.slice(0, nameLength)}
            </p>
            <h3>Age: {props.age} {props.age > 18 ? "Please go vote!" : "You must be 18"}!</h3>
            <ul>  
            Hobbies:  
            {props.hobbies.map(hobbie => <li>{hobbie}</li>)}
            </ul>
        </div>
    );
}