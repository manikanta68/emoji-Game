import './index.css'

const WinOrLoseCard = props => {
  const {Score, length, resetGame, TopScore} = props

  const playClicked = () => {
    resetGame()
  }
  return (
    <div className="winOrLoss-container">
      {Score === length - 1 ? (
        <div className="won-game">
          <h1 className="win-heading">You Won</h1>
          <div>
            <p className="best-score">Best Score </p>
            <p className="scores">{`${Score} / ${TopScore}`}</p>
            <button className="play-button" onClick={playClicked} type="button">
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
          />
        </div>
      ) : (
        <div className="loss-game">
          <div>
            <h1 className="lose-heading">You Lose</h1>
            <div>
              <p className="best-score"> Score</p>
              <p className="scores">{` ${Score}/${length}`}</p>
              <button
                className="play-button"
                onClick={playClicked}
                type="button"
              >
                Play Again
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or loss"
          />
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
