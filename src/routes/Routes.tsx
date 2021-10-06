import { Route, Switch } from 'react-router';
import { MovieInfoPage } from '../pages/MovieInfoPage';
import { MoviesPage } from '../pages/MoviesPage';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/movies" exact component={MoviesPage} />
      <Route path="/movies/:id" exact component={MovieInfoPage} />
    </Switch>
  );
};
