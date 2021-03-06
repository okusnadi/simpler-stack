import React, { Component, PropTypes } from 'react';
import { Header, Divider, Field, Segment, Icon, Input, Message } from 'react-semantify';
import classNames from 'classnames';

export default class LoginForm extends Component {
  static propTypes = {
    submitting: PropTypes.bool,
    handleSubmit: PropTypes.func,
    submitError: PropTypes.string,
    authenticated: PropTypes.bool,
    fields: PropTypes.object
  };

  static defaultProps = {
    submitting: false,
    handleSubmit: () => false,
    submitError: undefined,
    authenticated: false,
    fields: { email: {}, password: {}}
  };

  render() {
    const { submitError, authenticated, handleSubmit, submitting,
      fields: { email, password } } = this.props;

    return (
      <Segment className="stacked">
        <Header>
          Login
        </Header>
        <Divider />
        <Message className={classNames('error', { hidden: !submitError })}>
          <strong>Login failed.</strong> {submitError}
        </Message>
        <form className="ui large padded form" onSubmit={handleSubmit}>
          <Field className={classNames({
            error: email.touched && email.error
          })}>
            <Input className="icon">
              <input name="email" placeholder="email" type="email" {...email}/>
              <Icon className="mail"/>
            </Input>
          </Field>
          <Field className={classNames({
            error: password.touched && password.error
          })}>
            <Input className="icon">
              <input name="password" placeholder="password" type="password" {...password}/>
              <Icon className="lock"/>
            </Input>
          </Field>
          <button type="submit" className="ui fluid large teal button" disabled={submitting}>
            Login
          </button>
        </form>
      </Segment>
    );
  }
}
