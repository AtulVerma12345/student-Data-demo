import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import * as uiAction from '../../actions/uiAction';
import MenuItem from 'material-ui/MenuItem';
import { AutoComplete as MUIAutoComplete } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import $ from 'jquery';

import { Checkbox, RadioButton, TextField } from 'redux-form-material-ui';

class FormComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  getFieldType(fieldType) {
    switch (fieldType) {
      case 'TextField': {
        return TextField;
      }
    }
  }

  renderMenuItems(fieldDef) {
    fieldDef.MenuItem.map((item, i) => {
      return (
        <MenuItem
          className="formStyle"
          value="Accident and emergency (A&E)"
          primaryText="Accident and emergency (A&E)"
        />
      );
    });
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="container-fluid">
          {this.props.formDefination.fields.map((fieldDef, i) => {
            switch (fieldDef.selectedType) {
              case 'Checkbox': {
                return (
                  <div className="col-lg-12">
                    {fieldDef.name === 'ADD_USER' ? (
                      <div
                        style={{
                          fontSize: '18px',
                          marginBottom: '3%',
                          marginTop: '4%'
                        }}
                        className="formStyle">
                        Select the permissions which you want to revoke :
                      </div>
                    ) : null}

                    <Field
                      className={fieldDef.className}
                      component={this.getFieldType(fieldDef.selectedType)}
                      name={fieldDef.name}
                      value={true}
                      label={fieldDef.label}
                      validate={fieldDef.validate}
                    />
                  </div>
                );
              }
              default: {
                return (
                  <div className="col-lg-6 col-md-6">
                    <Field
                      onChange={fieldDef.onChange}
                      className={fieldDef.className}
                      type={fieldDef.type}
                      maxLength={fieldDef.maxLength}
                      disabled={fieldDef.disabled}
                      component={this.getFieldType(fieldDef.selectedType)}
                      name={fieldDef.name}
                      hintText={fieldDef.hint}
                      floatingLabelText={fieldDef.floatingLabelText}
                      validate={fieldDef.validate}
                      rows={fieldDef.rows > 0 ? fieldDef.rows : 1}
                    />
                  </div>
                );
              }
            }
          })}
        </div>

        <br />
        <br />
        <br />
        <div className="container-fluid">
          <div className="col-lg-6 col-md-6">
            <button
              selectedType="submit"
              className="btn btn-success form-submit-btn"
              disabled={submitting || this.props.formDefination.enableButton}>
              {this.props.formDefination.saveButtonText}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return state.application;
}

function mapDispatchToProps(dispatch) {
  return {
    actionLane: bindActionCreators(uiAction, dispatch)
  };
}

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(
  reduxForm({
    form: 'materialUiForm'
  })(FormComponent)
);
