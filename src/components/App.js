import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";


function App() {
  const API = "http://localhost:3001/sushis";

  const [sushiList, setSushiList] = useState([]);
  const [emptyPlates, setEmptyPlates] = useState([]);
  const [remainingMoney, setMoney] = useState(100);
  
  useEffect(()=>{makeNewRandomSushiList()}, [])
  
  function makeNewRandomSushiList(data){
    fetch(API).then(r=>r.json()).then( (data) => {
      const sushiSelection = [];
  
      for (let i = 0; i < 4; i++) {
        sushiSelection.push(data[Math.floor(Math.random() * data.length)]);
       }
       setSushiList(sushiSelection);
    })}

    function handleEmptyPlates(){
      const newEmptyPlates = [...emptyPlates];
      newEmptyPlates.push(1);
      setEmptyPlates(newEmptyPlates);
    }
    
    function runThemPockets(price){
      // 'run them pockets' is southern urban slang for taking money
      const newMoney = remainingMoney-price;
      setMoney(newMoney);
    }

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} newSushi={makeNewRandomSushiList} emptyPlateFunction={handleEmptyPlates} spendMoneyFunction={runThemPockets} money={remainingMoney} />
      <Table plates={emptyPlates} money={remainingMoney} />
    </div>
  );
}

export default App;
