
import styles from './layout.module.scss';
import {Header} from "../Header";
import {Hero} from "../Hero";
import {Footer} from "../Footer";
import {Questions} from "../Questions";
import {CheckUp} from "../CheckUp";



export function Layout() {

  return (
    <div className={styles.layout}>
        <Header/>
      <main>
        <Hero/>
        <Questions/>
        <CheckUp/>
      </main>
        <Footer/>
    </div>
  );
}
