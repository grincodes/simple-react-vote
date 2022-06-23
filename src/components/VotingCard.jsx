import React from "react";

function VotingCard(props){
    let {ballot, incrementVoteCount} = props;

    return (  
    
            <div className="card" onClick={()=>incrementVoteCount(ballot.id)}>

                <h3>{ballot.candidate}</h3>
                <p>{ballot.votes.toFixed(1)} %</p> 

            </div>
        
        )
      
    
}

export default VotingCard