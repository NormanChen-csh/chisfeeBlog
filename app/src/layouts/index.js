import styles from './index.css';
import Nav from '@/components/Nav'
import Footer from '../components/Footer';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Nav/>
      {props.children}
      <Footer/>
    </div>
  );
}

export default BasicLayout;
