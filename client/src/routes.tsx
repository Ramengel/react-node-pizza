import React, { useContext} from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Basket from './pages/basket';
import History from './pages/history';
import Auth from './pages/auth';
import { CurrentUserContext } from './context/current-user-context'

const Routes: React.FC = () => {
    const [currentUserContext] = useContext<any>(CurrentUserContext)

    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/basket">
                <Basket />
            </Route>
            {!currentUserContext.isLoggedIn && (
                <>
                <Route path="/login">
                    <Auth />
                </Route>
                <Route path="/registration">
                    <Auth />
                </Route>
                </>
            )}
            {currentUserContext.isLoggedIn && (
                <>
                    <Route path="/history">
                        <History />
                    </Route>
                </>
            )}
            <Redirect to="/" />
      </Switch>
    )
}

export default Routes;