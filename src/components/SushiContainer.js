import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer(props) {
  
  
  const sushiComponents = props.sushiList.map( (sushi)=>{
    return (
      <Sushi sushi={sushi} key={sushi.id} emptyPlateFunction={props.emptyPlateFunction} spendMoneyFunction={props.spendMoneyFunction} money={props.money} />
    )
  })

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton newSushi= {props.newSushi} />
    </div>
  );
}

export default SushiContainer;
