import React from 'react';
import ReactDOM from 'react-dom';
import TableDetailsComponent from './TableDetails';

class TableShowerComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page

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
        if(this.props.params.tableId != undefined){
            return (
                <div>
                    <div className="ui massive label routing panel title">Gowa table details</div>
                    <hr/>
                    <TableDetailsComponent tableId={this.props.params.tableId}/>
                </div>
            );
        }else{
            return (
                <div>
                    <div className="ui massive label routing panel title">Gowa table details</div>
                    <hr/>
                    <h3>Table not found</h3>
                </div>
            );
        }
    }
}

export default TableShowerComponent;
