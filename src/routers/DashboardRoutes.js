import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from '../components/ui/NavBar';

import {MarvelPage} from "../components/Marvel/MarvelPage";
import {DCPage}  from "../components/DC/DCPage";
import {HeroPage} from "../components/heroes/HeroPage";
import { SearchPage } from '../components/search/SearchPage';

export const DashboardRoutes = () => {
    return (
        <>
        <Navbar/>
        <div>
          <Switch>
              <Route exact path="/marvel" component={MarvelPage}/>
              <Route exact path="/hero/:heroeId" component={HeroPage}/>
              <Route exact path="/dc" component={DCPage}/>
              <Route exact path="/search" component={SearchPage}/>

              <Redirect to="/marvel" />

          </Switch>
        </div>
        </>
    )
}
