import classes from './one.module.css'
import logo from './one_IMG/logo.png'
import { Link } from 'react-router-dom'

export default function One(){
    return(
        <>  
            <nav>
                <div className={classes.logo}>
                    <img src={logo} alt="" />
                    <p>healthy ration</p>
                </div>
                <div className={classes.center_nav}>
                    <div className={classes.links}>
                        <div className={classes.main_links}>
                            <Link to={'/'}>Программы питания</Link>
                            <Link>Бизнес ланчи</Link>
                            <Link>Gastro Shop</Link>
                            <Link to={'/about'}>О нас</Link>
                            <Link to={'/blog'}>Блог</Link>
                        </div>
                    </div>
                    <div className={classes.languages_container}>
                            <button>RU</button>
                            <button>UA</button>
                            <button>EN</button>
                    </div>
                </div>
                <div className={classes.number_container}>
                    <p>+38(068)949-49-19</p>
                </div>
            </nav>
        </>
        
    )
}