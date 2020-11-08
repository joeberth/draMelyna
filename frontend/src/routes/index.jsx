import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom'
import Homepage from '../pages/Homepage'

import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Route from './Route'

const Routes = () => (
  <BrowserRouter>
    <Switch>
     <Route path="/" exact component={Homepage}/>
     <Route path="/signin" component={Signin}/>
     <Route path="/register" component={Signup}/>  
     <Route path="/dashboard" component={Dashboard} isPrivate />
     <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  </BrowserRouter>
)

export default Routes;
