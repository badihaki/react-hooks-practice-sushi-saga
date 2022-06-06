import React, { useState } from "react";

function Sushi(props) {
  const [isEaten, setEaten] = useState(false);

  function handleClickToEat(e){
    if(isEaten === false){
      if(props.money >= props.sushi.price){
        props.emptyPlateFunction();
        props.spendMoneyFunction(props.sushi.price);
        setEaten(true);
      }
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ handleClickToEat}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={props.sushi["img_url"]}
            alt={props.sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
