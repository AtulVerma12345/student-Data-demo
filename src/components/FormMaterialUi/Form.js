import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionMaster from '../../actions/uiAction';

import { Values } from 'redux-form-website-template';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormComponent from '../common/formComponent';
import Header from '../common/Header';

class ProductForm extends React.Component {
  constructor() {
    super();
  }

  saveProductInfo = values => {
    console.log('values', values);
  };

  render() {
    const required = value => (value == null ? 'Required' : undefined);
    const email = value =>
      value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email'
        : undefined;

    const number = value =>
      value && !/^[0-9]/i.test(value) ? 'Please enter a number' : undefined;

    return (
      <div>
        <Header />

        <div className="container-fluid">
          <div>
            {this.props.initialValues.title === undefined ? (
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <FormComponent
                  onSubmit={this.saveProductInfo}
                  formDefination={{
                    name: 'Product',
                    saveButtonText: 'Save',
                    fields: [
                      {
                        name: 'title',
                        selectedType: 'TextField',
                        hint: 'Product Title',
                        floatingLabelText: 'Title',
                        validate: required,
                        ref: null,
                        className: 'formStyle'
                      },
                      {
                        name: 'price',
                        selectedType: 'TextField',
                        hint: 'Product price',
                        floatingLabelText: 'Price',
                        validate: required && number,
                        ref: null,
                        className: 'formStyle'
                      },
                      {
                        name: 'quantity',
                        selectedType: 'TextField',
                        hint: 'product quantity',
                        floatingLabelText: 'quantity',
                        validate: required && number,
                        ref: null,
                        className: 'formStyle'
                      },
                      {
                        name: 'discription',
                        selectedType: 'TextField',
                        hint: 'Product discription',
                        floatingLabelText: 'discription',
                        validate: required,
                        ref: null,
                        rows: 2,
                        className: 'formStyle'
                      }
                    ]
                  }}
                />
              </MuiThemeProvider>
            ) : (
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <FormComponent
                  initialValues={{
                    title: this.props.initialValues.title,
                    price: this.props.initialValues.price,
                    quantity: this.props.initialValues.quantity,
                    discription: this.props.initialValues.discription
                  }}
                  onSubmit={this.saveProductInfo}
                  formDefination={{
                    name: 'Product',
                    saveButtonText: 'Update',
                    fields: [
                      {
                        name: 'title',
                        selectedType: 'TextField',
                        hint: 'Product Title',
                        floatingLabelText: 'Title',
                        validate: required,
                        ref: null,
                        className: 'formStyle'
                      },
                      {
                        name: 'price',
                        selectedType: 'TextField',
                        hint: 'Product price',
                        floatingLabelText: 'Price',
                        validate: required && number,
                        ref: null,
                        className: 'formStyle'
                      },
                      {
                        name: 'quantity',
                        selectedType: 'TextField',
                        hint: 'product quantity',
                        floatingLabelText: 'quantity',
                        validate: required && number,
                        ref: null,
                        className: 'formStyle'
                      },
                      {
                        name: 'discription',
                        selectedType: 'TextField',
                        hint: 'Product discription',
                        floatingLabelText: 'discription',
                        validate: required,
                        ref: null,
                        rows: 2,
                        className: 'formStyle'
                      }
                    ]
                  }}
                />
              </MuiThemeProvider>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    initialValues: state.application.selectedItem
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionMaster: bindActionCreators(actionMaster, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm);
