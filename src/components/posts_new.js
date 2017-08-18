import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          type='text'
          className='form-control'
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }


  render() {
    return (
      <form>
        <Field
          label='Post Title'
          name='title'
          component={this.renderField}
        />
        <Field
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field
          label='Content'
          name='content'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    )
  }
}

// This validate function will be called automatically by reduxForm
function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    // Title doesn't exist, add a property 'title' to errors object.
    errors.title = 'Enter a title. *Required*'
  }

  if (!values.content) {
    errors.content = 'Enter some content. *Required*'
  }

  // If errors is empty, form is fine to submit.
  // If errors has any properties, there are problems with the form.
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
