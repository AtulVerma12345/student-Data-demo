import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionMaster from '../../actions/uiAction';
import Header from '../common/Header';
import PreLoader from '../common/preloader';

class Welcome extends React.Component {
    constructor() {
        super();
        this.eventDataInfo = '';
        this.firstClickedForSort = false;
        this.firstClickedForSortMarks = false;

    }

    componentDidMount() {
        this.props.actionMaster.startLoader();
        setTimeout(() => this.props.actionMaster.getStudentData(), 2000);
    }

    onFilterData = (d) => {
        this.eventDataInfo = d;
        console.log("this.eventDataInfo", this.eventDataInfo)
        this.forceUpdate()
    };

    sortingData = () => {
        if (this.firstClickedForSort === false) {
            this.firstClickedForSort = true;
            this.props.studentData.sort(function (a, b) {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })
        } else {
            this.firstClickedForSort = false;
            this.props.studentData.reverse();
        }

        this.forceUpdate()
    };
    shortingDataForMarks = () => {
        if (this.firstClickedForSortMarks === false) {
            this.firstClickedForSortMarks = true;
            this.props.studentData.sort(function (a, b) {
                if (a.totalMarks < b.totalMarks) return -1;
                if (a.totalMarks > b.totalMarks) return 1;
                return 0;
            })
        } else {
            this.firstClickedForSortMarks = false;
            this.props.studentData.reverse();
        }

        this.forceUpdate()
    };

    onMove = data => {
        setTimeout(
            () => this.props.actionMaster.onGoToDetail(data),
            this.props.history.push('/DetailViewPage'),
            2000
        );
        //this.props.history.push('/about-us');
    };

    render() {
        return (
            <div>
                <Header onFilter={this.onFilterData} sortData={this.sortingData}
                        sortDataAccToMarks={this.shortingDataForMarks}/>

                <div className="container">
                    <div className="row">
                        {this.props.preLoader === true && this.props.welcome === false ? (
                            <div className="loaderH">
                                <PreLoader/>
                            </div>
                        ) : null}

                        {
                            this.props.studentData !== null || this.props.studentData !== undefined ?
                                this.props.studentData.map((data, i) => {
                                    if (data.name !== null && data.name !== undefined) {
                                        if (this.eventDataInfo !== '') {
                                            if (data.name.includes(this.eventDataInfo)) {
                                                return <div className="col-sm-6 col-lg-4"
                                                            onClick={() => this.onMove(data)}>
                                                    <div className="panel panel-primary">
                                                        <div className="panel-heading">{data.name}</div>
                                                        <div className="panel-body">
                                                            <div className="panel-footer">Roll
                                                                No.<span>{data.rollNo}</span></div>
                                                            <div className="panel-footer">Total
                                                                Marks<span>{data.totalMarks}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                        } else {
                                            return <div className="col-sm-6 col-lg-4" onClick={() => this.onMove(data)}>
                                                <div className="panel panel-primary">
                                                    <div className="panel-heading">{data.name}</div>
                                                    <div className="panel-body">
                                                        <div className="panel-footer">Roll No.<span>{data.rollNo}</span>
                                                        </div>
                                                        <div className="panel-footer">Total
                                                            Marks<span>{data.totalMarks}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    }


                                }) :
                                <div>No Data!</div>
                        }
                    </div>
                </div>
                {/*<Footer />*/}
            </div>
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
)(Welcome);
