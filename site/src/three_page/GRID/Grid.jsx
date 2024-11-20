import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import  classes from './grids.module.css';

import { Grid, Pagination, Navigation } from 'swiper/modules';

import { gridtext } from './grid';
import { Link } from 'react-router-dom';

export default function Grids(){
  return(
    <>
    <section className={classes.swiper_container}>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 3,
        }}
        spaceBetween={30}
        // pagination={{
        //     clickable: true,
        //   }}
        modules={[Grid, Pagination, Navigation]}
        className={classes.swiper}
        // navigation = {true}
      >
        <SwiperSlide>
          <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.mainContainer}>
          <div className={classes.fish}>
            <img src={gridtext[0].img} alt="" />
            <Link to='/gridtwo'>{gridtext[0].title}</Link>
          </div>
          <div className={classes.date}>
            <p>{gridtext[0].date}</p>
            <button>{gridtext[0].button}</button>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    </>
  );
}
