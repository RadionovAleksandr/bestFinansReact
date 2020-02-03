import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './login';
import { clickSowModal, closeModal } from '../actions/Actions'
import FirstPage from './firstPage';

class Main extends Component {

    clickDiscont = () => {
        console.log('click')
        console.log(this.props)
        console.log(this.state)
        console.log(this.showModal)
        // this.setState.showModal = true;
        this.setState((state, props) => {
            return { showModal: true };
        });
    }


    render() {
        return (
            <div>
                <FirstPage
                    clickSowModal={this.props.clickSowModal}
                    company={this.props.company}
                /> ,
            <Login
                    showModal={this.props.showModal}
                    isLogin={this.props.isLogin}
                    closeModal={this.props.closeModal}
                    handleLogin={this.props.handleLogin}
                />
            </div>
        )
    }
}

// приклеиваем данные из store
const mapStateToProps = store => {
    console.log('main store')
    console.log(store) // посмотрим, что же у нас в store?
    return {
        user: store.user,
        company: store.company,
        showModal: store.showModal,
        isLogin: store.isLogin
    }
}

const mapDispatchToProps = dispatch => ({
    clickSowModal: () => dispatch(clickSowModal()),
    closeModal: () => dispatch(closeModal())
})


export default connect(mapStateToProps, mapDispatchToProps)(Main)