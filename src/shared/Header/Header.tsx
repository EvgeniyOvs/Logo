
import styles from './header.module.scss';
import {Ecolor, Text} from "../Text";
import {Logo} from "../Icons/Logo";
import {Place} from "../Icons/Place";
import {Whatsapp1} from "../Icons/Whatsapp1";
import {useState} from "react";
import {Modal} from "../Modal";




export function Header() {
    const [isMenuOpen, toggleMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }
    const clickHandler = () => {
        toggleMenuMode();
    };
  return (
      <header className={styles.header}>
          <div className={styles.container}>
          <span className={styles.visuallyHidden}>
          <Text As="h1" size={36} color={Ecolor.black} weight={700}>
            Клиника Logo
          </Text>
            </span>
          <div className={styles.header__top}>
              <button onClick={clickHandler} className={isMenuOpen ? styles.burger + " " + styles.burger__active : styles.burger}>
                  <span className={styles.burger__line}></span>
              </button>
              <div className={styles.header__top__left}>
                  <div className={styles.header__top__left__logo}>
                      <Logo/>
                  </div>
                  <div className={styles.header__top__left__wrapper}>
                      <div className={styles.header__top__left__wrapper__place}>
                          <Place/>
                      </div>
                      <div className={styles.header__top__left__wrapper__adress}>
                          <div className={styles.header__top__left__wrapper__adress__city}>
                              <Text size={14} color={Ecolor.black} weight={400}>
                                  Ростов-на-Дону
                              </Text>
                          </div>
                          <div className={styles.header__top__left__wrapper__adress__street}>
                              <Text size={14} color={Ecolor.grey} weight={400}>
                                  ул. Ленина, 2Б
                              </Text>
                          </div>
                      </div>
                  </div>
              </div>

              <div className={styles.header__top__right}>
                <div className={styles.header__top__right__contact}>
                    <div className={styles.header__top__right__contact__icon}>
                        <Whatsapp1/>
                    </div>
                    <div className={styles.header__top__right__contact__phone}>
                        <Text size={18} mobileSize={19} color={Ecolor.black} weight={400}>
                            +7(863) 000 00 00
                        </Text>
                        <Text size={16} mobileSize={15} color={Ecolor.black} weight={400}>
                            Ростов-на-Дону
                        </Text>
                    </div>
                    <div className={styles.header__top__right__btn}>
                        <button onClick={()=> setIsOpen(true)} className={styles.btnFill}>
                            <Text size={15} color={Ecolor.whiteFF} weight={400}>
                                Записаться на прием
                            </Text>
                        </button>

                    </div>
                </div>
              </div>
          </div>

          </div>
          <div className={styles.header__bottom}>
              <div className={styles.container}>
                  <nav className={isMenuOpen ? styles.nav + " " + styles.nav__active : styles.nav}>
                      <div className={styles.nav__container}>
                          <ul className={styles.nav__list}>
                              <li className={styles.nav__list__item}>
                                  <Text size={18} color={Ecolor.whiteFF} weight={400}>
                                      О клинике
                                  </Text>
                              </li>
                              <li className={styles.nav__list__item}>
                                  <Text size={18} color={Ecolor.whiteFF} weight={400}>
                                      Услуги
                                  </Text>
                              </li>
                              <li className={styles.nav__list__item}>
                                  <Text size={18} color={Ecolor.whiteFF} weight={400}>
                                      Специалисты
                                  </Text>
                              </li>
                              <li className={styles.nav__list__item}>
                                  <Text size={18} color={Ecolor.whiteFF} weight={400}>
                                      Цены
                                  </Text>
                              </li>
                              <li className={styles.nav__list__item}>
                                  <Text size={18} color={Ecolor.whiteFF} weight={400}>
                                      Контакты
                                  </Text>
                              </li>
                          </ul>
                          <div className={styles.nav__btn}>
                              <button onClick={()=> setIsOpen(true)}  className={styles.btnStroke}>
                                  <Text size={14} mobileSize={15} color={Ecolor.green} weight={700}>
                                      Записаться на прием
                                  </Text>
                              </button>
                          </div>
                      </div>

                  </nav>
              </div>

          </div>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}/>
      </header>
  );
}
