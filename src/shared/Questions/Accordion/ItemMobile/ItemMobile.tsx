
import styles from './itemmobile.module.scss';
import {Ecolor, Text} from "../../../Text";
interface IItemsMobileProps{
  id: string,
  title: string,
  description: string,
  isTwoQuestions: boolean,
  secondTitle: string,
  secondDescription: string,
}
export function ItemMobile({id, title, description, isTwoQuestions, secondTitle, secondDescription} : IItemsMobileProps) {

  return (
      <li className={styles.item} id={id}>
          <div className={styles.item__header__wrapper}>
              <div className={styles.item__header__title}>
                  <Text  size={22} mobileSize={20} color={Ecolor.black} weight={700}>
                      {title}
                  </Text>
              </div>
              {isTwoQuestions ? (
                      <div className={styles.item__header__wrap}>
                          <div className={styles.item__header__wrap__first}>
                              <Text  size={18} mobileSize={16} color={Ecolor.black} weight={700}>
                                  {description}
                              </Text>
                          </div>
                          <div className={styles.item__header__wrap__second}>
                              <Text  size={18} mobileSize={16} color={Ecolor.black} weight={700}>
                                  {secondTitle}
                              </Text>
                              <span> </span>
                              <Text  size={18} mobileSize={16} color={Ecolor.black} weight={400}>
                                  {secondDescription}
                              </Text>
                          </div>

                      </div>
                  )
                  :(
                      <div className={styles.item__header__descr}>
                          <Text  size={18} mobileSize={16} color={Ecolor.black} weight={700}>
                              {description}
                          </Text>
                      </div>
                  )
              }
        </div>

      </li>
  );
}
