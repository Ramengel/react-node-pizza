import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import BasketIcon from '../basket-icon';
import UseAuth from '../../hooks/use-auth'
import { CurrentUserContext } from '../../context/current-user-context'
import './navbar.css';

const NavBar = () => {
    const history = useHistory();
    const { logout } = UseAuth();
    const [currentUserState] = useContext<any>(CurrentUserContext);

    const logoutHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        logout();

        history.push("/");
    };


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <NavLink to="/" exact className="navbar-brand  mr-auto">
                Pizzaaa
            </NavLink>
            {!currentUserState.isLoading && (
                <div className="" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" exact className="nav-link">
                                Меню
                            </NavLink>
                        </li>
                        {!currentUserState.isLoggedIn && (
                            <>
                            <li className="nav-item nav-item-b">
                                <NavLink to="/basket" exact className="nav-link">
                                    <BasketIcon />
                                </NavLink>
                            </li>
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link">
                                        Войти
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/registration" exact className="nav-link">
                                        Зарегестрироваться
                                    </NavLink>
                                </li>
                            </>
                        )}
                        {currentUserState.isLoggedIn && (
                            <>
                                <li className="nav-item nav-item-b">
                                    <NavLink to="/basket" exact className="nav-link">
                                        <BasketIcon />
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/history" exact className="nav-link">
                                        История
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link nav-link-button" onClick={logoutHandler}>
                                        Выйти
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default NavBar;