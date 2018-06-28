import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionMaster from '../../actions/uiAction';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
    }

    sortAcctoAlphabet = () => {
        this.props.sortData()
    };
    sortAcctoMarksreverse = () => {
        this.props.sortDataAccToMarks()
    };

    handleFilter = (event) => {
        this.props.onFilter(event.target.value);
    };

    render() {
        return (
            <nav className="navbar navbar-inverse navlook">
                <div className="container">
                    <div className="navbar-header"/>
                    <form className="navbar-form navbar-left">
                        {
                            this.props.onHide === true ?
                                null :
                                <div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" onChange={this.handleFilter}
                                               placeholder="Search"/>
                                    </div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a className="btn btn-info btn-lg sortButton" onClick={this.sortAcctoAlphabet}>
                                        <span className="glyphicon glyphicon-chevron-up"></span> Sort By Letter
                                    </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a className="btn btn-info btn-lg sortButton" onClick={this.sortAcctoMarksreverse}>
                                        <span className="glyphicon glyphicon-chevron-down"></span> Sort By Marks
                                    </a>
                                </div>
                        }
                    </form>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return state.application;
}

function mapDispatchToProps(dispatch) {
    return {
        actionMaster: bindActionCreators(actionMaster, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
