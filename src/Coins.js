
import { useEffect, useState } from "react";

function App() {
  const [loading, set_loading] = useState(true);
  const [coins, set_coins] = useState([]);
  const [budget, set_budget] = useState(0);
  const [selected, set_selected] = useState(-1);
  const [click, set_click] = useState(false);
  const onChange = (event) => {
    set_budget(event.target.value);
  };
  const onClick = () => {
   // set_budget("");
    set_click((current) => !current);
  };
  const onSelect = (event) => { 
    set_selected(event.target.selectedIndex);
    console.log(selected);
  }
  useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => set_coins(json));
    set_loading(false);
  }, [])
  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      <label htmlFor="budget"> your budget : </label>
        <input id="budget" type="number" value={budget} onChange={onChange} placeholder="write your budget" ></input>
      <label htmlFor="budget"> $ </label>  
      {loading ? (<strong>Loading...</strong>) 
      : (  
      <select onChange={onSelect}>
        {coins.map((coin) => 
        (<option>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}USD</option>))}
      </select>)}
    <button onClick={onClick}>calculate</button>
    {click ? <input id="coin" value={Math.round(budget/coins[selected].quotes.USD.price)}></input>
     : "" }   
    </div>
  );
}

export default App;
