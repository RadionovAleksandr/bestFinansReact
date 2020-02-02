import React, { Component } from 'react'

class Header extends Component {
    render() {

        return <header className="page-header" >
            <div className="page-header__logo" >
                <div className="logo__letter-wrap" >
                    <div className="logo__letter logo__letter--B" > Б </div>
                    <div className="logo__letter logo__letter--E" > е </div>
                    <div className="logo__letter logo__letter--S" > с </div>
                    <div className="logo__letter logo__letter--T" > т </div>
                    <div className="logo__letter logo__letter--F" > Ф </div>
                    <div className="logo__letter logo__letter--I" > и </div>
                    <div className="logo__letter logo__letter--N" > н </div>
                    <div className="logo__letter logo__letter--A" > а </div>
                    <div className="logo__letter logo__letter--N2" > н </div>
                    <div className="logo__letter logo__letter--S2" > с </div>
                </div >
            </div>

            <a className="page-header__contact"
                href="tel:+7 999 999 4545" > 8 999 999 4545 </a>

        </header>
    }
}

export default Header;