'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
  Theme
} from '@carbon/react';
import { ExpressiveCard } from '@carbon/ibm-products';


import Image from 'next/image';

const newsArray = [
  {
    title: 'El grupo de investigación Ontology Engineering Group de la ETSIINF lidera el proyecto INESData',
    content: 'El objetivo principal de INESData es crear una incubadora de espacios de datos en España',
    image: 'https://www.fi.upm.es/GestorTablon/GTimgPortada/4993-imagen_2023_12_19_105619500.png',
    width: '150',
    height: '34'
  },
  {
    title: 'El proyecto TeresIA, en el que colabora el Grupo de Ingeniería Ontológica de la ETSIINF,  recuperará y fomentará la terminología en español aplicando inteligencia artificial y conocimiento experto',
    content: 'La iniciativa, coordinada por el CSIC con la participación de varias instituciones, ha sido dotada con 1,4 millones de euros por la Secretaría de Estado de Digitalización e Inteligencia Artificial',
    image: 'https://www.fi.upm.es/GestorTablon/GTimgPortada/4986-Opera_Instanta__769_nea_2023_12_11_091120_www.csic.es.png',
    width: '138',
    height: '61'
  },
  {
    title: 'El proyecto TeresIA, en el que colabora el Grupo de Ingeniería Ontológica de la ETSIINF,  recuperará y fomentará la terminología en español aplicando inteligencia artificial y conocimiento experto',
    content: 'La iniciativa, coordinada por el CSIC con la participación de varias instituciones, ha sido dotada con 1,4 millones de euros por la Secretaría de Estado de Digitalización e Inteligencia Artificial',
    image: 'https://www.fi.upm.es/GestorTablon/GTimgPortada/4986-Opera_Instanta__769_nea_2023_12_11_091120_www.csic.es.png',
    width: '138',
    height: '61'
  },
  {
    title: 'El proyecto TeresIA, en el que colabora el Grupo de Ingeniería Ontológica de la ETSIINF,  recuperará y fomentará la terminología en español aplicando inteligencia artificial y conocimiento experto',
    content: 'La iniciativa, coordinada por el CSIC con la participación de varias instituciones, ha sido dotada con 1,4 millones de euros por la Secretaría de Estado de Digitalización e Inteligencia Artificial',
    image: 'https://www.fi.upm.es/GestorTablon/GTimgPortada/4986-Opera_Instanta__769_nea_2023_12_11_091120_www.csic.es.png',
    width: '138',
    height: '61'
  }, {
    title: 'El proyecto TeresIA, en el que colabora el Grupo de Ingeniería Ontológica de la ETSIINF,  recuperará y fomentará la terminología en español aplicando inteligencia artificial y conocimiento experto',
    content: 'La iniciativa, coordinada por el CSIC con la participación de varias instituciones, ha sido dotada con 1,4 millones de euros por la Secretaría de Estado de Digitalización e Inteligencia Artificial',
    image: 'https://www.fi.upm.es/GestorTablon/GTimgPortada/4986-Opera_Instanta__769_nea_2023_12_11_091120_www.csic.es.png',
    width: '138',
    height: '61'
  },
  // Add more news items as needed
];
export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Getting started</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">
          Design &amp; build with Carbon
        </h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Page navigation">
            <Tab>About</Tab>
            <Tab>News</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>

            </TabPanel>
            <TabPanel>
              <div className="cds--grid card-story">
                <Grid fullWidth>
                  {newsArray.map((newsItem, index) => (
                    <Column key={index} lg={5} md={4} sm={4} className='landing-page__news__c1'>
                      <Theme theme="white">
                        <ExpressiveCard
                          className="card expressive-card"
                          mediaRatio="2x1"
                          media={<div style={{
                            height: '150px',  // Alto fijo
                            backgroundColor: 'white',  // Fondo blanco
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                            <Image
                              src={newsItem.image}  // Ruta a tu imagen
                              alt={newsItem.title}
                              width={newsItem.width}  // Ancho de la imagen
                              height={newsItem.height}  // Alto de la imagen
                              objectFit="contain"
                            />
                          </div>}
                          primaryButtonText="Read more"
                          primaryButtonHref='/contact'
                          primaryButtonKind='primary'
                          title={newsItem.title}
                        >
                          <p>{newsItem.content}</p>
                        </ExpressiveCard>
                      </Theme>
                    </Column>
                  ))}
                </Grid>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
    </Grid >
  );
}
