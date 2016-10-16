import React from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from './router/Router';


export class App extends React.Component{
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
        return  (
            <div>
                <div className="ui pointing menu">
                    <div className="item">
                        <h3>Gowa</h3>
                    </div>
                    <a className="active item">
                        Home
                    </a>
                </div>
                <div id="root" className="ui segment routing-content">
                    <RouterComponent></RouterComponent>
                </div>
           </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));