import React, { Component } from 'react'

// const { clickDiscont } = this.props

class FirstPage extends Component {

    // clickDiscont = () => {
    //     console.log('click')
    //     console.log(this.props)
    //     console.log(this.state)
    //     console.log(this.showModal)
    //     // this.setState.showModal = true;
    //     this.setState((state, props) => {
    //         return { showModal: true };
    //     });
    // }

    render() {
        console.log('firstPage');
        console.log(this.props)
        const { company } = this.props;
        const { clickSowModal } = this.props;
        return <div className="contacts">
            <div className="contacts__address" >
                <h5 className="contacts__title">Мы будем рады ответить на наши вопросы</h5>
                <div className="contacts__wrap">
                    <div className="contacts__dir">
                        <img className="contacts__dir-photo" src="img/photoeditorsdk-export.png" alt="Бухгалтер" />
                        <b className="contacts__dir-name">{company.director}</b>
                    </div>
                    <a className="contacts__phone" href={company.linkPhone}>{company.phone}</a>
                    <p className="contacts__mail">
                        <span className="contacts__wrap-item">e-mail:</span>
                        <span className="contacts__decoration-mail">{company.email}</span>
                    </p>
                    <p className="contacts__address-name">
                        <span className="contacts__wrap-item">адрес:</span>

                        <span className="contacts__box">
                            {company.adress}
                        </span>
                    </p>
                </div>
                <button className="contacts__btn button">Напишите нам</button>
                <button className="contacts__btn button" onClick={clickSowModal}>Скидка на услуги</button>
            </div>
            <div className="contacts__map-wrap">
                {/* <iframe className="contacts__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1194.2745150638568!2d85.95672025493067!3d51.96060140137738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42c4ff679be81007%3A0xf1b51e3142600be6!2z0YPQuy4g0KPQu9Cw0LPQsNGI0LXQstCwLCAxMywg0JPQvtGA0L3Qvi3QkNC70YLQsNC50YHQuiwg0KDQtdGB0L8uINCQ0LvRgtCw0LksIDY0OTAwMA!5e0!3m2!1sru!2sru!4v1564980439180!5m2!1sru!2sru"
                height="600" frameborder="0" style="border:0" allowfullscreen></iframe> */}
            </div>

        </div>

    }
}


export default FirstPage;