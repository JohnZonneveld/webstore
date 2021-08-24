import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo1.svg'
import { ButtonContainer } from './Button'
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="home" className="change-my-color"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="navbar-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                    <span className="me-2"><i className="fas fa-cart-plus" /></span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`