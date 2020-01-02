import React from 'react';
import {
  Form,
  FormGroup,
  ControlLabel,
  HelpBlock,
  FormControl,
  Schema
} from 'rsuite';

export default function(schema = []) {
  const schemaModel = {};
  schema.forEach(item => {
    schemaModel[item.key] = item.type;
  });
  const model = Schema.Model(schemaModel);

  return React.forwardRef((props, ref) => (
    <Form ref={ref} model={model} {...props}>
      {schema.map(item => {
        const { key, label, componentClass, helpBlock, componentProps = {} } = item;
      
        return (
          <FormGroup key={key}>
            { label &&
              <ControlLabel>{label}</ControlLabel>
            }
            <FormControl name={key} accepter={componentClass} {...componentProps} />
            { helpBlock &&
              <HelpBlock>{helpBlock}</HelpBlock> 
            }
          </FormGroup>
        );
      })}
    </Form>
  ));
}
