import  {useRef} from 'react';
import styles from './item.module.scss';
import {Ecolor, Text} from "../../../Text";
interface IItemsProps{
  id: string,
  title: string,
  description: string,
  onClick: ()=> void,
  isOpen: boolean,
  isTwoQuestions: boolean,
  secondTitle: string,
  secondDescription: string,
}
export function Item({id, title, description, onClick, isOpen, isTwoQuestions, secondTitle, secondDescription} : IItemsProps) {

  const itemRef = useRef<HTMLDivElement|null>(null)


  return (
      <li className={styles.item} id={id}>
        <button className={styles.item__header} onClick={()=> onClick()}>
          <div className={styles.item__header__title}>
            <Text  size={22} mobileSize={18} color={Ecolor.black} weight={700}>
              {title}
            </Text>
          </div>
            <div className={ isOpen ? styles.circlePlus + " " + styles.opened : styles.circlePlus + " " + styles.closed}>
                <div className={styles.circle}>
                    <div className={styles.horizontal}></div>
                    <div className={styles.vertical}></div>
                </div>
            </div>
        </button>
        <div
            className={styles.item__collapse}
            style={ isOpen ?{ height: itemRef.current?.scrollHeight }:{ height:"0px" }}
        >
            {isTwoQuestions ? (
                    <div className={styles.item__header__wrapper} ref={itemRef} >
                        <div className={styles.item__header__wrapper__first}>
                            <Text  size={18} mobileSize={14} color={Ecolor.black} weight={700}>
                                {description}
                            </Text>
                        </div>
                        <div className={styles.item__header__wrapper__second}>
                            <Text  size={18} mobileSize={14} color={Ecolor.black} weight={700}>
                                {secondTitle}
                            </Text>
                            <Text  size={18} mobileSize={14} color={Ecolor.black} weight={400}>
                                {secondDescription}
                            </Text>
                        </div>

                    </div>
            )
                :(
                    <div className={styles.item__header__descr} ref={itemRef} >
                        <Text  size={18} mobileSize={14} color={Ecolor.black} weight={700}>
                            {description}
                        </Text>
                    </div>
            )
            }


        </div>

      </li>
  );
}
