
import styles from './footer.module.scss';
import {Ecolor, Text} from "../Text";
import {Logo2} from "../Icons/Logo2";
import {Instagramm} from "../Icons/Instagramm";
import {Whatsapp2} from "../Icons/Whatsapp2";
import {Telegram} from "../Icons/Telegram";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__wrapper}>
          <a className={styles.footer__logo}>
            <Logo2/>
          </a>
          <ul className={styles.footer__list}>
            <li className={styles.footer__list__item}>
              <Text  size={18} mobileSize={15} color={Ecolor.white} weight={400}>
                О клинике
              </Text>
            </li>
            <li className={styles.footer__list__item}>
              <Text  size={18} mobileSize={15} color={Ecolor.white} weight={400}>
                Услуги
              </Text>
            </li>
            <li className={styles.footer__list__item}>
              <Text  size={18} mobileSize={15} color={Ecolor.white} weight={400}>
                Специалисты
              </Text>
            </li>
            <li className={styles.footer__list__item}>
              <Text  size={18} mobileSize={15} color={Ecolor.white} weight={400}>
                Цены
              </Text>
            </li>
            <li className={styles.footer__list__item}>
              <Text  size={18} mobileSize={15} color={Ecolor.white} weight={400}>
                Контакты
              </Text>
            </li>
          </ul>
          <ul className={styles.footer__social}>
            <li className={styles.footer__social__item}>
              <Instagramm/>
            </li>
            <li className={styles.footer__social__item}>
              <Whatsapp2/>
            </li>
            <li className={styles.footer__social__item}>
              <Telegram/>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
