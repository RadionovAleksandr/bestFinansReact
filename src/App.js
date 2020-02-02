import React, { Component } from 'react';
import { connect } from 'react-redux'
// import logo from './logo.svg';
// import './App.css';
import Header from './components/header';
import Main from './components/main';


class App extends Component {
  render() {
    console.log('this.state')
    console.log(this.state)
    console.log('this.props')
    console.log(this.props)

    return <div className="app">
      <Header />,
      <Main />
    </div>
  }
}

// приклеиваем данные из store
// const mapStateToProps = store => {
//   console.log(store) // посмотрим, что же у нас в store?
//   return {
//     user: store.user,
//     company: store.company,
//   }
// }
// в наш компонент App, с помощью connect(mapStateToProps)
export default connect()(App)