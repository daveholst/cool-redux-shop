import './App.css';
import Header from './components/Header';
import CocktailCard from './components/CocktailCard'

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, } from "./actions";

function App() {
  const drinkCount= useSelector(state => state.drinksCounter)
  const dispatch = useDispatch();

  const cardCalc = (amt) => {
    const cardArray = [];
    for (let i = 0; i < amt; i++) {
      cardArray.push(        <CocktailCard></CocktailCard>        )
    }
    return cardArray
  }


  return (
    <div className="App">
      <Header></Header>
        <button onClick={()=> dispatch(increment())}> HIT ME</button>
      <div className="cocktail-cards">
        {cardCalc(drinkCount)}
      </div>
    </div>
  );
}

export default App;
