import { useSelector } from "react-redux"
import "./Header.css"


const Header = () => {
  const drinkCount = useSelector(state => state.drinksCounter)
  console.log(drinkCount)
  const emojiArray = Array(drinkCount)
  emojiArray.fill('🍸')
  console.log(emojiArray)
  return (
    <div className="header">
      <h1>
        <a href="/">Cocktail Counter!!!</a>
      </h1>
      <h3>Drink Counter {emojiArray} </h3>
    </div>
  )
}

export default Header