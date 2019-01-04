import React from 'react';
import {
  Form,
  FormGroup,
  ControlLabel,
  HelpBlock,
  FormControl,
  Schema
} from 'rsuite';

export default (schema: any[]) => {
  const schemaModel = {};
  schema.forEach(item => {
    schemaModel[item.key] = item.type;
  });
  const model = Schema.Model(schemaModel);

  return React.forwardRef((props, ref) => (
    <Form ref={ref} model={model} {...props}>
      {schema.map(item => {
        const { key, label, componentClass, helpBlock, ...rest } = item;
        return (
          <FormGroup key={key}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl name={key} accepter={componentClass} {...rest} />
            <HelpBlock>{helpBlock}</HelpBlock>
          </FormGroup>
        );
      })}
    </Form>
  ));
};
