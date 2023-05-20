
function user(props) {
    return (
        <div>
            <p>{props.user.name}</p>
            <p>{props.user.email}</p>
        </div>
    )
}

export default user