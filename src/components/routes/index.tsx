
import ROUTES from "@config/routes";
import About from "@pages/about";
import Contact from "@pages/contact";
import Home from "@pages/home";
import Services from "@pages/services";

import React from "react";
import { Route, Switch, HashRouter } from 'react-router-dom';

const Routes: React.FC = ({ ...props}) => {
    return(
        <HashRouter> 
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home}/>
                <Route path={ROUTES.ABOUT} component={About} />
                <Route path={ROUTES.SERVICES} component={Services} />
                <Route path={ROUTES.CONTACT} component={Contact} />
            </Switch>
        </HashRouter>
    )
}

export default Routes;

