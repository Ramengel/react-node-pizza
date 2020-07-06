import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store/store';
import Layout from './components/layout'
import { CurrentUserProvider } from './context/current-user-context'
import CurrentUserChecker from './components/current-user-cheker'


const App: any = () => {
  return (
    <CurrentUserChecker>
      <CurrentUserProvider>
        <Provider store={store}>
          <Router>
            <Layout>
              <Routes />
            </Layout>
          </Router>
        </Provider>
      </CurrentUserProvider>
    </CurrentUserChecker>
  );
}

export default App;
