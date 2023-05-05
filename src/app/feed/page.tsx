import * as samples from '../../../sampleData/samples';
import FeedCard from '../../../components/feed/FeedCard'
import Layout from '../../../components/global/layout';
import { Keyboard } from './feed.interface';

interface Data {
  [key : string] : Keyboard;
}

const Feed = () => {
  const data: Data = samples;

  return (
    <Layout>
    <div>Feed</div>
      {Object.values(data).map((each) => {
        return <FeedCard keyboard={each} key={each.keyboardIdPK}/>
      })}
    </Layout>
  )
}

export default Feed;