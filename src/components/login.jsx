import React, { Component } from 'react';
// import { connect } from 'react-redux';

class login extends Component {

    render() {
        console.log('render login')
        console.log(this.state)
        console.log(this.props)
        const showModal = this.props;
        const isLogin = this.props;

        if (!showModal) {
            if (isLogin) {
                return <div className="modal-window">
                    <h2 className="modal-winow__title">Напишите нам</h2>
                    <button className="modal-window__close-btn"></button>
                    <form className="modal-window__login-form">
                        <fieldset className="modal-window__user-name">
                            <legend><label className="" htmlFor="user-login"><b>Ваше имя:</b></label></legend>
                            <input className="modal-window__input_user" id="user-login" type="text" name="login" placeholder="Представтесь, пожалуйста" />
                        </fieldset>
                        <fieldset className="modal-window__user-mail">
                            <legend><label className="" htmlFor="user-email"><b>Ваш e-mail:</b></label></legend>
                            <input className="modal-window__input_email" id="user-email" type="email" name="email" placeholder="Для отправки ответа" />
                        </fieldset>
                        <fieldset className="modal-window__text-area">
                            <legend><label htmlFor="textarea"><b>Текст письма:</b></label></legend>
                            <textarea className="text-letter" name="textarea" id="textarea" cols="30" rows="10" placeholder="В свободной форме"></textarea>
                        </fieldset>
                        <button className="modal-window__btn button" onClick={this.props.handleLogin}>Отправить</button>
                    </form>
                </div>

            } else {
                return <h1>Скидка 5%</h1>
            }


        } else {
            return null
        }

    }
}

// const mapStateToProps = store => {
//     console.log('login store')
//     console.log(store) // посмотрим, что же у нас в store?
//     return {
//         showModal: false,
//         isLogin: false
//     }
// }

// export default connect(mapStateToProps)(login)
export default login
