const MAX_NAME_LENGTH_TO_SHOW = 6


const Name = (props) => {
    console.log(props)
    return (
        <ul>
            <li> My Name Is {props.name}</li>
            <li>Species: {props.species}</li>
        </ul>
    )
}
function Tweet({ date, message, name, username }) {
    return (
        <div className="tweet">
            <span>{name}</span>
            <span className="username">{username}</span>
            <span className="date">{date}</span>
            <p>{message}</p>


        </div>
    )
}

function Person({ age, hobbies, name }) {
    const voteText = age >= 18
        ? "Go Vote!"
        : "Go study!";


    const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);
    return (
        <div>
            <p>Gather Info On this Person</p>
            <ul>
                <li>Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
                <li>Age: {age}</li>
                <ul>
                    Hobbies:
                    {hobbiesLIs}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );
}
