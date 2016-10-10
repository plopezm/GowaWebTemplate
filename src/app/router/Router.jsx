import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import HomeComponent from '../home/Home';
import TableShowerComponent from '../table-details/TableShower';


class RoutingComponent extends React.Component{

    componentWillMount() {
        // Called the first time the component is loaded right before the component is added to the page
    }

    componentDidMount() {
        // Called after the component has been rendered into the page
    }

    componentWillReceiveProps(nextProps) {
        // Called when the props provided to the component are changed
    }

    componentWillUpdate(nextProps, nextState) {
        // Called when the props and/or state change
    }

    componentWillUnmount() {
        // Called when the component is removed
    }
    render(){
        return (
            <Router history={hashHistory}>
                <Route  path="/" component={HomeComponent} />
                <Route path="/show/:tableId" component={TableShowerComponent} />
            </Router>
        );
    }
}

export default RoutingComponent;
