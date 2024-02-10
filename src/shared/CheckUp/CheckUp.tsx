import styles from './checkup.module.scss';
import slide from "../../../db.json"
import {Slider} from "./Slider";



export function CheckUp() {
  return (
      <section className={styles.checkUp}>
        <Slider items={slide.slide}/>
      </section>

  );
}
