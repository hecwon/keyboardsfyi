import * as samples from '../../../sampleData/samples';
import FeedCard from '../../../components/feed/FeedCard'
import Layout from '../../../components/global/layout';
import styles from './feed.module.css';
import { Keyboard } from './feed.interface';

interface feedKbs {
  [key : string] : Keyboard;
}

const Feed = () => {
  const keybs: feedKbs = samples;

  return (
    <Layout>
    <div>Feed</div>
      <div className={styles.feedTopMargin}></div>
      <div className={styles.feedContainer}>
        {Object.values(keybs).map((each) => {
          return <FeedCard keyboard={each} key={each.keyboardIdPK}/>
        })}
      </div>
    </Layout>
  )
}

export default Feed;