import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionMaster from '../../actions/uiAction';

export default class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <footer className="container-fluid  fotterSet">
          <div className="modal-footer">
            <p className="text-center">About text</p>
          </div>
        </footer>
      </div>
    );
  }
}
