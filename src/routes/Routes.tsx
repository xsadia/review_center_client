import { Route, Switch } from 'react-router';
import { MoviePages } from '../pages/MoviePage';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/movies" exact component={MoviePages} />
    </Switch>
  );
};
