import React from "react";

function votePercent(_vote ,_totalvote){
   
    let vote_ratio =  _vote ? (_vote * 100) / _totalvote : 0;
    return vote_ratio
}
function VotingCard(props){
    let {ballot, incrementVoteCount,totalVotes} = props;

    return (  
    
            <div className="card" onClick={()=>incrementVoteCount(ballot.id)}>

                <h3>{ballot.candidate}</h3>
                <p>{votePercent(ballot.votes,totalVotes).toFixed(1)} %</p> 

            </div>
        
        )
      
    
}

export default VotingCard