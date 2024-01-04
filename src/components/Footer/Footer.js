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

function Footer() {
  return (
    <Grid className="news-page">
      <Column lg={5} md={4} sm={4} className="footer__r1">
        <div class="widget-title">Escríbenos</div>

        <Form aria-label="sample form">
          <Stack gap={7}>
            <TextInput {...TextInputName} />
            <TextInput {...TextInputEmail} />
            <TextArea {...TextAreaMessage} />
            <Button type="submit" className="some-class" {...buttonEvents}>
              Submit
            </Button>
          </Stack>
        </Form>
      </Column>
      <Column lg={5} md={4} sm={4} className="footer__r2">
        {/* Contenido de la segunda columna */}
      </Column>
      <Column lg={5} md={4} sm={4} className="footer__r3">
        {/* Contenido de la tercera columna */}
      </Column>
    </Grid>
  );
}

export default Footer;