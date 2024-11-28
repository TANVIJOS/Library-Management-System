import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // Redux store

// Importing components/pages
import HomePage from './pages/HomePage';
import UserLogin from './components/UserLogin';
import AdminHome from './components/AdminHome';
import UserHome from './components/UserHome';
import MaintenancePage from './components/MaintenancePage';
import Transactions from './components/Transactions';
import Reports from './components/Reports';
import LogoutPage from './components/LogoutPage';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* Routing */}
          <Switch>
            {/* Route for User Login */}
            <Route exact path="/login" component={UserLogin} />
            
            {/* Route for HomePage (redirects to respective home pages after login) */}
            <Route exact path="/" component={HomePage} />
            
            {/* Routes for Admin Home, User Home */}
            <Route exact path="/admin-home" component={AdminHome} />
            <Route exact path="/user-home" component={UserHome} />
            
            {/* Routes for other pages */}
            <Route exact path="/maintenance" component={MaintenancePage} />
            <Route exact path="/transactions" component={Transactions} />
            <Route exact path="/reports" component={Reports} />
            
            {/* Route for Logout Page */}
            <Route exact path="/logout" component={LogoutPage} />

            {/* Route for Confirmation Page */}
            <Route exact path="/confirmation" component={ConfirmationPage} />
            
            {/* Add more routes here if needed */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
