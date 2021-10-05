import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import Login from './components/SignIn';


const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
