import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Doctor from '../pages/Doctor'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Homepage}/>
      <Route path="/doctor" component={Doctor}/>
    </Switch>
  </BrowserRouter>
)

export default Routes;
