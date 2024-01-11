const Button = ({ login, setLogin }) => {
    console.log("button rendered")
    return (
        <button onClick={() => setLogin(!login)}>{login ? "logout" : "login"}</button>
    )
}

export default Button