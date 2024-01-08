'use client';

import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
  Theme,
  UnorderedList,
  ListItem,
  PaginationNav
} from '@carbon/react';
import { ExpressiveCard } from '@carbon/ibm-products';
import React, { useState } from 'react';


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
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(newsArray.length / itemsPerPage);

  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <div style={{
          backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/UPM-FI--Bloque-5.jpg/1280px-UPM-FI--Bloque-5.jpg")',
          backgroundSize: 'cover',
          position: 'relative',
          height: '600px',
          backgroundPosition: 'bottom',  // Mueve el fondo hacia la parte inferior
        }}>
          <h1 className="landing-page__heading" style={{ color: 'white' }}>
            Escuela Técnica Superior de Ingenieros Informáticos
          </h1>
        </div>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Page navigation">
            <Tab>About</Tab>
            <Tab>News</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>
                La Escuela Técnica Superior de Ingenieros Informáticos de la
                Universidad Politécnica de Madrid es el centro más antiguo de
                España que imparte la titulación de Ingeniero en Informática de los
                que existen. A continuación, se listan todos los estudios que ofrece
                la Universidad:
              </p>
              <UnorderedList>
                <ListItem>
                  Grados
                  <UnorderedList nested>
                    <ListItem>Grado en Matemáticas e Informática</ListItem>
                    <ListItem>Grado en Ingeniería Informática</ListItem>
                    <ListItem>Grado en Ciencia de Datos e Inteligencia Artificial</ListItem>
                    <ListItem>Programa de Ingeniero/a en Informática (Grado + Máster)</ListItem>
                    <ListItem>Doble Grado en Ingeniería Informática y Administración y Dirección de Empresas</ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem>
                  Máster
                  <UnorderedList nested>
                    <ListItem>Máster Universitario en Ingeniería Informática</ListItem>
                    <ListItem>Máster Universitario en Innovación Digital</ListItem>
                    <ListItem>Máster Universitario en Ingeniería del Software</ListItem>
                    <ListItem>Máster Universitario en Inteligencia Artificial</ListItem>
                    <ListItem>Máster Universitario en Ciencia de Datos</ListItem>
                    <ListItem>Máster Universitario en Software y Sistemas</ListItem>
                    <ListItem>Máster Universitario en Métodos Formales en Ingeniería Informática</ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>
              <p>
                Nuestros Ingenieros Informáticos están capacitados para realizar
                cualquier actividad que requiera computadores, se beneficie de ellos
                o necesite crearlos. De esta forma, la Ingeniería Informática incluye:
              </p>
              <UnorderedList>
                <ListItem>
                  El diseño y la implementación de sistemas hardware y software
                </ListItem>
                <ListItem>
                  El procesamiento, estructuración y gestión de distintos tipos de información
                </ListItem>
                <ListItem>
                  La seguridad de la información
                </ListItem>
                <ListItem>
                  El uso de computadores para estudios científicos
                </ListItem>
                <ListItem>
                  El desarrollo de sistemas informáticos que se comporten de forma inteligente
                </ListItem>
                <ListItem>
                  La creación y uso de comunicaciones y de sistemas de entretenimiento
                </ListItem>
                <ListItem>
                  La búsqueda y recopilación de información relevante
                </ListItem>
                <ListItem>
                  Sus múltiples aplicaciones en el ámbito profesional, dentro del sector de las Tecnologías de la Información y la Comunicación.
                </ListItem>
              </UnorderedList>
            </TabPanel>
            <TabPanel>
              <div className="cds--grid card-story">
                <Grid fullWidth>
                  {newsArray.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((newsItem, index) => (
                    <Column key={index} lg={5} md={4} sm={4} className='landing-page__news__c1'>
                      <Theme theme="white">
                        <ExpressiveCard
                          className="card expressive-card"
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
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <PaginationNav
                  loop={false}
                  page={currentPage}
                  totalItems={totalPages}
                  itemsShown={6}
                  onChange={handlePageChange}
                />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
    </Grid >
  );
}
