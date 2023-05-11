import { Keyboard } from '../../src/app/feed/feed.interface';
import styles from '../../src/app/feed/feed.module.css';
import Tickbox from './tickbox';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const FeedCard = ({ keyboard, key }) => {

  return (
    <div key={key} className="styles.card">
      <div className={styles.card}>
        <p>{keyboard.title}</p>
        <div className={styles.line}>
          <Tickbox />
          <p>C: {keyboard.case}</p>
        </div>
        <div className={styles.line}>
          <Tickbox />
          <p>KC: {keyboard.keycap}</p>
        </div>
        <div className={styles.line}>
          <Tickbox />
          <p>Pl8: {keyboard.plate}</p>
        </div>
        <div className={styles.line}>
          <Tickbox />
          <p>Sw: {keyboard.switch}</p>
        </div>
        <div className={styles.line}>
          <Tickbox />
          <p>St: {keyboard.stab}</p>
        </div>
        <div className={styles.line}>
          <Tickbox />
          <p>Rec: {keyboard.recDevice}</p>
        </div>
        <div className={styles.details}>
          <p>{keyboard.upvotesFK}⬆️ {keyboard.commentsFK} comments {keyboard.user}</p>
        </div>
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