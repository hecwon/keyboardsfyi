import Layout from '../../../components/global/layout';
import styles from './new.module.css';

const New = () => {
  return (
    <Layout>
      <form className={styles.postContainer}>
        <div>
          CASE
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="QK60"
          />
        </div>
        <div>
          SWITCH
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="Gazzew Boba U4T"
          />
        </div>
        <div>
          PLATE MATERIAL
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="FR4"
          />
        </div>
        <div>
          KEYCAPS
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="GMK Pono" />
        </div>
        <div>
          STABS
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="Owlabs Gold Stabs"
          />
        </div>
        <div>
          RECORDING DEVICE
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="iPhone 13"
          />
        </div>
        <div className={styles.accent}>
          <button className={styles.postButton}>SUBMIT</button>
        </div>
      </form>
    </Layout>
  )
}

export default New;