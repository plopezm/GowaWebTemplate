import React from 'react';
import ReactDOM from 'react-dom';
import TableElementComponent from './TableElement';

class TableListComponent extends React.Component{
    constructor(props) {
        super(props);
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
        return (
            <div className="routing panel content">
                <div className="ui grid">
                {
                    this.props.tables.map(function(table) {
                       return <TableElementComponent key={table.title} table={table} />
                    })
                }
                </div>
            </div>
        );
    }

}

export default TableListComponent;