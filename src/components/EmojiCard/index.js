import './index.css'

const EmojiCard = props => {
  const {eachItem, currentGame} = props
  const {emojiUrl, emojiName, id} = eachItem

  const emojiClicked = () => {
    currentGame(id, emojiName)
  }

  return (
    <li className="list-item">
      <button onClick={emojiClicked} type="button" className="emoji-bg">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
