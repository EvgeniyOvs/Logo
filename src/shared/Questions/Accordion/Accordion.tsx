
import styles from './accordion.module.scss';
import {Item} from "./Item";
import {useState} from "react";
import {ItemMobile} from "./ItemMobile";
type item = {
  id: string,
  title: string,
  description: string,
  isTwoQuestions: boolean,
  secondTitle: string,
  secondDescription: string,


}
interface MyFaqList {
  items: Array<item>,
}



export function Accordion({items}: MyFaqList) {
  const [openId, setId] = useState('')

  const renderItemsDekstop = () =>{
    return  items.map((item , index)=>(
        <Item
            key={index}
            id={item.id}
            title={item.title}
            description={item.description}
            isOpen={item.id===openId}
            onClick={()=> (item.id === openId ? setId('') : setId(item.id))}
            isTwoQuestions={item.isTwoQuestions}
            secondTitle={item.secondTitle}
            secondDescription={item.secondDescription}
        />
    ))
  }
  const renderItemsMobile = () =>{
    return  items.map((item , index)=>(
    <ItemMobile
        key={index}
        id={item.id}
        title={item.title}
        description={item.description}
        isTwoQuestions={item.isTwoQuestions}
        secondTitle={item.secondTitle}
        secondDescription={item.secondDescription}
    />

    ))
  }
  return (
    <ul className={styles.accordion}>
      <div className={styles.accordionDekstop}>
        {
          renderItemsDekstop()
        }
      </div>
      <div className={styles.accordionMobile}>
        {
          renderItemsMobile()
        }
      </div>
    </ul>
  );
}
