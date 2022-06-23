import React,{useState,useEffect} from "react";
import './App.css';
import BallotJson from './lib/BallotJson';
import VotingCard from './components/VotingCard';

function App() {
  let [ballots,setBallots] = useState([]);
  useEffect(()=> {
    setBallots(BallotJson)
  },[]);

  function incrementVoteCount(_id){
    ballots = ballots.map((ballot)=> {
      if (ballot.id === _id){
        ballot.votes ++;
      }
      return ballot;
    });

    setBallots(ballots)
  }

  return (
    <div className="App">

      <div>

        {ballots.map((ballot) =>{
          return (
           < VotingCard ballot={ballot} 
            incrementVoteCount = {(id) => incrementVoteCount(id)} ></VotingCard>
          )
        })
        }
      </div>
      
     
    </div>
  );
}

export default App;
