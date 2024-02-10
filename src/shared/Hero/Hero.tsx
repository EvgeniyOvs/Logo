
import styles from './hero.module.scss';
import {Ecolor, Text} from "../Text";

import hero from '../../img/hero.png'
import heroMobile from '../../img/hero__mobile.png'
export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__wrapper__title}>
          <Text As="h2" size={40} mobileSize={29} color={Ecolor.black} weight={700}>
            Многопрофильная клиника для детей
            и взрослых
          </Text>
        </div>
        <div className={styles.hero__wrapper__descr}>
          <Text  size={18} mobileSize={16} color={Ecolor.black} weight={700}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Text>
        </div>
      </div>
      <div className={styles.hero__img}>
        <img className={styles.hero__img__dekstop} src={hero} alt="Приемная" />
        <img className={styles.hero__img__mobile} src={heroMobile} alt="Приемная" />
      </div>

    </section>
  );
}
