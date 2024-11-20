import OneElem from '../../one_page/SWIPERSLIDE_ELEMENTS/ONE_ELEM/OneElem'
import classes from './gridtwo.module.css'
import oneimg from './gridtwo_IMG/11.png'
import twoimg from './gridtwo_IMG/22.png'
import threeimg from './gridtwo_IMG/33.png'
import { gridtexttwo } from './gridtwo.js'
import { gridtext } from '../GRID/grid'
import inst from '../../one_page/FOOTER/footer_IMG/inst.png'
import facebook from '../../one_page/FOOTER/footer_IMG/fbook.png'
import { Link } from 'react-router-dom'

function MainTextSection(props){
    return(
        <>
            <p className={classes.maintext}>{props.text1}</p>
            <p className={classes.maintext}>{props.text2}</p>
            <p className={classes.maintext}>{props.text3}</p>
            <p className={classes.maintext}>{props.text4}</p>
        </>
    )
}

export default function GridTwo(){
    return(
        <>
            <section className={classes.gridtwo_section}>
                <OneElem/>
                <div className={classes.main_container_grid}>
                    <img src={oneimg} alt="" />
                    <div className={classes.flex_container}>
                    <div className={classes.button_container}>
                        <button></button>
                        <p>Как поменять свои пищевые привычки?<span>29.05.2020</span></p>
                    </div>
                    <div className={classes.share_container}>
                        <p>Поделиться:</p>
                        <img src={inst} alt="" />
                        <img src={facebook} alt="" />
                    </div>
                    </div>
                </div>
            </section>
            <section className={classes.containertext}>
                <MainTextSection {...gridtexttwo[0]}/>
                <img src={twoimg} alt="" />
                <MainTextSection {...gridtexttwo[1]}/>
                <img src={threeimg} alt="" />
                <MainTextSection {...gridtexttwo[2]}/>
            </section>
            <section className={classes.bottomcontainer}>
                <div>
                    <button></button>
                    <p>Назад</p>
                </div>
                <button>Программы питания</button>
                <div>
                    <p>Поделиться:</p>
                    <img src={inst} alt="" />
                    <img src={facebook} alt="" />
                </div>
            </section>
            <section className={classes.flex_containers}>
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
            </section>
        </>
    )
}