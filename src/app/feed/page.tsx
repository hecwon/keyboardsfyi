import * as samples from '../../../sampleData/samples';
import FeedCard from '../../../components/feed/FeedCard'
import Layout from '../../../components/global/layout';
import styles from './feed.module.css';
import { Keyboard } from './feed.interface';

interface Data {
  [key : string] : Keyboard;
}

const Feed = () => {
  const data: Data = samples;

  return (
    <Layout>
    <div>Feed</div>
      <div className={styles.feedTopMargin}></div>
      <div className={styles.feedContainer}>
        {Object.values(data).map((each) => {
          return <FeedCard keyboard={each} key={each.keyboardIdPK}/>
        })}
      </div>
    </Layout>
  )
}

export default Feed;