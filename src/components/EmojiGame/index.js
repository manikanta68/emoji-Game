import {Component} from 'react'
import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {Score: 0, TopScore: 0, currentGame: [], WinOrLoss: false}

  resetGame = () => {
    const {Score, TopScore} = this.state
    if (Score > TopScore) {
      this.setState({TopScore: Score})
    }
    this.setState({WinOrLoss: false})
    this.setState({currentGame: []})

    this.setState({Score: 0})
  }

  currentGame = (id, emojiName) => {
    console.log(emojiName)
    const {currentGame} = this.state
    const newItem = currentGame.includes(id)
    if (newItem === false) {
      this.setState(prevState => ({
        currentGame: [...prevState.currentGame, id],
      }))
      this.setState(prevState => ({Score: prevState.Score + 1}))
    } else {
      const {Score, TopScore} = this.state
      if (TopScore < Score) {
        this.setState({TopScore: Score})
      }
      this.setState({WinOrLoss: true})
      // this.setState({Score: 0})
    }
  }

  render() {
    const {Score, TopScore, WinOrLoss} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    console.log(shuffledEmojisList().length, Score)
    return (
      <div className="bg-container">
        <Navbar score={Score} WinOrLoss={WinOrLoss} topScore={TopScore} />
        <div>
          {WinOrLoss ? (
            <WinOrLoseCard
              resetGame={this.resetGame}
              Score={Score}
              TopScore={TopScore}
              length={shuffledEmojisList().length}
            />
          ) : (
            <div className="items-container">
              <ul className="list-type">
                {shuffledEmojisList().map(eachItem => (
                  <EmojiCard
                    currentGame={this.currentGame}
                    key={eachItem.id}
                    eachItem={eachItem}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
