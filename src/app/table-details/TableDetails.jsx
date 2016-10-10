import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';


class TableDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {};

    }

    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
        console.log(this.props);
        var url = "http://localhost:8000/gowa/api/rest/tables/show/"+this.props.tableId;
        Request.get(url).then((response) => {
            this.setState({
                table: response.body
            });
            console.log(this.state);
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
        if(this.props.table != undefined){
            return (
                <table className="ui celled table">
                    <thead>
                        <tr>
                            {this.props.table.columns.map(function(column, i){
                                <th>{column}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div className="ui ribbon label">First</div>
                        </td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr><th colSpan="3">
                        <div className="ui right floated pagination menu">
                            <a className="icon item">
                                <i className="left chevron icon"></i>
                            </a>
                            <a className="item">1</a>
                            <a className="item">2</a>
                            <a className="item">3</a>
                            <a className="item">4</a>
                            <a className="icon item">
                                <i className="right chevron icon"></i>
                            </a>
                        </div>
                    </th>
                    </tr></tfoot>
                </table>

            );
        }else{
            return <h1>Details not found</h1>
        }
    }
}

export default TableDetails;