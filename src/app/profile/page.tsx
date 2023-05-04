import styles from './profile.module.css';
import Layout from '../../../components/global/layout';
const Profile = () => {
  return (
    <Layout>
      <div className={styles.profileContainer}>
        <div className={styles.idCard}>
          <p>Hello, Hector</p>
          <p>Member Since 2023</p>
        </div>
      </div>
        <button>Update Profile</button>
    </Layout>
  )
}

export default Profile;