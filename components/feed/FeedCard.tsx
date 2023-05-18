import { Keyboard } from '../../src/app/feed/feed.interface';
import styles from '../../src/app/feed/feed.module.css';
import Tickbox from './tickbox';

const FeedCard: React.FC<{ keyboard: Keyboard }> = ({ keyboard }) => {

  return (
    <div className="styles.card">
      <div className={styles.card}>
        <div className={styles.title}>
          <span>{keyboard.title}</span>
          </div>
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