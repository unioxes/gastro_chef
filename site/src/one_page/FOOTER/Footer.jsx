import logo from '../ELEMENTS_HEADER/ONE/one_IMG/logo.png'
import inst from './footer_IMG/inst.png'
import facebook from './footer_IMG/fbook.png'
import wup from './footer_IMG/wup.png'
import tg from './footer_IMG/tg.png'
import classes from './footer.module.css'

export default function Footer(){
    return(
        <>
        <footer>
            <div className={classes.footer_container}>
                <div className={classes.links_footer}>
                    <ul>
                        <li>Программы питания</li>
                        <li>О нас</li>
                        <li>Бизнес-ланчи</li>
                        <li>Gastro Shop</li>
                        <li>Блог</li>
                    </ul>
                </div>
                <div className={classes.logo_container}>
                    <img src={logo} alt="" />
                    <p>сервис здорового питания</p>
                </div>
                <div className={classes.faq}>
                    <a href="">Условия сотрудничества</a>
                    <a href="">FAQ</a>
                    <div>
                        <img src={inst} alt="" />
                        <img src={facebook} alt="" />
                        <img src={wup} alt="" />
                        <img src={tg} alt="" />
                    </div>
                    <p>+38(068)949-49-19</p>
                </div>
            </div>
        </footer>
        </>
    )
}