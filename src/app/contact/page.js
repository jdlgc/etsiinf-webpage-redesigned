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
} from '@carbon/react';

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
  labelText: 'Title',
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
  className: 'button-class'
};

function ContactPage() {
  return (
    <Grid className="contact-page">
      <Column lg={16} md={8} sm={4} className="form-page__r1">
        <div id="main-content" role='main'>
          <h1 className="send-header">Send us a message</h1>
          <p className="comment" aria-label="Required field">*Required field</p>
          <Form aria-label="Contact form">
            <Stack gap={7}>
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
              <Button type="submit" className="button-class" {...buttonEvents}>
                Submit
              </Button>
            </Stack>
          </Form>
        </div>
      </Column>
    </Grid>
  );
}

export default ContactPage;