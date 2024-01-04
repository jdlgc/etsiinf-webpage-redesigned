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

const iframeStyle = {
  width: '100%',  // Puedes ajustar el ancho según tus necesidades
  height: '400px',  // Puedes ajustar la altura según tus necesidades
};

function Footer() {
  return (
    <Grid className="footer" fullWidth>
      <Column
        lg={8}
        md={4}
        sm={4}
        className="footer__r1">
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
      <Column
        lg={8}
        md={4}
        sm={4}
        className="footer__r2">
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.171243133389!2d-3.841730548564272!3d40.4050570641712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4185f258e5eec5%3A0xdf7b007bb6904fa5!2sUniversidad+Polit%C3%A9cnica+de+Madrid%3A+Escuela+T%C3%A9cnica+Superior+de+Ingenieros+Inform%C3%A1ticos!5e0!3m2!1ses!2ses!4v1465287304393" frameborder="0" allowfullscreen style={iframeStyle}></iframe>
        </div>
      </Column>
    </Grid>
  );
}

export default Footer;