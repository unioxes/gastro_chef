import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../SWIPER/swiper.css'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { textslider } from '../SWIPERSLIDE_ELEMENTS/index.js';
import classes from '../SWIPERSLIDE_ELEMENTS/TWO_ELEM/twoelem.module.css'
export default function SwiperSlider(){
    
    return(
        <>
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
           <SwiperSlide>
           <div className={classes.center_container}>
                <div className={classes.top_text}>
                    <p>{textslider[0].text_top}</p>
                    <span>{textslider[0].text_green}</span>
                    <p>{textslider[0].text_bot1}</p>
                    <p>{textslider[0].text_bot}</p>
                </div>
                <div className={classes.bot_text}>
                    <button>{textslider[0].button}</button>
                    <p>{textslider[0].sell}</p>
                </div>
            </div>
            <div className={classes.image_container}>
                <div>
                    <img src={textslider[0].image} alt="" />
                </div>
            </div>
           </SwiperSlide>
            <SwiperSlide> 
            <div className={classes.center_container}>
                <div className={classes.top_text}>
                    <p>{textslider[1].text_top}</p>
                    <span>{textslider[1].text_green}</span>
                    <p>{textslider[1].text_bot}</p>
                </div>
                <div className={classes.bot_text}>
                    <button>{textslider[1].button}</button>
                    <p>{textslider[1].sell}</p>
                </div>
            </div>
            <div className={classes.image_container}>
                <div>
                    <img src={textslider[1].image} alt="" />
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide> 
            <div className={classes.center_container}>
                <div className={classes.top_text}>
                    <p>{textslider[2].text_top}</p>
                    <span>{textslider[2].text_green}</span>
                    <p>{textslider[2].text_bot}</p>
                </div>
                <div className={classes.bot_text}>
                    <button>{textslider[2].button}</button>
                    <p>{textslider[2].sell}</p>
                </div>
            </div>
            <div className={classes.image_container}>
                <div>
                    <img src={textslider[2].image} alt="" />
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={classes.center_container}>
                <div className={classes.top_text}>
                    <p>{textslider[3].text_top}</p>
                    <span>{textslider[3].text_green}</span>
                    <p>{textslider[3].text_bot}</p>
                </div>
                <div className={classes.bot_text}>
                    <button>{textslider[3].button}</button>
                    <p>{textslider[3].sell}</p>
                </div>
            </div>
            <div className={classes.image_container}>
                <div>
                    <img src={textslider[3].image} alt="" />
                </div>
            </div>
            </SwiperSlide>
        </Swiper>
        </>
    )
}