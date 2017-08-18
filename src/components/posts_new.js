import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {



  renderField(field) {
    // field.meta.touched and field.meta.error as touched and error
    const { meta : { touched, error} } = field;
    const fieldClassName = `form-group ${touched && error ? 'has-danger' : '' }`;

    return (
      <div className={fieldClassName}>
        <label>{field.label}</label>
        <input
          type='text'
          className='form-control'
          {...field.input}
        />
        <div className='has-help'>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    console.log(values)
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
