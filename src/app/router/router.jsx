import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import HomeComponent from '../home/home';
import TableShower from '../table-details/TableShower';


class RoutingComponent extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route  path="/" component={HomeComponent} />
                <Route path="/show/:tableId" component={TableShower} />
            </Router>
        );
    }
}

export default RoutingComponent;
