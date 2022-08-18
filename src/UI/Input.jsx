
function Input({onInputHandler, type, idName, placeholder, children}) {
    return (
        <input onChange={onInputHandler} type={type} placeholder={placeholder} name={idName} id={idName} value={children} />
    )
}

export default Input;