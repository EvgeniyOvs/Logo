
import styles from './questions.module.scss';
import {Ecolor, Text} from "../Text";
import {Accordion} from "./Accordion";
import questions from "../../../db.json"
export function Questions() {

  return (
      <section className={styles.questions}>
        <div className={styles.container}>
            <div className={styles.questions__wrapper}>
                <div className={styles.questions__title}>
                    <Text As="h2" size={40} mobileSize={29} color={Ecolor.black} weight={700}>
                        Часто задаваемые вопросы
                    </Text>
                </div>
                <Accordion items={questions.questions}/>
            </div>
        </div>
      </section>
  );
}
