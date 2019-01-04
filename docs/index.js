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
    label: 'Email'
  },
  {
    key: 'age',
    type: NumberType('Please enter a valid number'),
    componentClass: InputNumber,
    autoComplete: 'off',
    label: 'Age'
  },
  {
    key: 'group',
    type: NumberType(),
    componentClass: SelectPicker,
    style: {
      width: 300
    },
    data: [{ value: 1, label: 'Admin' }, { value: 2, label: 'User' }],
    label: 'User Group'
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
      <div className="doc-page">
        <Form onChange={this.handleChange} ref={this.bindFormRef} />
        <hr />
        <Button onClick={this.handleSubmit}>保存</Button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
