'use client';

import {
  Column,
  Grid,
  Form,
  Stack,
  TextInput,
  TextArea,
  Button,
  Tooltip,
  Toggletip,
  ToggletipButton,
  ToggletipContent
} from '@carbon/react';
import { Information } from '@carbon/react/icons';

const TextInputName = {
  className: 'form-name-class',
  id: 'name',
  placeholder: 'Name*',
  labelText: 'Name',
  required: true
};

const TextInputEmail = {
  className: 'form-email-class',
  id: 'email',
  placeholder: 'Email*',
  labelText: 'Email',
  required: true
};

const TextInputTitle = {
  className: 'form-title-class',
  id: 'title',
  placeholder: 'Title*',
  labelText: 'Title' ,
  required: true
};

const TextAreaMessage = {
  className: 'form-message-class',
  id: 'message',
  placeholder: 'Message*',
  rows: 5,
  labelText: 'Message',
  required: true
};


const buttonEvents = {
  className: 'some-class'
};

function ContactPage() {
  return (
    <Grid className="exams-page">
      <Column lg={16} md={8} sm={4} className="exams-page__r1">
        <Form aria-label="sample form">
          <h3>Send us a message</h3>
          <Stack gap={7}>
            <span className="comment" aria-label="required field">*Required field</span>
            <TextInput {...TextInputName} />
            <Tooltip align="top" label="Enter your e-mail" closeOnActivation={true}>
              <TextInput {...TextInputEmail} />
            </Tooltip>
            <Tooltip align="top" label="Enter your Title" closeOnActivation={true}>
              <TextInput {...TextInputTitle} />
            </Tooltip>
            <Tooltip align="top" label="Enter your message" closeOnActivation={true}>
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