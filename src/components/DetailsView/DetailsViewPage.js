import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionMaster from '../../actions/uiAction';
import Header from '../common/Header';
import {push} from 'react-router-redux';
import BarChart from 'react-bar-chart';

class DetailViewPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.windowWidth = '500';
    }

/*
    componentDidMount() {


    }
*/


    goToHome = () => {
        this.props.actionMaster.EndLoader()
        setTimeout(() =>  this.props.history.push('/'), 500);
        //this.props.actionMaster.goHome()
        //this.props.history.push('/')
    };

    handleBarClick(element, id) {
        console.log(`The bin ${element.text} with id ${id} was clicked`);
    }

    render() {

        var marksData = [];
        var markData = [];
        for (var i in this.props.selectedData.marks) {
            marksData.push([i, this.props.selectedData.marks [i]]);

        }
        for (let g = 0; g < marksData.length; g++) {
            markData.push({text: marksData[g][0], value: marksData[g][1]})
        }


        console.log("marksData", marksData)
        console.log("markDatamarkData", markData)




        const data = markData;


        const margin = {top: 20, right: 20, bottom: 30, left: 40};
        return (
            <div>
                <Header/>

                <div className="container">
                    <div className="row">
                        {/*  {
                            this.props.preLoader === true ?
                                <div className="loaderH">
                                    <PreLoader/>
                                </div>:
                                null
                        }*/}

                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div className="box">
                                <div className="box-icon">
                                    <span className="fa fa-4x fa-html5"/>
                                </div>
                                <div className="info">
                                    <h4 className="text-center">
                                        {this.props.selectedData.name !== undefined
                                            ? this.props.selectedData.name
                                            : null}
                                    </h4>
                                    <p>
                                        <span>Class : </span>
                                        {this.props.selectedData.class}
                                    </p>
                                    <p>
                                        <span>Roll No : </span>
                                        {this.props.selectedData.rollNo}
                                    </p>
                                    <p>
                                        <span>Marks in S1 : </span>
                                        {this.props.selectedData.marks !== undefined
                                            ? this.props.selectedData.marks.s1
                                            : null}
                                    </p>
                                    <p>
                                        <span>Marks in S2 : </span>
                                        {this.props.selectedData.marks !== undefined
                                            ? this.props.selectedData.marks.s2
                                            : null}
                                    </p>
                                    <p>
                                        <span>Marks in S3 : </span>
                                        {this.props.selectedData.marks !== undefined
                                            ? this.props.selectedData.marks.s3
                                            : null}
                                    </p>
                                    <p>
                                        <span>Total Marks : </span>
                                        {this.props.selectedData.totalMarks}
                                    </p>

                                    <div>
                                        <div style={{width: '50%'}}>
                                            <BarChart ylabel='Marks'
                                                      width={this.windowWidth}
                                                      height={500}
                                                      margin={margin}
                                                      data={data}
                                                      onBarClick={this.handleBarClick}/>
                                        </div>
                                    </div>
                                    <a className="btn" onClick={this.goToHome}>
                                        Back
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
)(DetailViewPage);
