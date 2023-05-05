import { Keyboard } from '../../src/app/feed/feed.interface';
import styles from '../../src/app/feed/feed.module.css';
const FeedCard = ({ keyboard, key }) => {

  return (
    <div key={key} className="styles.card">
      <div >
        <p>{keyboard.title}</p>
        <p>Case: {keyboard.case}</p>
        <p>Keycaps: {keyboard.keycap}</p>
        <p>Plate Material: {keyboard.plate}</p>
        <p>Switches: {keyboard.switch}</p>
        <p>Stabs: {keyboard.stab}</p>
        <p>Recording Device: {keyboard.recDevice}</p>
        <p>{keyboard.createdAt} {keyboard.upvotesFK}⬆️ {keyboard.commentsFK} comments</p>
        <p>{keyboard.user}</p>
      </div>
    </div>
  )
}

export default FeedCard;

/*
module.exports = {
  keyboard1: {
    keyboardIdPK: 1,
    case: cases[0],
    keycap: keycaps[0],
    plate: plates[0]
    stab: stabs[0],
    switch: switches[0],
    user: 'hector',
    recDevice: 'iPhone 13',
    title: 'sweet new qk60',
    createdAt: new Date(),
    commentsCount: 5,
    commentsFK: 1,
    upvotesFK: 1,
  },
*/