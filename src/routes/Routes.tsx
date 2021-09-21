import { Route, Switch } from "react-router";
import { MoviePages } from "../pages/MoviePages";

export const Routes = () => {
    return (
        <Switch>
            <Route path="/movies" exact component={MoviePages} />
        </Switch>
    );
};