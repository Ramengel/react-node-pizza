import { useState, useEffect, useContext, useCallback } from "react";

import useFetch from "../hook-fetch";
import { CurrentUserContext } from "../../context/current-user-context";
const UseAuth = () => {
  const [, setCurrentUserState] = useContext<any>(CurrentUserContext);
  const { response, error, doFetch, clearError } = useFetch();
  const [ready, setReady] = useState(false);

  const [isAuth, setIsAuth] = useState(false);

  const logout = useCallback(() => {
    setCurrentUserState({
        isLoading: false,
        isLoggedIn: null,
        currentUser: null
    })

    localStorage.removeItem('token');
  }, [setCurrentUserState]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setCurrentUserState((state: any) => ({
        ...state,
        isLoading: false,
        isLoggedIn: false
      }));

      setReady(true);
      return;
    }

    doFetch('/api/auth/check');
    setCurrentUserState((state: any) => ({
      ...state,
      isLoading: true
    }));
  }, [doFetch, setCurrentUserState]);

  useEffect(() => {
    if (!error) {
      return;
    }


    setCurrentUserState((state: any) => ({
      ...state,
      isLoggedIn: false,
      isLoading: false,
      currentUser: null
    }));
    setReady(true);
    localStorage.removeItem('token');
    clearError();
  }, [error, clearError, setCurrentUserState]);

  useEffect(() => {
    if (!response) {
      return;
    }

    setCurrentUserState((state: any) => ({
      ...state,
      isLoggedIn: true,
      isLoading: false,
      currentUser: response.user
    }));
    setReady(true);
    setIsAuth(true);
  }, [response, setCurrentUserState]);

  return { ready, isAuth, logout };
};

export default UseAuth;