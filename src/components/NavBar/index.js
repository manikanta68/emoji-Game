import './index.css'

const Navbar = props => {
  const {score, topScore, WinOrLoss} = props
  return (
    <div className="nav-bg">
      <div className="nav-head-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="nav-heading">Emoji Game</h1>
      </div>{' '}
      {WinOrLoss ? null : (
        <div className="score-cont">
          <p className="score">{`Score: ${score}`}</p>
          <p className="top-score">{`Top Score: ${topScore}`}</p>
        </div>
      )}
    </div>
  )
}

export default Navbar
