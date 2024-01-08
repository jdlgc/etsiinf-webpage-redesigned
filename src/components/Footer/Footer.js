'use client';

import {
  Column,
  Grid
} from '@carbon/react';
import Link from 'next/link';

const iframeStyle = {
  width: '100%',  // Puedes ajustar el ancho según tus necesidades
  height: '200px',  // Puedes ajustar la altura según tus necesidades
};

function Footer() {
  return (
    <Grid className="footer" fullWidth>
      <Column lg={16} md={8} sm={4}>
        <h2 className="widget-title">More info</h2>
      </Column>
      <Column
        lg={4}
        md={4}
        sm={4}
        className="footer__c1">
        <div>
          <h4>Phone</h4>
          <Link href="tel:+34910672712" passHref>
            <p>(+34) 910672712</p>
          </Link>
          {<br />}

          <h4>Email</h4>
          <Link href="mailto:futuroalumno@etsiinf.upm.es" passHref>
            <p>futuroalumno@etsiinf.upm.es</p>
          </Link>
          {<br />}

          <h4>Questions</h4>
          <p>Have questions? Write us on <Link href="/contact" passHref>AskQuestions</Link>.</p>
        </div>
      </Column>
      <Column
        lg={12}
        md={4}
        sm={4}
        className="footer__c2">
        <h4>Address</h4>
        <Link href="https://www.google.com/maps?ll=40.40501,-3.839519&z=15&t=m&hl=es-ES&gl=US&mapclient=embed&cid=16103465423937228709" passHref>
          <p>ETS de Ingenieros Informáticos Universidad Politécnica de Madrid Campus de Montegancedo, s/n, Pozuelo de Alarcón(28223), España</p>
        </Link>
        {<br />}
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.171243133389!2d-3.841730548564272!3d40.4050570641712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4185f258e5eec5%3A0xdf7b007bb6904fa5!2sUniversidad+Polit%C3%A9cnica+de+Madrid%3A+Escuela+T%C3%A9cnica+Superior+de+Ingenieros+Inform%C3%A1ticos!5e0!3m2!1ses!2ses!4v1465287304393" allowFullScreen style={iframeStyle}></iframe>
        </div>
      </Column>
    </Grid>
  );
}

export default Footer;
