const Button = ({ timerFunc, type,children }) =>{
    return(
        <button onClick={ ()=> timerFunc(type) }>{children}</button>
    );
}

export default Button;