import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout.jsx';
import Login from '../containers/Login.jsx';
import '../styles/global.css';
import RecoveryPassword from '../containers/RecoveryPassword.jsx';


const App = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Layout>
               <Route exact path="/" components={Home} />
               <Route exact path="/login" component={Login} />
               <Route exact path="recovery-password" component={RecoveryPassword}/>
               <Route componnets={NotFound}/>
            </Layout>
         </Switch>
         <Layout>
            <Login/>
            <RecoveryPassword/>
         </Layout>
      </BrowserRouter>
  
   );
}

export default App;