import Image from 'next/image';
import styles from './tickbox.module.css';

const Tickbox = () => {
  return (
    <div className={styles.tickContainer}>
      <Image src='/tickbox.png' alt='tickbox' width={20} height={20}/>
    </div>
  )
}

export default Tickbox;