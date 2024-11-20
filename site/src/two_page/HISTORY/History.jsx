import classes from './history.module.css'
import paket from './history_IMG/paket.png'
import comand from './history_IMG/comand.png'

export default function History(){
    return(
        <>
            <section className={classes.history}>
                <div className={classes.img_history}>
                    <img src={paket} alt="" />
                </div>
                <div className={classes.text_history}>
                    <p className={classes.styledtext1}>История GastroChef началась более 6-ти лет назад...</p>
                    <p className={classes.styledtext2}>Долгое время я наблюдал как людям не хватает времени 
                    для правильного и здорового питания, какое правильного, просто питания регулярного.</p>
                    <p className={classes.styledtext2}>Они могли позавтракать, в обед съесть что-то типа шаурмы или снэка, а вечером в силу голода наесться, что плохо сказывалось на их обмене веществ и естественно здоровье.</p>
                    <p className={classes.styledtext2}>Желание хоть как-то изменить ситуацию и помочь людям не давало мне покоя и я решил открыть доставку 
                    еды правильного питания.</p>
                    <p className={classes.styledtext2}>Я со своим 17-и летним опытом в спорте и проф. образованием, вместе с диетологом разработали рационы правильного питания с подсчетом калорий (КБЖУ).</p>
                    <p className={classes.styledtext1}>Знакомьтесь! Команда GastroChef!</p>
                </div>
            </section>
            <section className={classes.comand_container}>
                <img src={comand} alt="" />
            </section>
        </>
    )
}