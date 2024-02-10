import 'swiper/css';

import styles from './slider.module.scss';
import "../../../color.module.scss";
import {Ecolor, Text} from "../../Text";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import {LeftArrow} from "../../Icons/LeftArrow.tsx";
import {RightArrow} from "../../Icons/RightArrow.tsx";
import {Modal} from "../../Modal";
import {useState} from "react";



// Import Swiper styles
type slides = {
    id: string,
    title: string,
    gender: string,
    imageUrl: string,
    analyzes: Array<string>,
    price: string,
    oldPrice: string,

}
interface MySlider {
    items: Array<slides>,
}
export function Slider({items}: MySlider) {
    const [isOpen, setIsOpen] = useState(false);
  return (
      <div className={styles.container}>
          <Swiper className={styles.mySwiper}
                  spaceBetween={50}
                  slidesPerView={1}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper: any) => console.log(swiper)}
                  navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',

                  }}
                  pagination={{ el: '.swiper-pagination', clickable: true ,
                      type: 'fraction'}}
                  modules={[Pagination, Navigation]}

          >
              {items.map((slide, index)=>(
                  <SwiperSlide key={index}>
                      <div className={styles.slide}>
                          <div className={styles.slide__wrapper}>
                              <div className={styles.slide__title}>
                                  <Text  size={38} mobileSize={26} color={Ecolor.black} weight={700}>
                                      {slide.title}
                                  </Text>
                              </div>
                              <div className={styles.slide__gender}>
                                  <Text  size={22} mobileSize={14} color={Ecolor.black} weight={700}>
                                      {slide.gender}
                                  </Text>
                              </div>
                              <ul className={styles.slide__list}>
                                  {slide.analyzes.map((item, index)=>(
                                      <li key={index} className={styles.slide__list__item}>
                                          <Text  size={16} mobileSize={16} color={Ecolor.black} weight={400}>
                                              {item}
                                          </Text>
                                      </li>
                                  ))}
                              </ul>
                              <div className={styles.slide__count} >
                                  <div className={styles.slide__count__summ}>
                                      <Text  size={22} mobileSize={20} color={Ecolor.black} weight={400}>
                                          Всего
                                      </Text>
                                  </div>

                                  <div className={styles.slide__count__price}>
                                      <Text  size={22} mobileSize={18} color={Ecolor.black} weight={400}>
                                          {slide.price}
                                      </Text>
                                  </div>
                                  <div className={styles.slide__count__oldPrice}>
                                      <Text  size={16} mobileSize={14} color={Ecolor.grey} weight={400}>
                                          {slide.oldPrice}
                                      </Text>
                                  </div>
                              </div>
                              <div className={styles.slide__btns}>
                                  <button onClick={()=> setIsOpen(true)} className={styles.slide__btns__fill}>
                                      <Text size={14} mobileSize={18} color={Ecolor.whiteFF} weight={400}>
                                          Записаться
                                      </Text>

                                  </button>
                                  <button className={styles.slide__btns__stroke}>
                                      <Text size={14} mobileSize={18} color={Ecolor.green0D} weight={400}>
                                          Подробнее
                                      </Text>
                                  </button>
                              </div>
                          </div>
                          <div className={styles.slide__img}>
                              <img src={slide.imageUrl} alt="кабинет"/>
                          </div>
                      </div>
                  </SwiperSlide>
              ))}
              <div className={styles.sliderControler}>
                  <div className="swiper-button-prev slider-arrow">
                      <LeftArrow />
                  </div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next slider-arrow">
                      <RightArrow/>
                  </div>
              </div>

          </Swiper>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}/>
      </div>

  );
}
