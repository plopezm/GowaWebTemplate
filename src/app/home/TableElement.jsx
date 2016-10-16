import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class TableElementComponent extends React.Component {
    constructor(props) {
        super(props);
    }

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

    render() {
        return (
            <div className="four wide column">
                <div className="ui header">
                    <img src="img/plugin.png"/>
                    <div className="content">
                        <Link to={'/show/'+this.props.table.title}>{this.props.table.title}</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default TableElementComponent;