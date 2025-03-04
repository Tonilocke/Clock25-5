const Clock = ({ totalTime, minutes, seconds, text }) =>{
    return(
        <div>
            <h2>{ text } { totalTime }</h2>
            <p>{ minutes }:{ seconds }</p>
        </div>    
    );
}

export default Clock;