import classes from './autoswiper.module.css'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import food1 from './autoswiper_IMG/food1.png'
import food2 from './autoswiper_IMG/food2.png'
import food3 from './autoswiper_IMG/food3.png'
import food4 from './autoswiper_IMG/food4.png'

export default function AutoSwiper(){
    return(
        <>
            <Swiper
                spaceBetween={100}
                centeredSlides={true}
                slidesPerView={5}
                loop={true}
                autoplay={{
                    disableOnInteraction: true,
                    delay: 0,
                }}
                wrapperClass={classes.WrapperSlide}
                speed={5000}
                modules={[Autoplay]}
                className={classes.mySwiper}
            >
                <SwiperSlide><img className={classes.food_image} src={food1} alt="" /></SwiperSlide>
                <SwiperSlide><img className={classes.food_image} src={food2} alt="" /></SwiperSlide>
                <SwiperSlide><img className={classes.food_image} src={food3} alt="" /></SwiperSlide>
                <SwiperSlide><img className={classes.food_image} src={food4} alt="" /></SwiperSlide>
                <SwiperSlide><img className={classes.food_image} src={food3} alt="" /></SwiperSlide>
                <SwiperSlide><img className={classes.food_image} src={food1} alt="" /></SwiperSlide>
                <SwiperSlide><img className={classes.food_image} src={food4} alt="" /></SwiperSlide>
                <SwiperSlide><img className={classes.food_image} src={food2} alt="" /></SwiperSlide>
                <SwiperSlide><img className={classes.food_image} src={food1} alt="" /></SwiperSlide>
            </Swiper>
        </>
    )
}