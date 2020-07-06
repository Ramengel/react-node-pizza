import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useFetch from "../../hooks/hook-fetch";
import { CurrentUserContext } from '../../context/current-user-context'
import './auth.css';
import { connect } from 'react-redux';
import { addNotify } from '../../actions'

const Auth = ({addNotify}: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isLogin = useLocation().pathname === "/login";
    const pageTitle = isLogin ? "Войти" : "Регистрация";
    const descriptionLink = isLogin ? "/registration" : "/login";
    const descriptionText = isLogin ? "Зарегестрироваться?" : "Уже есть аккаунт?";
    const apiUrl = isLogin ? "/api/auth/login" : "/api/auth/registration";
    const { isLoading, response, doFetch, error, clearError } = useFetch();
    const [, setCurrentUserState] = useContext<any>(CurrentUserContext)
    const history = useHistory();

    useEffect(() => {
        if (!response) return;

        localStorage.setItem('token', response.user.token)
        
        setCurrentUserState((state: any) => ({
            ...state,
            isLoggedIn: true,
            isLoading: false,
            currentUser: response.user
        }))
        addNotify('Logged successfully', 'success');

        history.push("/");
    }, [response, setCurrentUserState, history ])

    useEffect(() => {
        if (!error) return;
        addNotify(error, 'danger');
        clearError()
    }, [error])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const user = isLogin ? { email, password } : { email, password };

        doFetch(apiUrl, {
            method: "post",
            data: user
        });
    };

    return (
        <div className="auth-block">
            <h1 className="text-center">{pageTitle}</h1>
            <p className="text-center is-login">
                <Link to={descriptionLink}>{descriptionText}</Link>
            </p>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Email</span>
                        </div>
                        <input
                            placeholder="email"
                            id="email"
                            type="email"
                            name="email"
                            className="form-control"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Password</span>
                        </div>
                        <input
                            placeholder="зassword"
                            id="password"
                            type="password"
                            name="password"
                            className="form-control"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        disabled={isLoading}
                        className="btn btn-primary"
                        type="submit"
                    >
                        {pageTitle}
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = {
    addNotify
}

export default connect(null, mapDispatchToProps)(Auth);