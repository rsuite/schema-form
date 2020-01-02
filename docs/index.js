import React from 'react';
import ReactDOM from 'react-dom';

import { InputNumber, SelectPicker, Schema, Button } from 'rsuite';
import './styles.less';
import SchemaForm from '../src';

const { StringType, NumberType } = Schema.Types;
const Form = SchemaForm([
  {
    key: 'username',
    type: StringType().isRequired('This field is required'),
    label: 'Username'
  },
  {
    key: 'email',
    type: StringType().isEmail('Please enter a valid email address'),
    label: 'Email',
    helpBlock: 'Please enter your company email address'
  },
  {
    key: 'age',
    type: NumberType('Please enter a valid number'),
    label: 'Age',
    componentClass: InputNumber,
    componentProps: {
      autoComplete: 'off'
    }
  },
  {
    key: 'group',
    type: NumberType(),
    label: 'User Group',
    componentClass: SelectPicker,
    componentProps: {
      style: {
        width: 300
      },
      data: [
        { value: 1, label: 'Admin' },
        { value: 2, label: 'User' }
      ]
    }
  }
]);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
  }
  form = null;
  bindFormRef = ref => {
    this.form = ref;
  };
  handleChange = formData => {
    this.setState({
      formData
    });
  };
  handleSubmit = () => {
    if (this.form.check()) {
      console.log(this.state.formData);
    }
  };
  render() {
    return (
      <div className="page">
        <h1>Schema Form</h1>
        <p>Form generation and validation based on schema-typed and rsuite</p>
        <p>
          <a href="https://github.com/rsuite/schema-form">
            https://github.com/rsuite/schema-form
          </a>
        </p>
        <div className="example">
          <Form onChange={this.handleChange} ref={this.bindFormRef} />
          <hr />
          <Button onClick={this.handleSubmit}>保存</Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
