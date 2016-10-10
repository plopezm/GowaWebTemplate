import React from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from './router/router';


export class App extends React.Component{
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