'use client';

import React, { useState } from 'react';


import JanuaryExamsTable from './JanuaryExamsTable';
import JuneExamsTable from './JuneExamsTable';
import JulyExamsTable from './JulyExamsTable';
import {
  Column,
  Grid,
  Accordion,
  AccordionItem
} from '@carbon/react';

const headers = [
  {
    key: 'exam',
    header: 'Exam',
  },
  {
    key: 'date',
    header: 'Date',
  },
  {
    key: 'hour',
    header: 'Hour',
  },
  {
    key: 'semester',
    header: 'Semester',
  },
  {
    key: 'classroom',
    header: 'Classroom',
  },
];

const rowsJanuaryExams = [
  {
    id: '1',
    exam: 'Big Data/Data Visualization',
    date: '15/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '6306',
  },
  {
    id: '2',
    exam: 'Intelligent Data Analysis',
    date: '15/01/2023',
    hour: '15:00 - 18:00',
    semester: '1st semester',
    classroom: '6306',
  },
  {
    id: '3',
    exam: 'Robotics',
    date: '15/01/2023',
    hour: '18:00 - 21:00',
    semester: '3rd semester',
    classroom: '6306',
  },
  {
    id: '4',
    exam: 'Embedded and Ubiquitous Systems',
    date: '16/01/2023',
    hour: '15:00 - 18:00',
    semester: '1st semester',
    classroom: '6206',
  },
  {
    id: '5',
    exam: 'Open Data and Knowledge Graphs',
    date: '16/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '6206',
  },
  {
    id: '6',
    exam: 'Spatial Data Infrastructure',
    date: '16/01/2023',
    hour: '18:00 - 21:00',
    semester: '3rd semester',
    classroom: '6206',
  },
  {
    id: '7',
    exam: 'Linguistic Engineering',
    date: '17/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '5206',
  },
  {
    id: '8',
    exam: 'Accessible Design and Assistive Products',
    date: '17/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '6306',
  },
  {
    id: '9',
    exam: 'IT Business Management',
    date: '17/01/2023',
    hour: '18:00 - 21:00',
    semester: '3rd semester',
    classroom: '6106',
  },
  {
    id: '10',
    exam: 'Cloud Computing and Big Data Ecosystems Design',
    date: '18/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '6106',
  },
  {
    id: '11',
    exam: 'Emerging Technologies and Business Opportunities',
    date: '18/01/2023',
    hour: '18:00 - 21:00',
    semester: '1st semester',
    classroom: '6106',
  },
  {
    id: '12',
    exam: 'Deepening in Software Engineering',
    date: '19/01/2023',
    hour: '15:00 - 18:00',
    semester: '1st semester',
    classroom: '6106',
  },
  {
    id: '13',
    exam: 'Business in IT',
    date: '19/01/2023',
    hour: '18:00 - 21:00',
    semester: '3rd semester',
    classroom: '6306',
  },
  {
    id: '14',
    exam: 'Intelligent Systems',
    date: '22/01/2023',
    hour: '15:00 - 18:00',
    semester: '1st semester',
    classroom: '6306',
  },
  {
    id: '15',
    exam: 'Network Security Software Development',
    date: '22/01/2023',
    hour: '18:00 - 21:00',
    semester: '3rd semester',
    classroom: '5106',
  },
  {
    id: '16',
    exam: 'Interactive Systems',
    date: '23/01/2023',
    hour: '15:00 - 18:00',
    semester: '1st semester',
    classroom: '5106',
  },
  {
    id: '17',
    exam: 'Accessible Design and Assistive Products',
    date: '23/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '6306',
  },
  {
    id: '18',
    exam: 'Model Mining for Decision Making',
    date: '23/01/2023',
    hour: '18:00 - 21:00',
    semester: '3rd semester',
    classroom: '6106',
  },
  {
    id: '19',
    exam: 'Data Processes',
    date: '24/01/2023',
    hour: '15:00 - 18:00',
    semester: '1st semester',
    classroom: '6106',
  },
  {
    id: '20',
    exam: 'Mobile Application Development',
    date: '24/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '6106',
  },
  {
    id: '21',
    exam: 'Relation and Communication Personal Skills',
    date: '24/01/2023',
    hour: '18:00 - 21:00',
    semester: '3rd semester',
    classroom: '6306',
  },
]

function ExamsPage() {
  const [expandedAccordionId, setExpandedAccordionId] = useState(null);

  const handleAccordionClick = (accordionId) => {
    if (expandedAccordionId === accordionId) {
      setExpandedAccordionId(null);
    } else {
      setExpandedAccordionId(accordionId);
    }
  };

  return (
    <Grid className="exams-page">
      <Column lg={16} md={8} sm={4} className="exams-page__r1">
        <div className="main-content-div" id="main-content" role='alert'>
          <h1 className="exams-header">Exams</h1>
          <Accordion align='start' size='lg'>
            <AccordionItem title={<h2>January Exams</h2>} onClick={() => handleAccordionClick('january-exams')} isExpanded={expandedAccordionId === 'january-exams'}>
              <JanuaryExamsTable headers={headers} rows={rowsJanuaryExams} />
              <div>
                <iframe tabIndex={expandedAccordionId === 'january-exams' ? "0" : "-1"} src='https://www.fi.upm.es/docs/estudios/muii/1645_examenes_enero_23_24_MUII.pdf' allowfullscreen
                  style={{ width: '100%', height: '200px' }}
                  title="July exams"
                ></iframe>
              </div>
            </AccordionItem>
            <AccordionItem title={<h2>June Exams</h2>} onClick={() => handleAccordionClick('june-exams')} isExpanded={expandedAccordionId === 'june-exams'}>
              <JanuaryExamsTable headers={headers} rows={rowsJanuaryExams} />
              <div>
                <iframe tabIndex={expandedAccordionId === 'june-exams' ? "0" : "-1"} src='https://www.fi.upm.es/docs/estudios/muii/1645_examenes_enero_23_24_MUII.pdf' allowfullscreen
                  style={{ width: '100%', height: '200px' }}
                  title="July exams"
                ></iframe>
              </div>
            </AccordionItem>
            <AccordionItem title={<h2>July Exams</h2>} onClick={() => handleAccordionClick('july-exams')} isExpanded={expandedAccordionId === 'july-exams'}>
              <JanuaryExamsTable headers={headers} rows={rowsJanuaryExams} />
              <div>
                <iframe tabIndex={expandedAccordionId === 'july-exams' ? "0" : "-1"} src='https://www.fi.upm.es/docs/estudios/muii/1645_examenes_enero_23_24_MUII.pdf' allowfullscreen
                  style={{ width: '100%', height: '200px' }}
                  title="July exams"
                ></iframe>
              </div>
            </AccordionItem>
          </Accordion>
          {/* <div id="june-exams">
          <JuneExamsTable headers={headers} rows={rowsJuneExams} />
        </div>
        <div id="july-exams">
          <JulyExamsTable headers={headers} rows={rowsJulyExams} />
        </div> */}
        </div>
        <div style={{ height: '1150px' }}></div>
      </Column>
    </Grid>

  );
}

export default ExamsPage;

