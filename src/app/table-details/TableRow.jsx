import React from 'react';
import ReactDOM from 'react-dom';


class TableRowComponent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            rows: []
        };
    }

    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
        for(var attr in this.props.row){
            this.state.rows.push(this.props.row[attr]);
        }
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
            var row = this.state.rows.map(function(row){
               return <td key={row}>{row}</td>
            });
            return(
                <tr>
                    {row}
                </tr>
            )
    }
}

export default TableRowComponent;