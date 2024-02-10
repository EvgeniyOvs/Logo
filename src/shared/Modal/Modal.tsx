
import styles from './modal.module.scss';
import {Ecolor, Text} from "../Text";
import {FormEvent} from "react";
import {Close} from "../Icons/Close.tsx";

export interface IModal   {
  open: boolean,
  onClose: () => void;

}
export function Modal({open, onClose} : IModal) {
    function handleSubmit(event: FormEvent){
        event.preventDefault();
    }
  return (
      <div className={open ? styles.modal+ " " + styles.active : styles.modal} >
        <div className={open ? styles.modal__content + " " + styles.contentActive : styles.modal__content} onClick={e=>e.stopPropagation()}>
            <div className={styles.modal__wrapper}>
                <button className={styles.btn} onClick={onClose}> <Close/></button>
                <div className={styles.modal__wrapper__left}>
                    <div className={styles.modal__wrapper__title}>
                        <Text As="h2" size={40} mobileSize={29} color={Ecolor.black} weight={700}>
                            Запишитесь на приём онлайн
                        </Text>
                    </div>
                    <div className={styles.modal__wrapper__descr}>
                        <Text  size={18} mobileSize={16} color={Ecolor.black} weight={700}>
                            Администратор свяжется с вами через WhatsApp в течение дня и уточнит детали
                        </Text>
                    </div>
                </div>
                <div className={styles.modal__wrapper__right}>
                    <form className={styles.modal__wrapper__form} onSubmit={handleSubmit}>
                        <input className={styles.modal__wrapper__form__input} type="text" placeholder={"ФИО"}/>
                        <input className={styles.modal__wrapper__form__input} type="tel" placeholder={"Номер телефона"}/>
                        <input className={styles.modal__wrapper__form__input +" " + styles.modal__wrapper__form__input__email } type="email" placeholder={"Электронная почта"}/>
                        <button type="submit" className={styles.modal__wrapper__form__button}>
                            <Text  size={16} color={Ecolor.white} weight={400}>
                                Записаться
                            </Text>
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
  );
}

