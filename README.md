# schema-form

Form generation and validation based on `schema-typed` and `rsiute`.

## Installation

```
npm install schema-form --save
```

## Usage

```js
import SchemaForm from 'schema-form';
import { InputNumber, SelectPicker, Schema } from 'rsuite';

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
    type: NumberType().isRequired('用户组必须'),
    componentClass: SelectPicker,
    data: [{ value: 1, label: '管理员' }, { value: 2, label: '用户' }],
    label: '用户组'
  }
]);

ReactDOM.render(<Form />, mountNode);
```

![preview](preview.png)
