const Clock = ({ totalTime, minutes, seconds }) =>{
    return(
        <div>
            <h2>{ totalTime }</h2>
            <p>{ totalTime }:{ seconds }</p>
        </div>    
    );
}

export default Clock;