import React,{useState,useEffect} from "react";
import './App.css';
import BallotJson from './lib/BallotJson';
import VotingCard from './components/VotingCard';

function App() {
  let [ballots,setBallots] = useState([]);
  useEffect(()=> {
    setBallots(BallotJson)
  },[ballots]);

  let [totalvotes,setTotalVotes] = useState(0);
 

  function incrementVoteCount(_id){
    ballots = ballots.map((ballot)=> {
      if (ballot.id === _id){
        ballot.votes ++;
      }
      return ballot;
    });

  
    setBallots(ballots)
    totalVoteCount()
  }

  function totalVoteCount(){
    let tv = ballots.reduce((partial,b)=> partial.votes + b.votes)
      
      setTotalVotes(tv);
  }
  return (
    <div className="App">

      <div>

        {ballots.map((ballot) =>{
          return (
           < VotingCard ballot={ballot} 
              totalVotes = {totalvotes}
            incrementVoteCount = {(id) => incrementVoteCount(id)} ></VotingCard>
            
          )
        })
        }

        <p>Total votes : {totalvotes}</p>
      </div>
      
     
    </div>
  );
}

export default App;
