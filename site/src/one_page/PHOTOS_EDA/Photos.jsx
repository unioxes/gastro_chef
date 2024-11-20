import AutoSwiper from '../AUTOSWIPER/AutoSwiper'
import classes from './photos.module.css'

export default function Photos(){
    return(
        <>
            <section className={classes.section_photos}>
                <div className={classes.title_photos}>
                    <p>Фото блюд</p>
                </div>
                <AutoSwiper/>
            </section>
        </>
    )
}