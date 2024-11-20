import classes from './easy.module.css'
import eda from './easy_IMG/eda.png'
import inst from '../../one_page/FOOTER/footer_IMG/inst.png'
import facebook from '../../one_page/FOOTER/footer_IMG/fbook.png'

export default function Easy(){
    return(
        <>
            <section className={classes.easy}>
                <div className={classes.texteasy}>
                    <p className={classes.styledtext1}>«GastroChef - легко для занятых»</p>
                    <p className={classes.styledtext2}>GastroChef - правильное питание с доставкой на дом, создано что бы облегчить жизнь, освободить время от готовки, от ненужных перекусов, фастфудов и дать возможность чувствовать себя легко и полным энергии, сил, для новых свершений и побед.</p>
                    <p className={classes.styledtext2}>Все продукты для приготовления правильного питания закупаются только с сертификатами, а рационы готовятся на современной и безопасной кухне ночью перед приездом к Вам!</p>
                    <p className={classes.styledtext3}>Друзья, если у Вас остались вопросы Вы с легкостью можете позвонить нам или написать мне лично в Инстаграм или Фейсбук.</p>
                    <p className={classes.styledtext1}>С уважением, Кобылинский Кирилл.</p>
                    <div className={classes.socials_container}>
                        <img src={inst} alt="" />
                        <img src={facebook} alt="" />
                        <p>- Я в социальных сетях</p>
                    </div>
                </div>
                <div className={classes.img_easy}>
                    <img src={eda} alt="" />
                </div>
            </section>
        </>
    )
}