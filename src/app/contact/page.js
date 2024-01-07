'use client';

import {
  Column,
  Grid,
  Form,
  Stack,
  TextInput,
  TextArea,
  Button
} from '@carbon/react';

const TextInputName = {
  className: 'form-name-class',
  id: 'name',
  placeholder: 'Name'
};

const TextInputEmail = {
  className: 'form-email-class',
  id: 'email',
  placeholder: 'Email'
};

const TextAreaMessage = {
  className: 'form-message-class',
  id: 'message',
  placeholder: 'Message',
  rows: 5
};

const buttonEvents = {
  className: 'some-class'
};

function ContactPage() {
  return (
    <Grid className="exams-page">
      <Column lg={16} md={8} sm={4} className="exams-page__r1">
        <Form aria-label="sample form">
          <Stack gap={7}>
          <Tooltip direction="bottom" label="Enter your name">
            <TextInput {...TextInputName} />
            </Tooltip>
            <Tooltip direction="bottom" label="Enter your e-mail">
            <TextInput {...TextInputEmail} />
            </Tooltip>
            <Tooltip direction="bottom" label="Enter your message">
            <TextArea {...TextAreaMessage} />
            </Tooltip>
            <Button type="submit" className="some-class" {...buttonEvents}>
              Submit
            </Button>
          </Stack>
        </Form>
      </Column>
    </Grid>
  );
}

export default ContactPage;

