import React from 'react';
import { Route, Switch } from 'react-router-dom';

import New from './New';
import Destroy from './Destroy';
import Form from './Form';
import Index from './index';
import Edit from './Edit';


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route exact path="/edit/:id" component={Edit}/>
      <Route exact path="/new" component={New}/>
      <Route exact path="/form" component={Form}/>
      <Route exact path="/destroy/:id" component={Destroy}/>
    </Switch>
  );
}
 
export default Routes;