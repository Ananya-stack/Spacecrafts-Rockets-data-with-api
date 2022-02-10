import React from 'react';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import Spacecrafts from '../component/spacecrafts';
import Launchers from '../component/launchers';
import Customer_Satellites from '../component/Customer_Satellites';
import Centres from '../component/Centres';
import Header from '../header/Header';
import home from '../component/home';


const Routing = () => {
    return ( 
        <div>
            
            <Router>
           <Header/>
            <Switch>
        <Route path="/" exact component={home} />
        <Route path="/space" exact component={Spacecrafts} />
        <Route path="/launchers" exact component={Launchers} />
        <Route path="/customer" exact component={Customer_Satellites} />
        <Route path="/center" exact component={Centres} />
      </Switch>
      </Router>
      
        </div>
    );
}

export default Routing;
