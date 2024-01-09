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
import React, { useState, useEffect } from 'react';


import Image from 'next/image';

const newsArray = [
  {
    title: 'The Ontology Engineering Group of ETSIINF Leads the INESData Project',
    content: 'The main goal of INESData is to create a data space incubator in Spain',
    alt: 'INESData logo',
    image: 'https://www.fi.upm.es/GestorTablon/GTimgPortada/4993-imagen_2023_12_19_105619500.png',
    width: '150',
    height: '34'
  },
  {
    title: 'The TeresIA Project, in collaboration with the Ontological Engineering Group of ETSIINF, will recover and promote terminology in Spanish using artificial intelligence and expert knowledge',
    content: 'The initiative, coordinated by CSIC with the participation of various institutions, has been endowed with 1.4 million euros by the Secretary of State for Digitization and Artificial Intelligence',
    alt: 'TeresIA logo',
    image: 'https://www.fi.upm.es/GestorTablon/GTimgPortada/4986-Opera_Instanta__769_nea_2023_12_11_091120_www.csic.es.png',
    width: '138',
    height: '61'
  },
  {
    title: 'The Ontology Engineering Group of ETSIINF Leads the INESData Project',
    content: 'The main goal of INESData is to create a data space incubator in Spain',
    alt: 'INESData logo',
    image: 'https://www.fi.upm.es/GestorTablon/GTimgPortada/4993-imagen_2023_12_19_105619500.png',
    width: '150',
    height: '34'
  },
  {
    title: 'The TeresIA Project, in collaboration with the Ontological Engineering Group of ETSIINF, will recover and promote terminology in Spanish using artificial intelligence and expert knowledge',
    content: 'The initiative, coordinated by CSIC with the participation of various institutions, has been endowed with 1.4 million euros by the Secretary of State for Digitization and Artificial Intelligence',
    alt: 'TeresIA logo',
    image: 'https://www.fi.upm.es/GestorTablon/GTimgPortada/4986-Opera_Instanta__769_nea_2023_12_11_091120_www.csic.es.png',
    width: '138',
    height: '61'
  },
  {
    title: 'The Ontology Engineering Group of ETSIINF Leads the INESData Project',
    content: 'The main goal of INESData is to create a data space incubator in Spain',
    alt: 'INESData logo',
    image: 'https://www.fi.upm.es/GestorTablon/GTimgPortada/4993-imagen_2023_12_19_105619500.png',
    width: '150',
    height: '34'
  },
  {
    title: 'The TeresIA Project, in collaboration with the Ontological Engineering Group of ETSIINF, will recover and promote terminology in Spanish using artificial intelligence and expert knowledge',
    content: 'The initiative, coordinated by CSIC with the participation of various institutions, has been endowed with 1.4 million euros by the Secretary of State for Digitization and Artificial Intelligence',
    alt: 'TeresIA logo',
    image: 'https://www.fi.upm.es/GestorTablon/GTimgPortada/4986-Opera_Instanta__769_nea_2023_12_11_091120_www.csic.es.png',
    width: '138',
    height: '61'
  },
  {
    title: 'The Ontology Engineering Group of ETSIINF Leads the INESData Project',
    content: 'The main goal of INESData is to create a data space incubator in Spain',
    alt: 'INESData logo',
    image: 'https://www.fi.upm.es/GestorTablon/GTimgPortada/4993-imagen_2023_12_19_105619500.png',
    width: '150',
    height: '34'
  },
  {
    title: 'The TeresIA Project, in collaboration with the Ontological Engineering Group of ETSIINF, will recover and promote terminology in Spanish using artificial intelligence and expert knowledge',
    content: 'The initiative, coordinated by CSIC with the participation of various institutions, has been endowed with 1.4 million euros by the Secretary of State for Digitization and Artificial Intelligence',
    alt: 'TeresIA logo',
    image: 'https://www.fi.upm.es/GestorTablon/GTimgPortada/4986-Opera_Instanta__769_nea_2023_12_11_091120_www.csic.es.png',
    width: '138',
    height: '61'
  },
];

export default function LandingPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(newsArray.length / itemsPerPage);

  useEffect(() => {
    // Dynamically set the document title
    document.title = 'Escuela Técnica Superior de Ingenieros Informáticos';
  }, []);

  return (
    <Grid className="landing-page" fullWidth >
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <div style={{
          height: '200px',
        }}>
          <Image
            src={"/static/images/header.jpg"}
            alt={"A laptop open for header"}
            layout="fill"
            objectFit="cover"
          />
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            height: '100%',
            position: 'relative',
            zIndex: 1,
          }}>
            <Image
              src={"/static/images/logo.png"}
              alt={"ETSIINF shield"}
              width={100}
              height={100}
              style={{
                marginLeft: '10px'
              }}
            />
            <h1 className="landing-page__heading" style={{
            color: 'black',
            width: '50%',
            textAlign: 'left',
            marginLeft: '30px'
          }}>
            Escuela Técnica Superior de Ingenieros Informáticos
          </h1>
          </div>
        </div>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <div className="main-content-div" id="main-content" role='alert'>
          <Tabs defaultSelectedIndex={0}>
            <TabList className="tabs-group" aria-label="Page navigation">
              <Tab>About</Tab>
              <Tab>News</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Grid className="tabs-group-content">
                  <Column md={8} lg={16} sm={4} className="landing-page__tab-content">
                    <h2 className="landing-page__subheading">About us</h2>
                    <br />
                    <p>
                      Escuela Técnica Superior de Ingeniería Informática of Madrid is the oldest center in Spain that offers the degree of Computer Engineer. Below is a list of all the studies offered by the University:
                    </p>
                    <br />
                    <br />
                    <UnorderedList>
                      <ListItem>
                        Bachelor&apos;s Degrees
                        <UnorderedList nested>
                          <ListItem>Bachelor&apos;s Degree in Mathematics and Computer Science</ListItem>
                          <ListItem>Bachelor&apos;s Degree in Computer Engineering</ListItem>
                          <ListItem>Bachelor&apos;s Degree in Data Science and Artificial Intelligence</ListItem>
                          <ListItem>Computer Engineer Program (Bachelor&apos;s + Master&apos;s)</ListItem>
                          <ListItem>Double Degree in Computer Engineering and Business Administration and Management</ListItem>
                        </UnorderedList>
                      </ListItem>
                      <ListItem>
                        Master&apos;s Degrees
                        <UnorderedList nested>
                          <ListItem>Master&apos;s Degree in Computer Engineering</ListItem>
                          <ListItem>Master&apos;s Degree in Digital Innovation</ListItem>
                          <ListItem>Master&apos;s Degree in Software Engineering</ListItem>
                          <ListItem>Master&apos;s Degree in Artificial Intelligence</ListItem>
                          <ListItem>Master&apos;s Degree in Data Science</ListItem>
                          <ListItem>Master&apos;s Degree in Software and Systems</ListItem>
                          <ListItem>Master&apos;s Degree in Formal Methods in Computer Engineering</ListItem>
                        </UnorderedList>
                      </ListItem>
                    </UnorderedList>
                    <br />
                    <br />
                    <p>
                      Our Computer Engineers are trained to carry out any activity that requires computers, benefits from them, or involves creating them. Thus, Computer Engineering includes:
                    </p>
                    <br />
                    <UnorderedList>
                      <ListItem>
                        Design and implementation of hardware and software systems
                      </ListItem>
                      <ListItem>
                        Processing, structuring, and management of various types of information
                      </ListItem>
                      <ListItem>
                        Information security
                      </ListItem>
                      <ListItem>
                        Use of computers for scientific studies
                      </ListItem>
                      <ListItem>
                        Development of computer systems that behave intelligently
                      </ListItem>
                      <ListItem>
                        Creation and use of communications and entertainment systems
                      </ListItem>
                      <ListItem>
                        Search and collection of relevant information
                      </ListItem>
                      <ListItem>
                        Multiple applications in the professional field within the Information and Communication Technology sector.
                      </ListItem>
                    </UnorderedList>
                  </Column>
                </Grid>

              </TabPanel>
              <TabPanel>
                <div className="cds--grid card-story">
                  <Grid fullWidth className='tabs-group-content'>
                    {newsArray.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((newsItem, index) => (
                      <Column key={index} lg={5} md={4} sm={4} className='landing-page__news__c1'>
                        <Theme theme="white">
                          <ExpressiveCard
                            className="card expressive-card"
                            media={<div className='card-header' style={{
                              height: '150px',
                              backgroundColor: '#E3E3E3',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                              <Image
                                src={newsItem.image}
                                alt={newsItem.alt}
                                width={newsItem.width}
                                height={newsItem.height}
                              />
                            </div>}
                            primaryButtonText="Read more"
                            primaryButtonHref='/development'
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
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
                  <PaginationNav
                    loop={false}
                    page={currentPage}
                    totalItems={totalPages}
                    itemsShown={6}
                    onChange={handlePageChange}
                    aria-label="Pagination navigation"
                  />
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </Column>
    </Grid >
  );
}
