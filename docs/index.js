import React from 'react';
import ReactDOM from 'react-dom';

import { InputNumber, SelectPicker, Schema, Button } from 'rsuite';
import './styles.less';
import SchemaForm from '../src';

const { StringType, NumberType } = Schema.Types;
const Form = SchemaForm([
  {
    key: 'username',
    type: StringType().isRequired('用户名不能为空'),
    label: '用户名'
  },
  {
    key: 'email',
    type: StringType().isEmail('邮箱格式错误'),
    label: '邮箱'
  },
  {
    key: 'age',
    type: NumberType('年龄必须是数字'),
    componentClass: InputNumber,
    autoComplete: 'off',
    label: '年龄'
  },
  {
    key: 'group',
    type: NumberType(),
    componentClass: SelectPicker,
    style: {
      width: 300
    },
    data: [{ value: 1, label: '管理员' }, { value: 2, label: '用户' }],
    label: '用户组'
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
