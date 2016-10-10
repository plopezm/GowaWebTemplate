import React from 'react';
import ReactDOM from 'react-dom';
import TableListComponent from './TableList';
import Request from 'superagent';

class HomeComponent extends React.Component{
    constructor() {
        super();
        this.state = {};
    }

    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
        var url = "http://localhost:8000/gowa/api/rest/tables/";
        Request.get(url).then((response) => {
            this.setState({
                tables: response.body
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    componentDidMount(){
        // Called after the component has been rendered into the page
    }

    componentWillReceiveProps(nextProps){
        // Called when the props provided to the component are changed
    }

    componentWillUpdate(nextProps, nextState){
        // Called when the props and/or state change
    }

    componentWillUnmount(){
        // Called when the component is removed
    }

    render(){

        if(this.state.tables != undefined && this.state.tables.length > 0){
            return (
                <div>
                    <div className="ui massive label routing panel title">Gowa tables</div>
                    <hr/>
                    <TableListComponent tables={this.state.tables}/>
                </div>
            );
        }else{
            return (
                <div>
                    <div className="ui massive label routing panel title">Gowa tables</div>
                    <hr/>
                    <h3>Tables not found</h3>
                </div>
            );
        }
    }
}

export default HomeComponent;