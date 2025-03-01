const Clock = ({ totalTime, minutes, seconds }) =>{
    return(
        <div>
            <h2>{ totalTime }</h2>
            <p>{ minutes }:{ seconds }</p>
        </div>    
    );
}

export default Clock;