import OneElem from "../../one_page/SWIPERSLIDE_ELEMENTS/ONE_ELEM/OneElem"
import classes from './about.module.css'
import { textslider } from "../../one_page/SWIPERSLIDE_ELEMENTS"
import History from "../HISTORY/History"
import Easy from "../EASY/Easy"

function About(){
    return(
        <>
        <section className={classes.container}>
            <OneElem/>
            <div className={classes.main_container}>
            <div className={classes.center_container}>
                    <p>Здравствуйте! Меня зовут <span>Кобылинский Кирилл</span>, и я являюсь <span>основателем GastroChef.</span></p>
                    <p>Я Мастер Спорта Украины по тяжёлой атлетике, а так же состоял в составе сборной Украины.</p>
                    <p>У меня высшее образование национального университета физического воспитания и спорта Украины (НФВСУ), а так же в прошлом я профессиональный фитнес тренер!</p>
                    <p>И я хочу Вам рассказать побольше о GastroChef.</p>
            </div>
            <div className={classes.image_container}>
                <div>
                    <img src={textslider[2].image} alt="" />
                </div>
            </div>
            </div>
        </section>
        <History/>
        <Easy/>
        </>
    )
}

export default About