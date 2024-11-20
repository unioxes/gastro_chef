import classes from './questions.module.css'
import React, { useState } from 'react'
import Modal from 'react-modal'

export default function Questions(){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () =>{
        setModalIsOpen(true);
    }
    const closeModal = () =>{
        setModalIsOpen(false);
    }
    const modalContent = (
        <div className={classes.modalContainer}>
            <div className={classes.topContainer}>
            <div className={classes.topButtons}>
                <button>Заполните все поля правильно</button>
                <button onClick={closeModal}>x</button>
            </div>
            <div className={classes.containerforinputs}>
            <div className={classes.topInputs}>
                <div>
                    <input type="text" placeholder='Иван' />
                    <input type="text" placeholder='78487487' />
                </div>
                <div>
                    <input className={classes.styledInput1} type="text" placeholder='Улица' />
                    <input className={classes.styledInput2} type="text" placeholder='Дом: 111' />
                    <input className={classes.styledInput3} type="text" placeholder='Этаж: 11' />
                </div>
                <div>
                    <input className={classes.styledInput4} type="text" placeholder='Квартира: 1' />
                    <input className={classes.styledInput5} type="text" placeholder='Парадное: 1' />
                    <input className={classes.styledInput6} type="text" placeholder='Домофон: 1' />
                </div>
            </div>
            <div className={classes.secondInputs}>
                <input type="text" placeholder='Время доставки' />
                <input type="text" placeholder='Способ оплаты' />
                <input type="text" placeholder='Откуда узнали о нас' />
                <input type="text" placeholder='Как с Вами связаться?' />
            </div>
            </div>
            </div>
            <div className={classes.bottomContainer}>
                <div>
                    <input type="radio" />
                    <p>Согласен с <span>условиями сотрудничества</span></p>
                </div>
                <div>
                    <button>Заказать</button>
                    <button>3 шт/78грн</button>
                </div>
            </div>
        </div>
    );
    return(
        <>
    <Modal className={classes.modal} ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={closeModal}>{modalContent}</Modal>
        <section className={classes.container_questions}>
            <div className={classes.left_container_q}>
                <div className={classes.title_q}>
                    <p>Оформить заказ</p>
                    <p>Обсудите все детали заказа по телефону или сами укажите все подробности онлайн</p>
                </div>
                <div className={classes.inputs}>
                    <p>Имя</p>
                    <input type="text" placeholder='Иван' />
                    <p>Номер телефона</p>
                    <input type="text" placeholder='349857948' />
                </div>
                <div className={classes.inputs_radio}>
                    <div>
                        <input className={classes.radio_q} type="radio" checked />
                        <p>Тест-день! Получить скидку -30%?</p>
                    </div>
                    <div>
                        <input className={classes.radio_q} type="radio" />
                        <p>Согласен с <span>условиями сотрудничества</span></p>
                    </div>
                    <div>
                        <button>Заказ по телефону</button>
                        <p>или</p>
                        <button onClick={openModal}>Онлайн заказ</button>
                    </div>
                </div>
            </div>
            <div className={classes.details}>
                <div className={classes.title_details}>
                    <p>Часто задаваемые вопросы</p>
                </div>
                <div className={classes.list_of_details}>
                    <details>
                        <summary>Как осуществляется доставка правильного питания?</summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ab ad veritatis est nemo illo, numquam explicabo debitis a non eos consequuntur sequi tempore nostrum maiores perspiciatis asperiores ea blanditiis, laudantium quibusdam minus harum repudiandae libero. Ab ad, rem, placeat ducimus dolor aliquid adipisci, laudantium ratione corporis cum inventore perspiciatis?</p>
                    </details>
                    <details>
                        <summary>Можно ли менять время доставки\место?</summary>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, laboriosam voluptatum? Nostrum itaque cupiditate hic unde, ducimus id tenetur ipsam blanditiis est ea cumque. Possimus praesentium tempore voluptas veniam deserunt impedit quisquam quas. Nam placeat debitis, eum cumque perspiciatis optio? Fuga unde animi vel voluptate! Explicabo temporibus nihil laborum assumenda?</p>
                    </details>
                    <details>
                        <summary>Как и в чем приезжает еда?</summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur tenetur consectetur maiores itaque quam officia rerum blanditiis asperiores expedita dolorem obcaecati temporibus illo laboriosam odio, magni hic commodi, maxime eius. Quam, similique minus quasi praesentium accusantium error ipsum odit tenetur sapiente, voluptatum ipsa enim vero neque, non qui velit. Suscipit.</p>
                    </details>
                    <details>
                        <summary>Когда Вы готовите?</summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet rem quo ea eum consequatur dignissimos corrupti veniam nam voluptatibus! Perferendis eligendi possimus nesciunt dignissimos quasi? Magnam sint eius consequuntur repellat non eos, doloremque illum quis officia minima incidunt expedita a, magni mollitia hic tenetur delectus neque dolore architecto fugit voluptatum.</p>
                    </details>
                    <details>
                        <summary>Какие продукты Вы используете?</summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet rem quo ea eum consequatur dignissimos corrupti veniam nam voluptatibus! Perferendis eligendi possimus nesciunt dignissimos quasi? Magnam sint eius consequuntur repellat non eos, doloremque illum quis officia minima incidunt expedita a, magni mollitia hic tenetur delectus neque dolore architecto fugit voluptatum.</p>
                    </details>
                    <details>
                        <summary>Я буду есть одно и то же?</summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet rem quo ea eum consequatur dignissimos corrupti veniam nam voluptatibus! Perferendis eligendi possimus nesciunt dignissimos quasi? Magnam sint eius consequuntur repellat non eos, doloremque illum quis officia minima incidunt expedita a, magni mollitia hic tenetur delectus neque dolore architecto fugit voluptatum.</p>
                    </details>
                    <details>
                        <summary>У меня аллергия и непереносимость определенных продуктов</summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet rem quo ea eum consequatur dignissimos corrupti veniam nam voluptatibus! Perferendis eligendi possimus nesciunt dignissimos quasi? Magnam sint eius consequuntur repellat non eos, doloremque illum quis officia minima incidunt expedita a, magni mollitia hic tenetur delectus neque dolore architecto fugit voluptatum.</p>
                    </details>
                    <details>
                        <summary>В какой очередности все есть?</summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet rem quo ea eum consequatur dignissimos corrupti veniam nam voluptatibus! Perferendis eligendi possimus nesciunt dignissimos quasi? Magnam sint eius consequuntur repellat non eos, doloremque illum quis officia minima incidunt expedita a, magni mollitia hic tenetur delectus neque dolore architecto fugit voluptatum.</p>
                    </details>
                    <details>
                        <summary>Можно ли замораживать программу?</summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet rem quo ea eum consequatur dignissimos corrupti veniam nam voluptatibus! Perferendis eligendi possimus nesciunt dignissimos quasi? Magnam sint eius consequuntur repellat non eos, doloremque illum quis officia minima incidunt expedita a, magni mollitia hic tenetur delectus neque dolore architecto fugit voluptatum.</p>
                    </details>
                </div>
            </div>
        </section>
        </>
    )
}