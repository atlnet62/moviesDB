
function Input({onInputHandler, type, idName, placeholder, value}) {
    return (
        <input onChange={onInputHandler} type={type} placeholder={placeholder} name={idName} id={idName} value={value} />
    )
}

export default Input;