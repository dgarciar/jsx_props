const Tweet = (props) => {
    const myStyle = {
        backgroundColor: "lightblue",
        width: 300, 
        marginLeft: 10
    };

    return (
        <div style={myStyle}>
        <h3 style={{color: "red"}}>{props.name}</h3>
        <h4>{props.username}</h4>
        <p>{props.message}</p>
        <h4>{props.date}</h4>
        </div>
    );
}